import Link from "next/link";

const NavbarLinks = () => {
    return (
        <ul className="flex flex-col lg:flex lg:flex-row z-20 justify-end items-center text-neutral-500 dark:text-neutral-400 font-bold lg:font-semibold text-2xl lg:text-[1rem] font-mono uppercase">
            <li className="linkNavbar"> 
                <Link href={"#about"} className="underlineAnimate">Docs</Link>
            </li>
            <li className="linkNavbar">
                <Link href={"#about"} className="underlineAnimate">FAQ</Link>
            </li>
            {/* <li className="linkNavbar">
                <Link href={"#ashur"} className="underlineAnimate">Downloads</Link>
            </li> */}
            <li className="linkNavbar">
                <Link href={"/"} className="underlineAnimate">Support</Link>
            </li>
            {/*   bg-left-bottom bg-black bg-[length:0%_2px] hover:bg-[length:100%_2px] */}
        </ul>
    );
}

export default NavbarLinks;