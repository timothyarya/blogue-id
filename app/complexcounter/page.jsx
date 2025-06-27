'use client';
import Button from "../components/dom/Button";
import Counter from "../components/dom/Counter";
import { useState } from "react";
import useTooltip from "../components/Tooltip/TooltipState";
import TooltipContainer from "../components/Tooltip/TooltipContainer";


const Dashboard = () => {
    const {visible, onHover, notHover } = useTooltip();
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    }

    const reset = () => {
        setCount((prevCount) => prevCount = 0);
    }


    
    return (
        <>
            <div>
                <TooltipContainer content="Complex Counter" state={visible}>
                    <div className="flex flex-col mt-30 w-30 justify-center">
                        <Counter count={count} counterState={(count === 10 || count === -10 ) && "Limit Reached"}/>
                        <Button buttonName={"+1"} setlikes={increment} buttonState={(count === 10 || count === -10) ? true : false}/>
                        <Button buttonName={"-1"} setlikes={decrement} buttonState={(count === 10 || count === -10) ? true : false}/>
                        <Button buttonName={"Reset"} setlikes={reset} buttonState={(count === 10 || count === -10) ? false : true}/>
                    </div>
                </TooltipContainer>
                <TooltipContainer content="Complex Counter 2" state={visible}>
                    <div className="flex flex-col mt-30 w-30 justify-center">
                        <Counter count={count} counterState={(count === 10 || count === -10 ) && "Limit Reached"}/>
                        <Button buttonName={"+1"} setlikes={increment} buttonState={(count === 10 || count === -10) ? true : false}/>
                        <Button buttonName={"-1"} setlikes={decrement} buttonState={(count === 10 || count === -10) ? true : false}/>
                        <Button buttonName={"Reset"} setlikes={reset} buttonState={(count === 10 || count === -10) ? false : true}/>
                    </div>
                </TooltipContainer>
            </div>
                
            

        </>
        
        

    )
}

export default Dashboard;