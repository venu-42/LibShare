import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import UserPic from "../media/images/user1.jpg";
import NavBar from "../Components/NavBar";
import BookPic from "../media/books/RDPD.webp";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "../CSS/Login.css";

const BookDetails = () => {
  return (
    <div>
      <NavBar />
      <Card className="loginCard">
          <div className="loginText">
              Login
          </div>
          <div className="loginBox">
              <div className="textBox">
              <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
              </div>
              <div className="textBox">
              <TextField
                fullWidth
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                />
              </div>
              <div className="bottomOptions">
                <div>
                    <a>forgot password?</a>
                </div>
                <div>
                    <a>SignUp</a>
                </div>
               </div>
          </div>
        </Card>
        
      </div>
  );
};

export default BookDetails;
