"use client"

import { projectInfos } from "@/constants";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CircleArrowLeft, CircleArrowRight, Github } from 'lucide-react';
import { LaptopMinimal } from 'lucide-react';
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link";

const ProjectPageCover = ({ coverImgUrl }) => {
    return (
        <div className="relative max-container w-screen h-[400px] z-[1]">
            <Image
                src={`${coverImgUrl}`}
                fill="true"
                alt="flywheel-img-1"
                className="object-cover"
            ></Image>
        </div>
    );
};


const ProjectPageTitle = ({ type, title }) => {
    return (
        <div className=" relative z-[1] mt-4">
            <p className=" bold-18 border-l-4 border-black  ml-2 pl-2 mb-12 ">
                首頁 {">"} 專案分享 {">"} {type}
            </p>
            <h1 className=" bold-36 desk:bold-64 flex">
                {title}
            </h1>
            <div className=" border-t-8 border-black w-1/2 mt-6"></div>
        </div>
    );
};

const ProjectPageH1 = ({ h1 }) => {
    return <h1 className=" bold-32 text-primary_blue mt-12">{h1}</h1>;
};

const ProjectPageH2 = ({ h2 }) => {
    return <h2 className=" bold-20 text-primary_blue mt-6">{h2}</h2>;
};


const ProjectPagePassage = ({ passage }) => {
    return <p className=" regular-20 text-gray-30 mt-4">{passage}</p>;
};


const ProjectPageList = ({ titles }) => {
    return (
        <div className="flex flex-col relative mt-4">
            {titles.map((title, index) => (
                <ProjectPageListLine
                    title={title}
                    index={index}
                    key={index}
                />
            ))}
        </div>
    );
};

const ProjectPageListLine = ({ title, index }) => {
    return (
        <div className="flex relative">
            <div className="flex items-start">
                <p className="regular-20 text-gray-30 mt-1 mr-2">{index + 1}.</p>
            </div>
            <div className=" flex-grow flex flex-col ">
                <p className="regular-20 text-gray-30 mt-1">{title}</p>
            </div>
        </div>
    );
};

