import { Typography } from "@mui/material";
import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MovingBackground from "./MovingBackground";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const GlassCard = styled.div`
  width: 360px;
  padding: 40px;
  border-radius: 20px;
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.08); /* default glass overlay */
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface}CC; /* transparent surface */
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  font-size: 14px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.primary}55;
  }
`;

const Button = styled.button`
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

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "1234") {
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("user", username);
            navigate("/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <Wrapper>
             <MovingBackground />
            <GlassCard>
                <Typography
                    variant="h5"
                    align="center"
                    sx={{ color: "primary.main", mb: 3, fontWeight: "bold" }}
                >
                    Welcome Back
                </Typography>
                <Title>Login</Title>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <Options>
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="/forgot-password">Forgot password?</a>
                    </Options>

                    <Button type="submit">Login</Button>
                </Form>
            </GlassCard>
        </Wrapper>
    );
}

export default memo(Login)