import React, { useEffect, useState } from "react";

export default function DogPics () {
  const API = 'https://dog.ceo/api/breeds/image/random';
  const [dogImage, setDogImage] = useState("https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg")
  const loadDog = async () => {
    const data = await fetch(API);
    const dogData = await data.json();
    setDogImage (dogData.message);
  }
  return (
    <div className='dog-pics'>
      <img src={dogImage} />
      <button onClick={loadDog}>🐶</button>
    </div>
  )
}
