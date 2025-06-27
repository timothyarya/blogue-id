'use client';
import { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import Hamburger from "./HamburgerButton";
import Brand from "./Brand";
import NavAuth from "./NavbarAuth";

const Navbar = () => {
    const [mobile, setMobile] = useState(false);

    //Switcher function untuk sidebar navbar
    const switcher = () => {
        if (mobile === true) {
            setMobile(false);
        } else if (mobile === false) {
            setMobile(true);
        } 
    }
    

    return (
        <>
            <nav className="fixed top-0 right-0 left-0 flex flex-row p-4 lg:px-15 px-15 z-100 backdrop-filter backdrop-blur-xl bg-[#ECECEC]/70 dark:bg-[#0a0a0a]/70">
                <div className="flex flex-row w-full justify-between gap-5">
                    
                    <Brand routeTo="./landingpage/#herosection" id="brand" brandContent="BloGue.id"/>
                    <Hamburger onClick={() => switcher()} mobileRes={mobile}/>

                    <div className="hidden lg:flex lg:flex-row justify-center gap-10 order-2">
                        <div className="content-center order-1">
                            <NavbarLinks />
                        </div>

                        <div className="content-center order-2">
                            <NavAuth />
                        </div>
                    </div>

                </div>
            </nav>

            <div className={`fixed flex flex-col right-0 lg:hidden z-99 h-dvh py-5 w-dvw gap-20 justify-center bg-[#ECECEC]/70 dark:bg-[#0a0a0a]/70 backdrop-filter backdrop-blur-xl transition-all ease-in-out duration-700 ${mobile ? "top-0" : "-top-500"}`} onClick={() => setMobile(false)}>
                <NavAuth />
                <NavbarLinks />
            </div>
            
        </>
    );
};

export default Navbar;