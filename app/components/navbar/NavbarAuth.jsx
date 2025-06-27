import Image from "next/image";

const NavAuth = () => {
    return (
        <div className="flex flex-row justify-center">
            <Image src="/avatarguest.svg" width={50} height={50} alt="tytyd" className="size-16 lg:size-8 rounded-full"/>
        </div>
    );
}

export default NavAuth;