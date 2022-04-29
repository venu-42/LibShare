import React from 'react';

import Card from '@mui/material/Card';
import { CardContent,CardMedia,Typography,CardActions,Button} from '@mui/material';
import BookPic from '../media/books/harrypotter.jpg'

const BookCard = ({Name,Author,Rating}) => {
  return (
    <div style={{ width:"18%",marginRight: "10px",marginLeft: "10px",marginBottom:"20px",marginTop:"20px",}}>

    <Card sx={{marginLeft:"auto",marginRight:"auto",maxWidth: 200,maxHeight: 300 }}>
      <CardMedia
        component="img"
        height="220"
        image={BookPic}
        alt="book"
        style={{borderRadius:" 10px"}}
      />
      <CardContent style={{padding:"10px"}}>
        <Typography   component="div" style={{textAlign:"center",fontSize:18}}>
          {Name}
        </Typography>
        <Typography  variant="h6" component="div" style={{textAlign:"center",fontSize:12}}>
          {Author}
        </Typography>
        <Typography  variant="h6" component="div" style={{textAlign:"center",fontSize:12}}>
          Rating : {Rating}
         </Typography>
      </CardContent>
      
    </Card>
    </div>
    
  )
}

export default BookCard
