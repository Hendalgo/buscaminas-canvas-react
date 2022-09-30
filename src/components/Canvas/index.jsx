import React, { useEffect, useRef, useContext } from 'react'
import useMine from '@hooks/useMine';
import useCanvas from '@hooks/useCanvas';
import { BoardContext } from '@contexts/BoardContext';

const Canvas = () => {
  const canvasRef = useRef(null);
  const [board, setBoard] = useContext(BoardContext);

  useEffect(() => {
    const drawCanvas = ()=>{
      const ctx = useCanvas(canvasRef);
      for (let i = 0; i <= 7; i++) {
        for (let j = 0; j <= 7; j++) {
          useMine(ctx, j, i, board, setBoard);
        }
      }
    }
    drawCanvas();
    window.addEventListener('resize', drawCanvas);

    return ()=>{
      window.removeEventListener('resize', drawCanvas);
    }
  });
  const pressButton = ({clientX, clientY})=>{
    const canvasPos = canvasRef.current.getBoundingClientRect();
    console.log(clientX - canvasPos.left + 0.5);
  }  
  return (
    <React.Fragment>
      <canvas onMouseMove={(e)=>pressButton(e)} ref={canvasRef}></canvas>
    </React.Fragment>
  )
}

export default Canvas;