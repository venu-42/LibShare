import React from 'react';
import { Card, Grid, Typography } from "@mui/material";
import UserPic from "../media/images/user1.jpg";

const UserCard = () => {
  return (
    <>
         <Card style={{ marginTop: "30px", width: "35%",marginRight: "auto",marginLeft: "auto"}}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "30%" }}>
            <div style={{ margin:"10%"}}>
              <img
                src={UserPic}
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                alt="..."
              />
            </div>
          </div>
          <div style={{ width: "70%",display: "flex",alignItems: "center",justifyContent: "center"}}>
            <div style={{ display: "flex",flexDirection:"column",alignItems:"flex-start"}}>
              <div style={{margin:"15px"}}>
                <Typography
                  component="div"
                  style={{ textAlign: "center", fontSize: 18 }}
                >
                  Name : M. Sushanth Kumar
                </Typography>
              </div>
              <div style={{margin:"15px"}}>
                <Typography
                  component="div"
                  style={{ textAlign: "center", fontSize: 15 }}
                >
                  E-mail : sushanthkumar870@gmail.com
                </Typography>
              </div>
              <div style={{margin:"15px"}}>
                <Typography
                  component="div"
                  style={{ textAlign: "center", fontSize: 15 }}
                >
                  Phone : XXXXXXX131
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default UserCard;