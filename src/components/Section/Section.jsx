import React from 'react';
import styles from './Section.module.css';
import { CircularProgress,Box } from '@mui/material';
import Card from "../Card/Card"

const Section = ({title,data,type}) => {

  const handleToggle=()=>{
    console.log("Change text");
  }
  return (<>
      <div className={styles.header}> 
      <h3>{title}</h3>
      <h4 className={styles.toggleText} onClick={handleToggle}>Show All </h4>
    </div>
{
      data.length===0?(
        <Box sx={{display:'flex'}}>
        <CircularProgress />
        </Box>
      ):
      <div className={styles.cardsWrapper}>
        <div className={styles.wrapper}>
        {data.map((item)=>(
        <Card data={item} type={type} />
      ))}
        </div>

      </div>
      
      }
     </>
  )
}

export default Section;