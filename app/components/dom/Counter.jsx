const Counter = ({count, counterState}) => {
    return (
        <div>
            <h1 className="text-center text-3xl">{counterState ? counterState : count}</h1>
        </div>
    );
}

export default Counter;