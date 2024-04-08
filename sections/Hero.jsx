import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <>
            <div className="relative lg:h-[800px] h-[400px]">
                <div className="absolute lg:h-[800px] h-[400px] w-full overflow-hidden z-[-1]">
                    {/* // ! object-cover是盡可能超出容器 並且裁切多餘的部分 可以保持原本比例*/}
                    <Image
                        src="/hero-img-1.png"
                        fill
                        alt="flywheel-img-1"
                        className="object-cover blur-sm"
                    ></Image>
                </div>
            </div>
        </>
    );
};

export default Hero;