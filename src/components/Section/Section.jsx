import React, { useState } from 'react';
import styles from './Section.module.css';
import { CircularProgress,Box } from '@mui/material';
import Card from "../Card/Card"
import Carousel from '../Carousel/Carousel';
import Filters from '../Filters/Filters';

const Section = (props) => {
  const {title,data,type,value,setValue}=props;
  const [toggle,setToggle]=useState(false); 

  const handleToggle=()=>{
    setToggle(!toggle);
  }
  return (<>
  {type==='songs'?(
      <div> 
      <h3>{title}</h3>
      <div><Filters value={value} setValue={setValue}/></div>
      </div>):
      
      (
        <div className={styles.header}> 
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
        {!toggle?"Show All":"Collapse ALl"}
        </h4>
        </div>)
}
{
      data.length===0?(
        <Box sx={{display:'flex'}}>
        <CircularProgress />
        </Box>
      ):(
        
      
      <div className={styles.cardsWrapper}>
       {!toggle ?(<Carousel data={data} component={(data)=><Card data={data} type={type} />} />):
       (<div className={styles.wrapper}>
        {data.map((item)=>(
        <Card data={item} type={type} />
      ))}
        </div>)
       
        }

      </div>
)
}
     </>
  )
}

export default Section;