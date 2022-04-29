import React from 'react';
import { Card, Grid, Typography } from "@mui/material";
import UserPic from "../media/images/user1.jpg";
import "../CSS/RequestCard.css";
import Button from '@mui/material/Button';

const RequestCard = ({Name,Email,Phone,Address}) => {
  return (
    <>
     <Card style={{ marginTop: "30px",marginBottom: "30px", width: "65%",marginRight: "auto",marginLeft: "auto"}}>
       <div className={"cardOuterDiv"}>
           {/* <div className="imgDiv">
                <img src={UserPic}></img>
           </div> */}
           <div style={{ width: "20%",display: "flex", flexDirection: "row",justifyContent: "center",alignItems: "center"  }}>
              <img
                src={UserPic}
                style={{ width: "50%", height: "100%", borderRadius: "50%" }}
                alt="..."
              />
            </div>
           <div className={"detailsDiv"}>
               <div className={"detailsDivInner"}>
                <p>Name:{Name}</p>
                <p>Email: {Email}</p>
                <p>Phone: {Phone}</p>
                <p>Address: {Address}</p>
               </div>
           </div>
           <div className={"connectDiv"}>
           
            <Button size="small" variant="outlined">Accept</Button>
  
           </div>
       </div>
      </Card>
    </>
  )
}

export default RequestCard;