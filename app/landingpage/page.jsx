import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
    return (
        <>
            {/* Hero Section */} 
            <section className="flex flex-col justify-center mt-5 lg:mt-0 h-dvh" id="herosection">
                {/* <video autoPlay loop muted className="absolute w-dvw z-10">
                    <source src="/blackfluid.mp4" type="video/mp4"/>
                </video> */}
                <div className="flex flex-row px-10 md:px-20 lg:px-30 xl:px-40 items-center justify-between">
                    <div className="text-center xl:text-left">
                        <h1 className="font-extrabold text-4xl lg:text-6xl xl:text-5xl">
                            STOP <span className="font-serif">Yapping</span>, <br/>START <span className="font-mono font-medium">{`{coding}`}</span>
                        </h1>
                        <p className="mt-5 text-xl lg:text-2xl xl:text-2xl">
                            Be a <span className="font-extrabold font text-xl xl:text-3xl">GOAT</span> web developer now! <span className="underline underline-offset-6">Get 1 month free trial on our web development course set.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, officia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aperiam.
                        </p>
                        <div className="flex flex-col xl:flex-row xl:gap-10 items-center">
                            <Link href={"/landingpage/about"} className="bg-black dark:bg-white border-2 border-black dark:border-white text-white dark:text-black font-bold herobuttons">Get Started</Link>
                            <Link href={"/landingpage/about"} className="bg-transparent dark:bg-transparent border-2 border-black dark:border-white text-black dark:text-white herobuttons">Docs</Link>
                        </div>
                        
                    </div>
        
                    <Image src="/stockprice.svg" alt="tytyd" width={100} height={100} className="hidden xl:block w-100 h-100 lg:w-500 rounded-2xl"/>
                </div>
            </section> 

            {/* Service Section */}
            <section className="flex flex-col items-center justify-center p-20 gap-20" id="about">
                <h1 className="text-5xl text-center font-black uppercase antialiased">Our Products</h1>
                <div className="grid grid-rows-4 md:grid-cols-2 xl:grid-cols-4 w-full text-black text-center justify-center gap-10 antialiased">
                    <div className="flex flex-col bg-amber-200 rounded-2xl gap-5 p-10">
                        <h1 className="font-black text-3xl">BASIC</h1>
                        <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sequi asperiores ex quas voluptate tempora, veritatis animi cum accusantium assumenda!</p>
                    </div>
                    <div className="flex flex-col bg-amber-400 rounded-2xl gap-5 p-10">
                        <h1 className="font-black text-3xl">ENHANCED</h1>
                        <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sequi asperiores ex quas voluptate tempora, veritatis animi cum accusantium assumenda!</p>
                    </div>
                    <div className="flex flex-col bg-amber-200 rounded-2xl gap-5 p-10">
                        <h1 className="font-black text-3xl">PREMIUM</h1>
                        <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sequi asperiores ex quas voluptate tempora, veritatis animi cum accusantium assumenda!</p>
                    </div>
                    <div className="flex flex-col bg-amber-400 rounded-2xl gap-5 p-10">
                        <h1 className="font-black text-3xl">ULTIMATE</h1>
                        <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sequi asperiores ex quas voluptate tempora, veritatis animi cum accusantium assumenda!</p>
                    </div>
                </div>
            </section>
        </>
        
    );
}

export default LandingPage;