import React, { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardsComment from './CardsComment'


const Cards = (props) => {
  const [cardComment,setCardComment] = useState(false)
    const milliseconds = props.date * 1000 
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.toLocaleString().replace(","," at") 

const card = (
  <React.Fragment>
<div className='card'>


    <CardContent>

    <img className='logo2' src="./Untitled-2.png" alt=""></img>

           <Typography className="titre" variant="h5" component="div">
           <a href={props.url} target="_blank" rel="noreferrer">{props.title}</a> 
          </Typography>
      <Typography className="author" sx={{ mb: 1.5 }} color="text.secondary">
        by {props.author}
      </Typography>
      <Typography className="pointsanddate" variant="body2">
        {props.point} points <br/>Published on {humanDateFormat} 
      </Typography>
      <Typography className="commentsNb" sx={{ mb: 0.5 }} color="text.secondary">
       <button className="comBtn" onClick={()=> setCardComment(!cardComment)}>Comments : {props.nbrcomments}</button> 
      </Typography>
    </CardContent>
    </div>
  </React.Fragment>
);



  return (
    <Box sx={{ minWidth: 275 }}>
      <Card className="cardbox" variant="outlined">{card}</Card>
      {cardComment ? <CardsComment id={props.idcomment}/> : ""}
    </Box>
  );
}

export default Cards;