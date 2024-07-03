import { useEffect, useState } from "react";

const Timer = () =>{

    const [second , setSecond] = useState(0);

    useEffect(() =>{
        const interval = setInterval(() =>{
            setSecond(pre => pre + 1);
        },1000);

        return () => {
            clearInterval(interval)
        };

    },[])

    return(
        <>
        <h2>Timer</h2>
        <p>{second} seconds</p>
        </>
    )

}

export default Timer;