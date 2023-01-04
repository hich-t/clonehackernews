import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import parse from 'html-react-parser';

import '../App.css'



const StyledFab = styled(Fab)({
  position: 'relative',
  zIndex: 1,
  bottom: 10,
  left: 0,
  right: 0,
  margin: '0 auto',
});

const CardsComment = (props) => {

    const [comment,setComment] = useState([])
    const [loading,setloading] = useState(false)

const fetchData = async () => {
        try {
            const callData =  await axios.get(`http://hn.algolia.com/api/v1/items/${parseInt(props.id)}`)
            setComment(callData.data.children); 
            setloading(true)
        }
      catch(err) {console.log(err)}
      }

    useEffect(() => {
        fetchData()
      }, []);


console.log(comment)

  return (

    <div className="commentcard">
    <React.Fragment>

      <CssBaseline />
      <Paper className="commentcard" square sx={{ pb: '50px' }}>
      
      <StyledFab className="addBtn" alt="Add a comment" color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>

        <Typography className="commentdiv" variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Comments
        </Typography>
        
        <List sx={{ mb: 2 }}>
          {loading ?
            comment.map((e) => (
            <React.Fragment key={e.id}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" />
                </ListItemAvatar>
                <ListItemText className="commentary">
                {`Author : ${e.author}`}
                {parse(String(e.text))}
                  </ListItemText>
              </ListItem>
            
            </React.Fragment>
          )) : <img className="load loadAnim" src="./loading.png" alt=""></img>}
        </List>
      </Paper>
     
    </React.Fragment>
    </div>
  );
}

export default CardsComment;