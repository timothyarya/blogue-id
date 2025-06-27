const Button = ({setlikes, buttonState, buttonName}) => {
    return (
        <button className="bg-gray-500 disabled:bg-gray-300" disabled={buttonState} onClick={setlikes}>{buttonName}</button>
    );
}

export default Button;