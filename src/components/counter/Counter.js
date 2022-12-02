import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './Counter.scss';

const Counter = () => {
    const [count, setCount] = useState(0);
    const decrement = () => {
        if(count!==0){
            setCount(count-1)
        }
    }
  return (
    <div className='counter-main'>
        <div className="count">{count}</div>
        <div className="count-btns">
            <Button
                onClick={decrement} 
                sx={{
                    margin: "1rem",
                    fontSize: "2rem",
                    padding: "0 3.3rem",
                    backgroundColor: "#00005C",
                    "&:hover": {
                        backgroundColor: "#282A3A",
                    }
                }}
                variant="contained">-</Button>
            <Button git init
                onClick={()=>setCount(count+1)} 
                sx={{
                    margin: "1rem",
                    fontSize: "2rem",
                    padding: "0 3rem",
                    backgroundColor: "#00005C",
                    "&:hover": {
                        backgroundColor: "#282A3A",
                    }
                }}
                variant="contained">+</Button>
        </div>
        <div className='copyright'>&#169; sidharth</div>
    </div>
  )
}

export default Counter