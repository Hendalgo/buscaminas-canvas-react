const useCanvas= (canvasRef)=>{
    let canvasSize;
    const canvas = canvasRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;
    width > height
    ?canvasSize = height*0.7
    :canvasSize = width*0.7;
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    return canvas.getContext('2d');
}

export default useCanvas;