"use client"

import { Button } from "@/components/ui/button";
import { ArrowDownToLine, SendHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/util/motion";
import { staggerContainer } from "@/util/motion";

const BlackButton = ({ text, icon }) => {
    return (
        <motion.div
            variants={fadeIn('up', 'tween', 0.4, 1)}
            className="border text-white bg-black bold-18 py-4 px-8 rounded-full flex gap-2 mt-40 cursor-pointer"
            whileHover={{ scale: 1.1 }}
        >
            <span>{text}</span>
            {icon}
        </motion.div>
    )
}

const WhiteButton = ({ text, icon }) => {
    return (
        <motion.div
            variants={fadeIn('up', 'tween', 0.4, 1)}
            className="border border-black text-black bg-white bold-18 py-4 px-8 rounded-full flex gap-2 mt-2 cursor-pointer"
            whileHover={{ scale: 1.1 }}
        >
            <span>{text}</span>
            {icon}
        </motion.div>
    )
}


const Hero = () => {
    return (
        <>
            <div className="relative lg:h-[800px] h-[400px] ">
                <div className="absolute lg:h-[800px] h-[400px] w-full overflow-hidden z-[-1]">
                    {/* // ! object-cover是盡可能超出容器 並且裁切多餘的部分 可以保持原本比例*/}
                    <Image
                        src="/hero-img-1.png"
                        fill
                        alt="flywheel-img-1"
                        className="object-cover blur-sm"
                    ></Image>
                </div>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="lg:h-[800px] h-[400px] flex"
                >
                    <div className="flex-[1] flexCenter flex flex-col">
                        <Link href="https://drive.google.com/file/d/1VyytfSHGNinilVJrQ87ANKMbTmFoS_ZH/view?usp=sharing"><BlackButton text={"下載簡歷"} icon={<ArrowDownToLine />} /></Link>
                        <Link href="#contactUs"><WhiteButton text={"聯繫我吧"} icon={<SendHorizontal />} /></Link>
                    </div>
                    <div className="flex-[1]"></div>
                </motion.div >

            </div >
        </>
    );
};

export default Hero;