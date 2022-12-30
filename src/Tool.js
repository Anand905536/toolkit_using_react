import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Tooltip = ({ position }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const tooltipStyles = {
    position: 'absolute',
    color:'white'
  };

  if (position === 'top') {
    tooltipStyles.top = 0;
    tooltipStyles.bottom = '10%';
    tooltipStyles.transform = 'translate(-50%, -100%)';
  } else if (position === 'bottom') {
    tooltipStyles.bottom = '80%';
    tooltipStyles.left = '46%';
  } else if (position === 'left') {
    tooltipStyles.top='55px'
    tooltipStyles.left = '35%';
    
  } else if (position === 'right') {
    tooltipStyles.top='55px'
     tooltipStyles.right = '35%';
    
  }

  return (
    <div>
      <div
        onMouseEnter={toggleVisibility}
        onMouseLeave={toggleVisibility}
      >
         <Button variant="contained" color="primary">Hover over me</Button>
      </div>
      {visible && (
        <div style={tooltipStyles}>
          This is a tooltip
        </div>
      )}
    </div>
  );
};

export default Tooltip;







