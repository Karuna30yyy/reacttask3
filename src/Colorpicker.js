

import React,{useState} from 'react';

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div>
      {showColors && (
        <div style={{ marginTop: '10px' }}>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: '30px',
                height: '30px',
                marginRight: '5px',
                display: 'inline-block',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      <div style={{display:"flex",justifyContent:"center"}}>
      <button style={{backgroundColor:selectedColor,color: selectedColor? "white":"black",marginTop:"10px"}} onClick={() => setShowColors(!showColors)}>Pick a color</button>
      </div>
    </div>
  );
};

export default ColorPicker;