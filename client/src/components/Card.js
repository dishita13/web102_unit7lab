import React from 'react'
import { useState, useEffect } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client'

const Card = (props) =>  {

  return (
      <div className="Card" style = {{backgroundColor: props.color}}>
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="name">{props.name}</h2>
          <h3 className="speed">{props.speed + "mph"}</h3>
          <p className="color" >
          {Array.isArray(props.color) ? (
              props.color.map((color, index) => (
                <span key={index} className="color-badge">{color}</span>
              ))
            ) : (
              <span className="color-badge">{props.color}</span>
            )}

          </p>
      </div>
  );
};

export default Card;