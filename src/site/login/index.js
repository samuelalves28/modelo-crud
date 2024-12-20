import { useState } from "react";
import { Button, TextField, Typography, Container, Paper, Link } from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  padding: 0,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "400px",
  width: "100%",
  borderRadius: "10px",
  backgroundColor: "#141414",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  background: "linear-gradient(to right, #4e54c8, #8f94fb)",
  color: "#ffffff",
  fontWeight: "bold",
  padding: theme.spacing(1.5),
  "&:hover": {
    background: "linear-gradient(to right, #3c47a2, #6f75e8)",
  },
  borderRadius: "15px",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#8f94fb",
  marginTop: theme.spacing(1),
  textDecoration: "none",
  fontSize: "0.9rem",
  "&:hover": {
    color: "#4e54c8",
  },
}));

function LoginView() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Lógica para autenticação
    console.log("Login realizado:", { email, senha });
  };

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography
          variant="h4"
          sx={{
            marginBottom: 3,
            fontWeight: "bold",
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          FAÇA SEU LOGIN
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            type="email"
            placeholder="email@dominio.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            required
            fullWidth
            sx={{
              marginBottom: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
                backgroundColor: "#1e1e1e",
                color: "#ffffff",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#4e54c8",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#8f94fb",
              },
            }}
          />
          <TextField
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            variant="outlined"
            required
            fullWidth
            sx={{
              marginBottom: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
                backgroundColor: "#1e1e1e",
                color: "#ffffff",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#4e54c8",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#8f94fb",
              },
            }}
          />
          <StyledLink href="#" underline="none" style={{color: '#c84242', justifyContent: 'end', display: 'flex'}}> 
            Esqueci a senha
          </StyledLink>
          <StyledButton type="submit" variant="contained" fullWidth>
            Entrar
          </StyledButton>
          <StyledLink href="#" underline="none" style={{justifyContent: 'center', display: 'flex', padding:'10px'}}>
            Criar Conta
          </StyledLink>
        </form>
      </StyledPaper>
    </StyledContainer>
  );
}

export default LoginView;
