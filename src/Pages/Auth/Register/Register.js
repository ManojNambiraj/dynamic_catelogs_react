import React, { useState } from "react";
import "./Register.css";
import RegisterFormAnimation from "../../../assests/images/RegsiterAnimation.png";

import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

const Register = () => {
  const navigate = useNavigate();
  const [backEndError, setBackEndError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const schema = z
    .object({
      Name: z.string().min(1, "Name is required"),
      Email: z.string().email("Invalid email").min(1, "Email is required"),
      Password: z.string().min(1, "Password is required"),
      ConfirmPassword: z.string().min(1, "Confirm password is required"),
      Age: z.string().min(1, "Age is required"),
      Mobile: z.string().min(1, "Mobile no is required"),
    })
    .refine((data) => data.Password === data.ConfirmPassword, {
      path: ["ConfirmPassword"],
      message: "Password doesn't match",
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
      Age: "",
      Mobile: "",
    },
    resolver: zodResolver(schema),
  });

  const onsubmit = async (values) => {
    try {
      const { Name, Email, Password, ConfirmPassword, Age, Mobile } = values;

      const postData = await axios.post(`${BackendAPI}/user/register`, {
        Name,
        Email,
        Password,
        ConfirmPassword,
        Age,
        Mobile,
      });

      if (postData.data.message === "User registered successfully") {
        navigate("/login");
      }
    } catch (error) {
      setBackEndError(error.response.data.message);
    }
  };

  return (
    <div className="Register_Container">
      <div className="register_form_content">
        <div className="RegisterFormSections">
          <h2 className="register_header">User Register</h2>
          {backEndError && (
            <label className="BackendError">{backEndError}</label>
          )}
          <form onSubmit={handleSubmit(onsubmit)}>
            <TextField
              id="standard-basic"
              className="textFieldBox"
              label="Name"
              variant="standard"
              autoComplete="off"
              {...register("Name")}
            />

            {errors.Name && (
              <label className="formErrors">{errors.Name.message}</label>
            )}

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

            <FormControl sx={{ m: 0, width: "100%" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Confirm Password
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
                {...register("ConfirmPassword")}
              />
            </FormControl>

            {errors.ConfirmPassword && (
              <label className="formErrors">
                {errors.ConfirmPassword.message}
              </label>
            )}

            <TextField
              id="standard-basic"
              type="number"
              label="Age"
              variant="standard"
              autoComplete="off"
              {...register("Age")}
            />

            {errors.Age && (
              <label className="formErrors">{errors.Age.message}</label>
            )}

            <TextField
              id="standard-basic"
              type="number"
              label="Mobile no"
              variant="standard"
              autoComplete="off"
              {...register("Mobile")}
            />

            {errors.Mobile && (
              <label className="formErrors">{errors.Mobile.message}</label>
            )}

            <Button
              type="submit"
              size="medium"
              sx={{ width: "100%", fontWeight: "600" }}
              variant="contained"
            >
              Register
            </Button>

            <label for="password" class="form-label">
              Already you are a member? <Link to={`/login`}>Login</Link>
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

export default Register;
