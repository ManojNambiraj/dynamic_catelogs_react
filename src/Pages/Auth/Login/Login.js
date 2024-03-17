import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterFormAnimation from "../../../assests/images/LoginImg.avif";

import axios from "axios";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import { BackendAPI } from "../../../App";

const Login = () => {
  const navigate = useNavigate();
  const [backEndError, setBackEndError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const schema = z.object({
    Email: z.string().email("Invalid email").min(1, "Email is required"),
    Password: z.string().min(1, "Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Email: "",
      Password: "",
    },
    resolver: zodResolver(schema),
  });

  const onsubmit = async (values) => {
    try {
      const { Email, Password } = values;

      const postData = await axios.post(`${BackendAPI}/user/login`, {
        Email,
        Password,
      });

      console.log(postData);

      if (postData?.data?.message === "Login Successfully") {
        window.sessionStorage.setItem("token", postData.data.token);
        navigate("/");
      }
    } catch (error) {
      setBackEndError(error?.response?.data?.message);
    }
  };

  return (
    <div className="Register_Container">
      <div className="register_form_content">
        <div className="RegisterFormSections">
          <h2 className="register_header">User Login</h2>
          {backEndError && (
            <label className="BackendError">{backEndError}</label>
          )}
          <form onSubmit={handleSubmit(onsubmit)}>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              autoComplete="off"
              {...register("Email")}
            />

            {errors.Email && (
              <label className="formErrors">{errors.Email.message}</label>
            )}

            <FormControl sx={{ m: 0, width: "100%" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                autoComplete="off"
                {...register("Password")}
              />
            </FormControl>

            {errors.Password && (
              <label className="formErrors">{errors.Password.message}</label>
            )}

            <Button
              type="submit"
              size="medium"
              sx={{ width: "100%", fontWeight: "600" }}
              variant="contained"
            >
              Login
            </Button>

            <label for="password" class="form-label">
              Don't have an account? <Link to={`/register`}>Register</Link>
            </label>
          </form>
        </div>
        <div className="RegisterFormAnimations">
          <img src={RegisterFormAnimation} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
