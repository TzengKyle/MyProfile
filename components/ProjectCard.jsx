import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/util/motion";


const ProjectCard = ({ type, title, intro, coverImgUrl, pageUrl, index }) => {
    return (
        <>
            {/* // ! min-w-[320px]是讓它可以滑動的關鍵 因為flex會把它硬塞進去*/}
            <motion.div variants={fadeIn('up', 'tween', index * 0.4, 1)} className="lg:w-[400px] w-[300px] cursor-pointer mx-2 " whileHover={{ boxShadow: '0px 0px 20px rgba(255, 255, 255, 1)' }}>
                <Link href={pageUrl}>
                    <div className="relative h-48 overflow-hidden z-[1]">
                        {/* // ! object-cover是盡可能超出容器 並且裁切多餘的部分 可以保持原本比例*/}
                        <Image
                            src={`${coverImgUrl}`}
                            fill="true"
                            alt="flywheel-img-1"
                            className="object-cover"
                        ></Image>
                    </div>
                    <div className=" relative lg:h-80 sm:h-60 h-24 flex justify-center bg-white border-t border-black z-[2]">
                        {/* // ! 需要加上absolute讓它可以用 top屬性 */}
                        <div className="absolute -top-12 flex flex-col w-5/6 h-[110%] bg-white border-y border-black px-4 pt-6 pb-2 border-dashed">
                            <h1 className="overflow-hidden lg:bold-24 bold-18 border-black z-[2] ">
                                | {type}
                            </h1>
                            <h2 className="overflow-hidden flex-[2] text-blue-600 lg:bold-18 bold-16 border-black z-[2] ">
                                {title}
                            </h2>
                            <p className="overflow-hidden flex-[5] border-t border-dashed pt-2 lg:regular-16 regular-12 border-black hidden sm:block">{intro}</p>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </>
    );
};

export default ProjectCard;