'use client';

import { useState, useRef, useEffect, use } from "react";

const AboutPage= () => {
    let [mob, setMob] = useState(false);

    const switching = () => {
        if (mob === true) {
            setMob(false);
        } else if (mob === false) {
            setMob(true);
        } 
    }

    return (
        <section className="flex flex-col items-center mt-10">
            <div className="flex flex-row px-10 md:px-20 lg:px-30 xl:px-40 items-center justify-between">
                <div className="text-center lg:text-left">
                    <h1 className="font-extrabold text-5xl uppercase">
                        What We Are Focusing?
                    </h1>
                    <p className="mt-5 text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatibus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, atque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;