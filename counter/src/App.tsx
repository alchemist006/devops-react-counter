import React, { useState } from 'react';
import './App.css';
import { Button, Stack, styled,Box, Typography } from '@mui/material';

const StyledStack = styled(Stack)({
  backgroundColor:'#e0e0e0',
  display:'flex',
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'center',
  textAlign:'center',
  height:'100vh',
  width:'100vw',
})

const ActionsBox = styled(Box)({
  display:'flex',
  flexDirection:'row',
  gap:'2.5rem',
  marginTop:'2rem',
  alignItems:'center'
})

const GlobalButton = styled(Button)({
  border:'2px solid #272727'
})

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <StyledStack>
      <Box>
        <Typography variant='h3' color={'#272727'}>Counter</Typography>
        <ActionsBox>  
          <GlobalButton onClick={decrement}>
            <Typography variant='h3' color={'#272727'}>-</Typography>
          </GlobalButton>
          <Typography variant='h3' color={'#272727'}>{count}</Typography>
          <GlobalButton onClick={increment}>
            <Typography variant='h3' color={'#272727'}>+</Typography>
          </GlobalButton>
        </ActionsBox>
      </Box>
    </StyledStack>
  );
};

export default App;
