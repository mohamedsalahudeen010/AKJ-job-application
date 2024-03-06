import React, { useState,useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'


import "./card.css"
import { AKJContext } from '../../Context';

function CompCard({name,img}) {
  const [show, setShow] = useState(false);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const{baseUrl}=useContext(AKJContext)
  return (
    <div>
        <Card sx={{ maxWidth: 250 }}
        className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          width="100"
          image={img}
          alt={name}
          style={{borderRadius:"5%"}}
          value={name}
          // onClick={(e)=>{dispatch(fetchMoviesWithQuery(baseUrl,name));
          //   navigate(`/selMovie/${name}`)}}
        />
        <CardContent height="200">
          <Typography gutterBottom variant="p" component="div"
          style={{fontWeight:"bolder"}}>
            {name}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default CompCard