  import { useEffect, useState } from "react";

  function App() {
    const [player , setPlayer] = useState('X');
    const [gameOver , setGameOver] = useState(false);
    const [didWin , setDidWin] = useState(true) 
    const [count , setCount] = useState(0);
    
    // let boxes = document.querySelectorAll(".box");
    const [dataVal , setDataVal]= useState(Array(9).fill(null));
    const boxes = document.querySelectorAll(".box");
    const handleClick = (indi) =>{
      if(!gameOver && dataVal[indi] === null){
        let copyData = [...dataVal];
        copyData[indi] = player;
        setDataVal(copyData);
        setPlayer(prev => prev === 'X' ? 'O' : 'X');
        setCount(prev =>prev+1);
    }
  }
  const findWinner = () =>{
    const winnerList = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let val of winnerList){
      let [a , b, c] = val;
      if(dataVal[a]!==null && (dataVal[a] === dataVal[b] && (dataVal[b] === dataVal[c]))){
        setGameOver(true);
        setPlayer(dataVal[a]);
        boxes[a].classList.add("win");
        boxes[b].classList.add("win");
        boxes[c].classList.add("win");
      }
    }
    if(count === 9){
      setGameOver(true);  
      setDidWin(false);
      setCount(0);
    }

  }
  const StartNewGame = () =>{
    setPlayer('X');
    setDataVal(prev=>(
      prev.map(eachData=>eachData = null)
    ))
    setCount(0)
    setGameOver(false);
    setDidWin(true);
    boxes.forEach((box , index)=>{
      box.classList.remove("win");
    })
  }
    useEffect(()=>{
     findWinner();
    },[dataVal])

    return (
      <div className=" bg-[url('https://e0.pxfuel.com/wallpapers/358/40/desktop-wallpaper-dark-background-dark-gaming.jpg')] min-h-screen bg-cover bg-center flex flex-col w-screen items-center justify-evenly

      ">
      <div className="w-full flex justify-center ">
        <h3 className=" text-white text-center mt-4 px-8 py-[6px] rounded-xl bg-[#ffffe126] inline-block ">{
        gameOver ? (
          didWin ? `Winner Player  ${player}` : "Game Tied"
        ) : (
          `Current Player  ${player}`
        )}</h3>
      </div>
      <div className=" w-[90%] max-w-[20rem] bg-[#ffffe126] grid grid-cols-3 place-items-center aspect-square rounded-2xl border-2 border-[rgba(255,255,255,0.25)] p-8">
        <div className="text-white text-4xl  w-[100%] aspect-square cursor-pointer h-[100%] flex justify-center items-center border-r-2 border-b-2  box "
        placeholder={`${player}`}
        onClick={()=>handleClick(0)}>{dataVal[0]}</div>
        <div className="text-white text-4xl h-[100%]  w-[100%] aspect-square cursor-pointer flex justify-center items-center border-r-2 border-b-2 box "  onClick={()=>handleClick(1)}>{dataVal[1]}</div>
        <div className="text-white text-4xl h-[100%]  w-[100%] aspect-square cursor-pointer flex justify-center items-center border-b-2 box "  onClick={()=>handleClick(2)}>{dataVal[2]}</div>
        <div className="text-white text-4xl h-[100%]  w-[100%] aspect-square cursor-pointer flex justify-center items-center border-r-2 border-b-2 box " onClick={()=>handleClick(3)}>{dataVal[3]}</div>
        <div className="text-white text-4xl h-[100%] w-[100%] aspect-square cursor-pointer flex justify-center items-center border-r-2 border-b-2 box " onClick={()=>handleClick(4)}>{dataVal[4]}</div>
        <div className="text-white text-4xl h-[100%]  w-[100%] aspect-square cursor-pointer flex justify-center items-center  border-b-2 box " onClick={()=>handleClick(5)}>{dataVal[5]}</div>
        <div className="text-white text-4xl h-[100%]  w-[100%] aspect-square cursor-pointer flex justify-center items-center border-r-2 box  " onClick={()=>handleClick(6)}>{dataVal[6]}</div>
        <div className="text-white text-4xl h-[100%]  w-[100%] aspect-square cursor-pointer flex justify-center items-center border-r-2 box " onClick={()=>handleClick(7)}>{dataVal[7]}</div>
        <div className="text-white text-4xl h-[100%]  w-[100%] aspect-square cursor-pointer flex justify-center items-center box " onClick={()=>handleClick(8)}>{dataVal[8]}</div>
      </div>
      
      <div>
             (<button  className={`bg-[#ffffe126] px-4 text-white py-2 rounded-lg  ${gameOver ? " opacity-100 disabled:false someExtra" : "opacity-0 disabled:true "}`}onClick={StartNewGame}>New Game</button>)
            {/* <button className={`bg-[#ffffe126] px-4 text-white py-2 rounded-lg ${gameOver ? " opacity-100 disabled:false" : "opacity-0 disabled:true"}`}></button> */}
      </div>
      </div>

    );
  }

  export default App;
