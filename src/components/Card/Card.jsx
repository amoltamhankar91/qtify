import React from "react";
import styles from "./Card.module.css";
import {Chip,Tooltip} from "@mui/material";

const Card = (props) => {
  const { data, type } = props;

  const getCard = (type) => {
    switch (type) {
      case "album": {
       const { image,title,songs,follows } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img  src={image} alt="album" losading="lazy" />
              <div className={styles.followLikes}>
                <Chip
                label ={`${follows} Follows`}
                size="small"
                className={styles.chip}
                />
              </div>
            </div>
            <div className={styles.title}>
              <p>{title}</p>
            </div>
          </div>
          </Tooltip>
        );
      }
     
      case "songs" :{
        const { image,title,likes } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img  src={image} alt="songs" losading="lazy" />
              <div className={styles.followLikes}>
                <Chip
                label ={`${likes} likes`}
                size="small"
                className={styles.chip}
                />
              </div>
            </div>
            <div className={styles.title}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };
  return getCard(type);
};
export default Card;
