import React, { useState } from 'react';

export function Card(props){
    const [isHovered, setIsHovered] = useState(false);

    const indicatorStyle = {
        position: 'absolute',
        top: -30,
        left: -30,
        width: 0,
        height: 0,
        borderTop: '30px solid transparent',
        borderRight: '30px solid #DA0037',
        borderBottom: '30px solid transparent',
        borderLeft: '30px solid transparent',
        borderTopLeftRadius: '8px',
        transform: 'rotate(45deg)'
      };

      const textStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: props.qty < 10 ? 'translate(100%, -40%) rotate(-45deg)' : 'translate(50%, -40%) rotate(-45deg)',
        color: '#EDEDED',
      };

      const rowStyle = {
        position: 'absolute',
        bottom: 0, // Align to the bottom
        left: 12,
        width: '250px',
        display: isHovered ? 'block' : 'none',
      };
      
    return(
        <div style={{ position: 'relative', display: 'inline-block'}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={indicatorStyle}>
                <p style={textStyle}>{props.qty}</p>
            </div>
            <img 
                src={props.img} 
                alt={props.name} 
                style={{width: "250px"}}
            />
            <div className="row text-center" style={rowStyle}>
                <div className="col" style={{ backgroundColor: '#171717' }}>Per Card: ${props.price.toFixed(2)}</div>
                <div className="col" style={{ backgroundColor: '#00DB5B' }}>
                    Total: ${(props.price * props.qty).toFixed(2)}
                </div>
            </div>
        </div>
    )
}