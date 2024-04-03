"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeIn } from "@/util/motion";
import { staggerContainer } from "@/util/motion";
import TypingText from "@/components/TypingText";
import { projectInfos } from "@/constants";

const ProjectCard = ({ type, title, content, imgUrl, index }) => {
    return (
        <>
            {/* // ! min-w-[320px]是讓它可以滑動的關鍵 因為flex會把它硬塞進去*/}
            <motion.div variants={fadeIn('up', 'tween', index * 0.4, 1)} className="w-[420px] cursor-pointer" whileHover={{ scale: 1.1 }}>
                <div className="relative h-48 overflow-hidden z-[1]">
                    {/* // ! object-cover是盡可能超出容器 並且裁切多餘的部分 可以保持原本比例*/}
                    <Image
                        src={`${imgUrl}`}
                        fill
                        alt="flywheel-img-1"
                        className="object-cover"
                    ></Image>
                </div>
                <div className="relative h-80 flex justify-center bg-white border-t border-black z-[2]">
                    {/* // ! 需要加上absolute讓它可以用 top屬性 */}
                    <div className="absolute -top-12 flex flex-col w-5/6 h-[110%] bg-white border-y border-black px-4 pt-6 pb-2 border-dashed">
                        <h1 className="overflow-hidden bold-24 border-black z-[2] ">
                            | {type}
                        </h1>
                        <h2 className="overflow-hidden flex-[2] text-blue-600 bold-18 border-black z-[2] ">
                            {title}
                        </h2>
                        <p className="overflow-hidden flex-[5] border-t border-dashed pt-2 border-black">{content}</p>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

const Projects = () => {
    return (
        <>
            <div className=" bg-black py-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="max-container"
                >

                    <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="bold-64 text-white mb-10 flexCenter">專案介紹</motion.div>
                    <div className=" flexCenter">
                        <div className="grid grid-cols-3 z-[1] gap-12">
                            {projectInfos.map((projectInfo, index) => (
                                <ProjectCard type={projectInfo.type} title={projectInfo.title} content={projectInfo.content} imgUrl={projectInfo.imgUrl[0]} key={index} index={index} />
                            ))}
                            {/* <ProjectCard title={"Kyle"} content={"content"} imgUrl={"/hero-img-1.png"} />
                        <ProjectCard title={"Kyle"} content={"content"} imgUrl={"/hero-img-1.png"} />
                        <ProjectCard title={"Kyle"} content={"content"} imgUrl={"/hero-img-1.png"} /> */}
                        </div >
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Projects;