"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/util/motion";
import { staggerContainer } from "@/util/motion";
import { Button } from "@/components/ui/button";
import { ClipboardList, Mail } from "lucide-react";
// import { useState } from "react";
import { useEffect, useState } from "react";
// import { GET } from "@/app/api/get-comment/newest/route";

const CommentCard = ({ name, imgUrl, content, index }) => {
    return (
        <>
            {/* // ! min-w-[320px]是讓它可以滑動的關鍵 因為flex會把它硬塞進去*/}
            <motion.div variants={fadeIn('up', 'tween', index * 0.4, 1)} className="lg:w-[400px] sm:w-[300px] w-[240px] cursor-pointer mx-2" whileHover={{ scale: 1.1 }}>
                <div className="relative h-48 overflow-hidden z-[1]">
                    {/* // ! object-cover是盡可能超出容器 並且裁切多餘的部分 可以保持原本比例*/}
                    <img
                        src={`${imgUrl}`}
                        fill
                        alt="flywheel-img-1"
                        className="object-cover"
                    ></img>
                </div>
                <div className="relative lg:h-80 sm:h-60 h-24 flex justify-center bg-white border-t border-black z-[2]">
                    {/* // ! 需要加上absolute讓它可以用 top屬性 */}
                    <div className="absolute -top-12 flex flex-col w-5/6 h-[110%] bg-white border-y border-black px-4 pt-6 pb-2 border-dashed">
                        <h1 className="overflow-hidden lg:bold-24 bold-18 border-black z-[2] ">
                            | {name}
                        </h1>
                        <p className="overflow-hidden flex-[5] border-t border-dashed pt-2 lg:regular-16 regular-12 border-black hidden sm:block">{content}{imgUrl}</p>
                    </div>
                </div>
            </motion.div>
        </>
    );
};



const ContactUs = () => {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        try {
            const response = await fetch('/api/get-comment/newest', {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Failed to fetch comments');
            }
            const data = await response.json();
            console.log(data.comments);
            setComments(data.comments); // 更新 comments 状态
            return data
        } catch (error) {
            console.error("Error loading topics", error);
        }
    };

    useEffect(() => {
        fetchComments(); // 在组件挂载后执行一次
    }, []);


    return (

        <div className="max-container pt-10 pb-20 overflow-x-hidden overflow-y-hidden">
            {/* {comments.map((comment) => (
                <div key={comment.id} className="_">{comment.name}</div>
            ))} */}

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="max-container"
            >

                <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="bold-64 mb-10 flex items-center flex-col">
                    <div>聯繫我們</div>
                    <div className="flex gap-2">
                        <motion.div
                            variants={fadeIn('up', 'tween', 0.4, 1)}
                            className="border text-white bg-black bold-18 flexCenter px-8 rounded-full flex cursor-pointer h-8 gap-2"
                            whileHover={{ scale: 1.1 }}
                        >
                            <span>留下些話</span>
                            <ClipboardList />
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 'tween', 0.4, 1)}
                            className="border border-black text-black bg-white bold-18 px-8 flexCenter rounded-full flex gap-2 cursor-pointer h-8"
                            whileHover={{ scale: 1.1 }}
                        >
                            <span>傳送郵件</span>
                            <Mail />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            <div className="flexCenter _">
                <div className="grid xl:grid-cols-3 grid-cols-2 z-[1] gap-4">
                    {comments.map((comment, index) => (
                        <CommentCard name={comment.name} imgUrl={comment.imgUrl} content={comment.content} key={index} index={index} />
                    ))}
                </div >
            </div>
        </div>
    );
};

export default ContactUs;