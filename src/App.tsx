import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple} from '@mui/material/colors';
import { Box, Slider, Stack } from '@mui/material';
import { VolumeDown, VolumeUp } from '@mui/icons-material';
import Header from '../src/components/Header';
import SliderComponent from './components/SliderComponent';

function App() {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  return (
    <div className="App-header">
        <Header />
        <SliderComponent />
    </div>
  );
}

export default App;