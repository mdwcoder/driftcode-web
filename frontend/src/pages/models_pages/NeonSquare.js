import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
  background-color: #0f0f0f;
  border-radius: 10px;
  box-shadow: 0 0 20px #0099ff, 0 0 40px #0099ff, 0 0 60px #0099ff, 0 0 80px #0099ff;
  color: #9ff;
  font-size: 24px;
  font-weight: bold;
  height: 90px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const NeonSquare = ({ name }) => {
  return (
    <Square className='neonsq'>
      {name}
    </Square>
  );
};

export default NeonSquare;
