import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TextField, Typography } from "@mui/material";
import MovingBackground from "../MovingBackground";

// Wrapper for full screen
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

// // Glassmorphic Card
// const GlassCard = styled.div`
//   width: 360px;
//   padding: 40px;
//   border-radius: 20px;
//   backdrop-filter: blur(12px) saturate(180%);
//   -webkit-backdrop-filter: blur(12px) saturate(180%);
//   background-color: rgba(255, 255, 255, 0.08);
//   border: 1px solid ${({ theme }) => theme.colors.border};
//   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
//   color: ${({ theme }) => theme.colors.text};
//   position: relative;
//   z-index: 1;
// `;

// Glassmorphic Card with animated glowing border
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
  overflow: hidden; /* needed for border effect */

  /* Border effect container */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px; /* border thickness */
    background: linear-gradient(
      120deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary},
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.primary}
    );
    background-size: 300% 300%;
    animation: borderWave 6s linear infinite;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box,
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

// Title
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

  /* Gradient animated text */
  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.primary}
  );
  background-size: 300% 300%;
  animation: textWave 6s linear infinite;

  /* Apply gradient to text */
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

// Styled MUI TextField with theme overrides
// const ThemedTextField = styled(TextField)`
//   & .MuiOutlinedInput-root {
//     border-radius: 10px;
//     background: ${({ theme }) => theme.colors.surface}CC;

//     & fieldset {
//       border-color: ${({ theme }) => theme.colors.border};
//     }

//     &:hover fieldset {
//       border-color: ${({ theme }) => theme.colors.primary};
//     }

//     &.Mui-focused fieldset {
//       border-color: ${({ theme }) => theme.colors.primary};
//       box-shadow: 0 0 6px ${({ theme }) => theme.colors.primary}55;
//     }

//     input {
//       color: ${({ theme }) => theme.colors.text};
//     }
//   }

//   & label {
//     color: ${({ theme }) => theme.colors.textSecondary};
//   }

//   & .MuiInputLabel-root.Mui-focused {
//     color: ${({ theme }) => theme.colors.primary};
//   }
// `;

// Styled MUI TextField with theme overrides
// const ThemedTextField = styled(TextField)`
//   & .MuiOutlinedInput-root {
//      border-radius: 10px;
//      background: ${({ theme }) => theme.colors.surface}CC;

//      & fieldset {
//        border-color: ${({ theme }) => theme.colors.border};
//      }

//     &:hover fieldset {
//       border-color: ${({ theme }) => theme.colors.primary};
//     }

//     &.Mui-focused fieldset {
//       border-color: ${({ theme }) => theme.colors.primary};
//       box-shadow: 0 0 6px ${({ theme }) => theme.colors.primary}55;
//     }

//     input {
//       color: ${({ theme }) => theme.colors.text};

//       &::placeholder {
//         color: ${({ theme }) => theme.colors.textSecondary};
//         opacity: 0.8;
//         transition: color 0.3s ease;
//       }
//     }

//     &:hover input::placeholder {
//       color: ${({ theme }) => theme.colors.primary};
//     }

//     &.Mui-focused input::placeholder {
//       color: ${({ theme }) => theme.colors.primary};
//     }
//   }

//   & label {
//     color: ${({ theme }) => theme.colors.textSecondary};
//     transition: color 0.3s ease;
//   }
//     //  &:hover label::placeholder {
//     //   color: ${({ theme }) => theme.colors.primary};
//     // }

//   & .MuiInputLabel-root.Mui-focused {
//     color: ${({ theme }) => theme.colors.primary};
//   }

//   & .MuiInputLabel-root:hover {
//     color: ${({ theme }) => theme.colors.primary};
//   }
// `;

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

  /* Label styles */
  & .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color 0.3s ease;
  }

  /* 🔥 Change label when input is hovered */
  &:hover .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.primary};
  }

  /* 🔥 Change label when input is focused */
  & .MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.colors.primary};
  }
`;


// Form
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// Options row
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

// Button
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

const NewLogin = () => {
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
                <Welcome

                >
                    Welcome Back
                </Welcome>
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

                    <Button type="submit">Login</Button>
                </Form>
            </GlassCard>
        </Wrapper>
    );
};

export default memo(NewLogin);
