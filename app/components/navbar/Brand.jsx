import Link from "next/link"

const Brand = ({routeTo, id, brandContent}) => {
    return (
        <Link className="navbrand font-black text-2xl content-center dark:text-white font-mono order-1 cursor-pointer" href={routeTo} id={id}>
            {brandContent}
        </Link>
    )
}

export default Brand;