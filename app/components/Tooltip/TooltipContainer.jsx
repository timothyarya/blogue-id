import { useState } from "react";
import useTooltip from "./TooltipState";

const TooltipContainer = ({children, content, onItemHover, notItemHover, state}) => {
    // const {onHover, notHover} = useTooltip();
    const [visible, setVisible] = useState(false);

    return (
        <div className="relative" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            {children}
            <h1 className={`${visible ? "absolute" : "hidden"}`}>{content}</h1>
        </div>
    );
}

export default TooltipContainer;