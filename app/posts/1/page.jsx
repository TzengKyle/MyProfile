"use client"

import { projectInfos } from "@/constants";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const ProjectPageElementBox = ({ elements }) => {
    return <>{elements.map((element) => element)}</>;
};


const ProjectPageCover = ({ imgUrl }) => {
    return (
        <div className="relative max-container w-screen h-[480px] z-[1]">
            <Image
                src={`${imgUrl}`}
                fill
                alt="flywheel-img-1"
                className="object-cover"
            ></Image>
        </div>
    );
};



const ProjectPageTitle = ({ type, title }) => {
    return (
        <div className=" relative max-container w-screen z-[1] mt-4">
            <p className=" bold-18 border-l-2 border-black  ml-2 pl-2 mb-12 text-primary_yellow">
                首頁 {">"} 專案分享 {">"} {type}
            </p>
            <h1 className=" bold-36 desk:bold-64 text-primary_blue flex">
                {title}
            </h1>
            <div className=" border-t-8 border-black w-1/2 mt-6"></div>
        </div>
    );
};

const ProjectPageH1 = ({ h1 }) => {
    return <h1 className=" bold-32 text-primary_blue mt-12">{h1}</h1>;
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

export default function Page() {
    const { type, title, h1, content, result, iconUrls, imgUrl } = projectInfos[0]

    return (
        <div className=" overflow-x-hidden">
            <ProjectPageCover imgUrl={imgUrl} />

            <div className="flex items-center justify-center gap-12 mt-4 border-y-2 border-black max-container py-4">

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
                                fill
                                alt={`flywheel-img-${index}`}
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                ))}

            </div>

            <ProjectPageTitle title={title} type={type} />

            <div className="relative max-container w-screen z-[1] my-16">
                <ProjectPageH1 h1={h1[0]} />
                <ProjectPagePassage passage={content} />
                <ProjectPageH1 h1={h1[1]} />
                <ProjectPageList titles={result} />
            </div>
        </div>
    );
}

