
const useMine = (ctx, colum, row, board, setBoard) =>{
  
  let mineSize = ctx.canvas.width / 8;
  const x = mineSize * colum;
  const y = mineSize * row;
  mineSize = ctx.canvas.width / 8.3;
  console.log(board.length, " Antes");
  setBoard([0,1,2]);
  console.log(board.length, " Despues");
  if (board.length !== 0) {
    setBoard(current =>
      [...current, {
        fromX: x,
        toX: x+mineSize,
        fromY: y,
        toY: y+mineSize,
        presssed: false
      }]
    ); 
  }  
  ctx.fillStyle =/*  board[(colum*row)-1].presssed ? "gray":  */"lightgray";
  ctx.fillRect(x, y, mineSize, mineSize);
  
}

export default useMine;