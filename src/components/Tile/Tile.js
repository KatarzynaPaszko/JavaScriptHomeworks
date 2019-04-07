import React from 'react';
// import { NavLink } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import styles from './Tile.module.css'

const Tile = ({
  name,
  img,
  description
}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <div className={styles.img}>
        <Card.Img variant="top" src={img}/>
      </div>
      <Card.Body>
      <Card.Title className={styles.title}>{name}</Card.Title>
      <Card.Text className={styles.description}>
          {description}
      </Card.Text>
      <Button variant="success">
        {/* <NavLink exact to="/MorseCode" className={styles.link} > */}
        See solution
        {/* </NavLink> */}
      </Button>
      </Card.Body>
    </Card>
  );
}

export default Tile;