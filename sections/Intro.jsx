"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeIn } from "@/util/motion";
import { staggerContainer } from "@/util/motion";
import TypingText from "@/components/TypingText";

const Intro = () => {
    return (
        <>
            <div className="max-container h-[800px] flex">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className=" flex-[1]"
                >
                    <motion.div
                        variants={fadeIn('up', 'tween', 0.4, 1)}
                        className="h-[800px] flex flex-col justify-center"
                    >
                        <span className="bold-64 text-black mb-4">你好 我是曾耀寬</span>
                        <span className="bold-32 text-black mb-2">我就讀國立成功大學
                            <TypingText text="工業與資訊管理學系" className="text-blue-950 ml-2" />
                        </span>
                        <span className="bold-32 text-black mb-4">輔修
                            <TypingText text="資訊工程學系" className="text-blue-950 ml-2" timeout={700} />
                        </span>
                        <span className="bold-32 text-black mb-2">
                            <span className="border-2 border-black px-2 border-dashed">很高興認識你 !</span>
                        </span>
                    </motion.div>


                </motion.div>

                <div className="flex items-center justify-center flex-[1]">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >
                        <motion.div
                            variants={fadeIn('right', 'tween', 0.2, 1)}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 1 }}
                            className="relative z-[2] h-[420px] w-[420px] rounded-full overflow-hidden border-black flex items-center justify-center border cursor-pointer">
                            <div className="relative z-[2] h-[400px] w-[400px] rounded-full overflow-hidden">
                                {/* // ! object-cover是盡可能超出容器 並且裁切多餘的部分 可以保持原本比例*/}
                                <Image
                                    src="/intro-img-1.png"
                                    fill
                                    alt="flywheel-img-1"
                                    className="object-cover"
                                ></Image>
                            </div>
                        </motion.div>
                    </motion.div >
                </div>

            </div >


        </>
    );
};

export default Intro;