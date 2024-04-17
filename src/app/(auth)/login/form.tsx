"use client";
import React, { FC, FormEvent, useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { H4 } from "@/src/components/typography";
import { StyledContainer } from "./styles";
import { redirect, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginForm: FC = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      email: form.email,
      password: form.password,
      redirect: false,
    };

    const response = await signIn("credentials", formData);

    if (!response?.error) {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <StyledContainer>
      <div>
        <H4>Login</H4>
        <Grid container spacing={3}>
          <Grid item xs={12} mt={2}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <Button
                type="submit"
                color="primary"
                variant="outlined"
                fullWidth
              >
                Sign In
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </StyledContainer>
  );
};

export default LoginForm;
