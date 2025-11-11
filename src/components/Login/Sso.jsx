import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TextField, Typography, Stack, Button as MUIButton } from "@mui/material";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import LinkedIn from "react-linkedin-login-oauth2";

import MovingBackground from "../MovingBackground";

/* ---------------- Styled Components ---------------- */

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  position: relative;
  overflow: hidden;
`;

const GlassCard = styled.div`
  width: 360px;
  padding: 40px;
  border-radius: 20px;
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(
      120deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary},
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.primary}
    );
    background-size: 300% 300%;
    animation: borderWave 6s linear infinite;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }

  @keyframes borderWave {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Welcome = styled.h5`
  margin: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 1.5rem;
  line-height: 1.334;
  text-align: center;
  margin-bottom: 24px;
  font-weight: 700;

  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.primary}
  );
  background-size: 300% 300%;
  animation: textWave 6s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  @keyframes textWave {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const ThemedTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.surface}CC;

    & fieldset {
      border-color: ${({ theme }) => theme.colors.border};
    }

    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 6px ${({ theme }) => theme.colors.primary}55;
    }

    input {
      color: ${({ theme }) => theme.colors.text};

      &::placeholder {
        color: ${({ theme }) => theme.colors.textSecondary};
        opacity: 0.8;
        transition: color 0.3s ease;
      }
    }

    &:hover input::placeholder,
    &.Mui-focused input::placeholder {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  & .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color 0.3s ease;
  }

  &:hover .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.primary};
  }

  & .MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

/* ---------------- Main Component ---------------- */

const Sso = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    /* --- Google OAuth --- */
    const googleLogin = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: { Authorization: `Bearer ${response.access_token}` },
                });
                const data = await res.json();
                console.log("Google User:", data);

                localStorage.setItem("isAuthenticated", "true");
                localStorage.setItem("user", data.email);
                onLogin();
                navigate("/");
            } catch (err) {
                console.error(err);
            }
        },
        onError: (error) => console.log("Google Login Failed:", error),
    });

    /* --- LinkedIn OAuth --- */
    //   const handleLinkedInSuccess = (code) => {
    //     console.log("LinkedIn code:", code);
    //     localStorage.setItem("isAuthenticated", "true");
    //     localStorage.setItem("user", "LinkedIn User");
    //     onLogin();
    //     navigate("/");
    //   };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "1234") {
            onLogin();
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("user", username);
            navigate("/");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <Wrapper>
            <MovingBackground />
            <GlassCard>
                <Welcome>Welcome Back</Welcome>
                <Title>Login</Title>

                <Form onSubmit={handleSubmit}>
                    <ThemedTextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        fullWidth
                    />
                    <ThemedTextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        fullWidth
                    />

                    <Options>
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="/forgot-password">Forgot password?</a>
                    </Options>

                    <SubmitButton type="submit">Login</SubmitButton>
                </Form>

                {/* ---------------- MUI SSO Buttons ---------------- */}
                <Stack spacing={2} alignItems="center" sx={{ mt: 3 }}>
                    <Typography variant="body2" color="text.secondary">
                        or sign in with
                    </Typography>

                    <Stack direction="row" spacing={2} justifyContent="center">
                        <MUIButton
                            variant="outlined"
                            onClick={() => googleLogin()}
                            startIcon={<FaGoogle color="#DB4437" />}
                            sx={{
                                textTransform: "none",
                                backgroundColor: "#fff",
                                color: "#000",
                                borderColor: "#ccc",
                                "&:hover": { backgroundColor: "#f7f7f7", borderColor: "#aaa" },
                            }}
                        >
                            Google
                        </MUIButton>


                        {/* <LinkedIn
                            clientId="YOUR_LINKEDIN_CLIENT_ID"
                            redirectUri={`${window.location.origin}/linkedin`}
                            onSuccess={handleLinkedInSuccess}
                            onError={(error) => console.log("LinkedIn Error:", error)}
                            scope="r_liteprofile r_emailaddress"
                            renderElement={({ onClick }) => ( */}
                                <MUIButton
                                    // onClick={onClick}
                                    variant="contained"
                                    startIcon={<FaLinkedin />}
                                    sx={{
                                        background: "#0A66C2",
                                        color: "#fff",
                                        "&:hover": { background: "#004182" },
                                    }}
                                >
                                    LinkedIn
                                </MUIButton>
                            {/* )}
                        /> */}
                    </Stack>
                </Stack>
            </GlassCard>
        </Wrapper>
    );
};

export default memo(Sso);
