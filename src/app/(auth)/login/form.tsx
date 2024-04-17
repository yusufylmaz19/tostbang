"use client";
import React, { FC, FormEvent, useState } from "react";
import { TextField, Grid, Box, Card } from "@mui/material";
import { H4 } from "@/src/components/typography";
import { StyledContainer } from "./styles";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";

const LoginForm: FC = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const formData = {
        username: form.email,
        password: form.password,
        redirect: false,
      };

      const response = await signIn("credentials", formData);

      if (!response?.error) {
        router.push("/");
        router.refresh();
      } else {
        toast.error("Invalid email or password");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledContainer>
      <Card
        sx={{
          borderRadius: "8px",
          padding: "120px 40px",
          height: "200px",
        }}
      >
        <Box mt={-6} mb={5}>
          <H4 textAlign="center">Customer Login</H4>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} mt={2}>
            <TextField
              name="email"
              label="Email"
              variant="standard"
              onChange={(e: any) => setForm({ ...form, email: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              variant="standard"
              type="password"
              onChange={(e: any) =>
                setForm({ ...form, password: e.target.value })
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <form onSubmit={handleSubmit}>
              <LoadingButton
                type="submit"
                color="primary"
                variant="contained"
                loading={loading}
                fullWidth
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
              >
                Sign In
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
      </Card>
    </StyledContainer>
  );
};

export default LoginForm;
