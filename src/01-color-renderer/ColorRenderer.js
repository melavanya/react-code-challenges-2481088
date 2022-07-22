import React from 'react'
import Color from './Color'

const colors = [{
  hex: '#91A6FF',
  name: 'Cornflower Blue'
},
{
  hex: '#FF88DC',
  name: 'Persian Pink'
},
{
  hex: '#80FF72',
  name: 'Screamin Green'
},
{
  hex: '#FF5154',
  name: 'Tart Orange'
}]

export default function ColorRenderer () {
  return (
    <React.Fragment>
    <h2>
      Use the Color component to render each
       item in the colors array on the page!
    </h2>
    {colors.map(item => 
      <Color hex={item.hex} name={item.name} />
    )}
    </React.Fragment>
  )
}
