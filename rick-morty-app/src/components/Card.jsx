import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  console.log(props.character.id);
  return (
    <div className="bg-slate-300 shadow-md flex flex-col space-y-3 pb-4">
      <img
        src={
          props.character.image ||
          'https://a-z-animals.com/media/2022/05/Shutterstock_1776225536-1-1024x614.jpg'
        }
        alt={props.character.name}
      />

      <h2 className="text-center font-mono">
        {props.character.name}
      </h2>

      <button className="bg-white p-2 w-[max-content] mx-auto rounded shadow-md">
        <Link to={`/characters/${props.character.id}`}>
          See Detail
          </Link>
      </button>
    </div>
  );
}
