const Hamburger = ({onClick, mobileRes}) => {
    return (
        <div className="flex flex-col gap-2 lg:hidden order-3 justify-center cursor-pointer" onClick={onClick}>
            <div className={`w-7 bg-black dark:bg-white h-[2px] transition ${mobileRes && "rotate-45 translate-y-3"}`}></div>
            <div className={`w-7 bg-black dark:bg-white h-[2px] transition ${mobileRes && "opacity-0"}`}></div>
            <div className={`w-7 bg-black dark:bg-white h-[2px] transition ${mobileRes && "-rotate-45 -translate-y-2"}`}></div>
        </div>
    )
}

export default Hamburger;