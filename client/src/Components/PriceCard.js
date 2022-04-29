import React from 'react'
import { Card, Grid, Typography } from "@mui/material";
import UserPic from "../media/images/user1.jpg";
import NavBar from "../Components/NavBar";
import BookPic from "../media/books/RDPD.webp";
import Button from '@mui/material/Button';

const PriceCard = () => {
  return (
    
        <Card style={{ width: "70%",marginLeft: "auto",marginRight: "auto",marginTop:"20px"}}>
          <div style={{ display: "flex", flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
            <div style={{ width: "20%",display: "flex", flexDirection: "row",justifyContent: "center",alignItems: "center"  }}>
              <img
                src={UserPic}
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                alt="..."
              />
            </div>
            <div style={{ width: "60%",display: "flex", flexDirection: "row",justifyContent: "center",alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div style={{ margin: "10px" }}>
                <Typography
                  component="div"
                  style={{ textAlign: "center", fontSize: 12 }}
                >
                  Name: Venugopal
                </Typography>
              </div>
              <div style={{ margin: "10px" }}>
                <Typography
                  component="div"
                  style={{ textAlign: "center", fontSize: 12 }}
                >
                  Address: Room.no:A319,H-10;
                </Typography>
              </div>
              <div style={{ margin: "10px" }}>
                <Typography
                  component="div"
                  style={{ textAlign: "center", fontSize: 12 }}
                >
                  Price: RS10 per day
                </Typography>
              </div>
            </div>
            </div>
            <div style={{ width: "20%",marginLeft: "auto",marginRight: "auto",marginTop:"20px" }}>
            <Button size="small" variant="outlined">Connect</Button>

            </div>
          </div>
        </Card>
    
  )
}

export default PriceCard;