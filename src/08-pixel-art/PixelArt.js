import React, { createContext, useContext, useState } from 'react';

const ArtContext = createContext({artColor:'lightGrey', setArtColor: () => {}});

function ColorPicker () {
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple'];
  const { setArtColor }= useContext(ArtContext);
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button key={color} style={{ backgroundColor: color }}  
      onClick={() => {setArtColor(color)}}/>)}
    </div>
  )
}

function Pixel () {
  const { artColor } = useContext(ArtContext);
  const [pixelColor, setPixelColor] = useState("lightGrey");
  return <div onClick={() => setPixelColor(artColor)} style={{ height: '20px', width: '20px', backgroundColor: pixelColor, margin: '1px' }} />
}

function Pixels () {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt () {
  const [artColor, setArtColor] = useState("lightGrey");
  return (
      <ArtContext.Provider value={{artColor,setArtColor}}>
      <ColorPicker />
      <Pixels />
      </ArtContext.Provider>
        )
}
