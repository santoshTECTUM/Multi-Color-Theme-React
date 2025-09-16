import React, { useState } from "react";
import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Link
} from "@mui/material";
import styled from 'styled-components';
import { useTheme } from "@mui/material/styles";
import MovingBackground from "../components/MovingBackground";

const GlassCard = styled(Paper)(({ theme }) => ({
    padding: "40px",
    borderRadius: "20px",
    backdropFilter: "blur(16px) saturate(180%)",
    WebkitBackdropFilter: "blur(16px) saturate(180%)",
    backgroundColor:
        theme.muiPalette.mode === "dark"
            ? "rgba(30, 30, 40, 0.55)"
            : "rgba(255, 255, 255, 0.55)",
    border: `1px solid ${theme.muiPalette.divider}`,

    boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
    maxWidth: "400px",
    width: "100%",
}));

const Layout = styled.div`
  display: flex;
  justify-content: center;  /* horizontal center */
  align-items: center;      /* vertical center */
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const theme = useTheme();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username, "Password:", password);
        // here you can call your backend API
    };

    return (
        <Layout>
            <MovingBackground />
            <GlassCard elevation={6}>
                <Typography
                    variant="h5"
                    align="center"
                    sx={{ color: "primary.main", mb: 3, fontWeight: "bold" }}
                >
                    Welcome Back
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 1,
                        }}
                    >
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Remember me"
                            sx={{ color: "text.secondary" }}
                        />

                        <Link
                            href="#"
                            variant="body2"
                            sx={{ color: "secondary.main", cursor: "pointer" }}
                        >
                            Forgot password?
                        </Link>
                    </Box>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, py: 1.4, fontWeight: "bold", borderRadius: "12px" }}
                    >
                        Login
                    </Button>
                </Box>
            </GlassCard>
        </Layout>
    );
}