const ProjectPageIconBar = ({ iconUrls }) => {
    return (
        <div className="flex items-center justify-center gap-12 mt-4 border-y-2 border-black py-4">
            {iconUrls.map((iconUrl, index) => (
                <motion.div
                    key={index}
                    initial={{ y: -10, opacity: 0 }} // 初始位置和透明度
                    animate={{ y: 0, opacity: 1 }} // 动画效果
                    exit={{ y: 10, opacity: 0 }} // 退出时的动画效果
                    transition={{ duration: 0.5, delay: Math.random() }} // 过渡时间和延迟
                    className="flex items-center"
                >
                    <div className="relative w-[50px] h-[50px] z-[1]">
                        <img
                            src={iconUrl}
                            fill="true"
                            alt={`flywheel-img-${index}`}
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

const ProjectPageButtonBar = ({ codeUrl, demoUrl, toast }) => {
    return (
        <div className="flex mt-2 -mb-6 gap-4">

            {(codeUrl) ? (
                <Link href={codeUrl}>
                    <div className="bg-black w-32 border border-black" style={{ borderRadius: '10px' }}>
                        <div className="border text-white bg-black bold-18 py-2 w-30 hover:bg-white hover:text-black flexCenter gap-2 cursor-pointer" style={{ borderRadius: '10px' }}>
                            <Github />
                            <span>程式碼</span>
                        </div>
                    </div>
                </Link>
            ) : (
                <div
                    className="bg-black w-32 border border-black"
                    style={{ borderRadius: '10px' }}
                    onClick={() => {
                        toast({
                            title: "十分抱歉",
                            description: "這項專案沒有提供程式碼",
                        })
                    }}
                >
                    <div className="border text-white bg-black bold-18 py-2 w-30 hover:bg-white hover:text-black flexCenter gap-2 cursor-pointer" style={{ borderRadius: '10px' }} >
                        <Github />
                        <span>程式碼</span>
                    </div>
                </div>
            )}

            {(demoUrl) ? (
                <Link href={codeUrl}>
                    <div className="bg-black w-32 border border-black" style={{ borderRadius: '10px' }}>
                        <div className="border text-white bg-black bold-18 py-2 w-30 hover:bg-white hover:text-black flexCenter gap-2 cursor-pointer" style={{ borderRadius: '10px' }}>
                            <Github />
                            <span>程式碼</span>
                        </div>
                    </div>
                </Link>
            ) : (
                <div
                    className="bg-black w-32 border border-black"
                    style={{ borderRadius: '10px' }}
                    onClick={() => {
                        toast({
                            title: "十分抱歉",
                            description: "這項專案無法進行展示",
                        })
                    }}
                >
                    <div className="border text-white bg-black bold-18 py-2 w-30 hover:bg-white hover:text-black flexCenter gap-2 cursor-pointer" style={{ borderRadius: '10px' }} >
                        <LaptopMinimal />
                        <span>Demo</span>
                    </div>
                </div>
            )}

        </div>
    )
}

const ProjectPageImgGroupBox = ({ projectIndex, imgGroupIndex, imgCurrentIndexs, handlePrevImg, handleNextImg }) => {
    return (
        <div className="flexCenter mt-6" >
            <div className="relative aspect-video md:w-[800px] w-full flex justify-between border-2">
                <div className="absolute aspect-video md:w-[800px] w-full flex overflow-hidden z-[-1]">
                    {/* // ! object-cover是盡可能超出容器 並且裁切多餘的部分 可以保持原本比例*/}
                    <Image
                        src={`/project${projectIndex}-img-${imgCurrentIndexs[0]}.png`}
                        fill="true"
                        alt="project1-img-1"
                        className="object-fit"
                    ></Image>
                </div>
                <div className="w-12 hover:text-white bold-20 hover:bg-black flexCenter hover:bg-opacity-20 text-gray-400 cursor-pointer" onClick={() => handlePrevImg(imgGroupIndex)}><CircleArrowLeft /></div>
                <div className="w-12 hover:text-white bold-20 hover:bg-black flexCenter hover:bg-opacity-20 text-gray-400 cursor-pointer" onClick={() => handleNextImg(imgGroupIndex)}><CircleArrowRight /></div>
            </div>
        </div>
    );
}

export default function Page() {
    const { toast } = useToast()

    const [imgCurrentIndexs, setImgCurrentIndexs] = useState([2])
    const { projectIndex, type, title, h1s, h2s, intro, passages, results, iconUrls, coverImgUrl, imgIndexs } = projectInfos[0]

    const handlePrevImg = (imgGroupIndex) => {
        if (imgCurrentIndexs[imgGroupIndex] > imgIndexs[imgGroupIndex][0]) {
            const newImgCurrentIndexs = [...imgCurrentIndexs];
            newImgCurrentIndexs[imgGroupIndex] -= 1;
            setImgCurrentIndexs(newImgCurrentIndexs)
        }
    }

    const handleNextImg = (imgGroupIndex) => {
        if (imgCurrentIndexs[imgGroupIndex] < imgIndexs[imgGroupIndex][imgIndexs[imgGroupIndex].length - 1]) {
            const newImgCurrentIndexs = [...imgCurrentIndexs];
            newImgCurrentIndexs[imgGroupIndex] += 1;
            setImgCurrentIndexs(newImgCurrentIndexs)
        }
    }

    return (
        <div className="overflow-y-hidden overflow-x-hidden">
            <ProjectPageCover coverImgUrl={coverImgUrl} />


            <div className="relative max-container w-screen z-[1] mb-16 mt-8">
                <ProjectPageIconBar iconUrls={iconUrls} />
                <ProjectPageTitle title={title} type={type} />
                <ProjectPageButtonBar codeUrl="https://github.com/TzengKyle/Crazy-Arcade" toast={toast} />
                <ProjectPageH1 h1={h1s[0]} />
                <ProjectPagePassage passage={intro} />
                <ProjectPageH1 h1={h1s[1]} />
                <ProjectPageList titles={results} />
                <ProjectPageH1 h1={h1s[2]} />
                <ProjectPageH2 h2={h2s[0]} />
                <ProjectPagePassage passage={passages[0]} />
                <ProjectPageImgGroupBox projectIndex={projectIndex} imgGroupIndex={0} imgCurrentIndexs={imgCurrentIndexs} setImgCurrentIndexs={setImgCurrentIndexs} handlePrevImg={handlePrevImg} handleNextImg={handleNextImg} />
            </div>
        </div >
    );
}

