import React from 'react';
import Canvas from '@components/Canvas';
import './Home.css';
import { BoardProvider } from '@contexts/BoardContext';

const Home = () => {
  return (
    <BoardProvider>
      <Canvas />
    </BoardProvider>
  )
}

export default Home;