"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeIn } from "@/util/motion";
import { staggerContainer } from "@/util/motion";
import TypingText from "@/components/TypingText";
import { projectInfos } from "@/constants";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";

import { StepForward } from 'lucide-react';

const Projects = () => {
    return (
        <>
            <section id="projects" className="bg-black pt-10 pb-20 overflow-x-hidden overflow-y-hidden">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="max-container"
                >

                    <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="sm:bold-64 md:bold-52 bold-40 text-white mb-10 flexCenter flex flex-col">
                        <span>專案介紹</span>
                        {/* <Button className="border rounded-lg mt-4">
                            <motion.div whileHover={{ scale: 1.1 }} className="flexCenter gap-1">
                                <span className="bold-16">更多專案</span>
                                <StepForward className="w-4" />
                            </motion.div>
                        </Button> */}
                    </motion.div>
                    <div className="flexCenter">
                        <div className="relative grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 z-[1] gap-4">
                            {projectInfos.map((projectInfo, index) => (
                                <ProjectCard type={projectInfo.type} title={projectInfo.title} intro={projectInfo.intro} coverImgUrl={projectInfo.coverImgUrl} key={index} pageUrl={projectInfo.pageUrl} index={index} />
                            ))}
                        </div >
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Projects;