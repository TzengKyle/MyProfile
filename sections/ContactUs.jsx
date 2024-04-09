"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/util/motion";
import { staggerContainer } from "@/util/motion";
import { Button } from "@/components/ui/button";
import { ClipboardList, Mail } from "lucide-react";
// import { useState } from "react";
import { useEffect, useState } from "react";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const CommentCard = ({ name, imgUrl, content, index }) => {
    return (
        <>
            {/* // ! min-w-[320px]是讓它可以滑動的關鍵 因為flex會把它硬塞進去*/}
            <motion.div variants={slideIn('right', 'tween', 0.1, 1)} className="lg:w-[400px] sm:w-[300px] w-[240px] mx-2 flex flex-col gap-2 border border-black py-2 px-2" style={{ borderRadius: '20px' }} >
                <div className="flex items-center gap-6 border rounded-full border-black">
                    <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden z-[1]">
                        {/* // ! object-cover是盡可能超出容器 並且裁切多餘的部分 可以保持原本比例*/}
                        <img
                            src={`${imgUrl}`}
                            fill
                            alt="flywheel-img-1"
                            className="object-cover"
                        ></img>
                    </div>
                    <div className="text-black bold-24">| {name}</div>
                </div>
                <div className=" flex gap-6 h-[160px] px-4 overflow-hidden hover:overflow-auto border-b border-black" style={{ borderRadius: '20px' }} >
                    <div>{content}</div>

                </div>
            </motion.div >
        </>
    );
};

const CommentBoard = ({ comments, commentCount, page }) => {
    return <>
        {comments && comments.length > 0 && (
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="flexCenter"
            >

                <div className="grid xl:grid-cols-3 grid-cols-2 z-[1] gap-4">
                    {comments.map((comment, index) => (
                        <CommentCard name={comment.name} imgUrl={comment.imgUrl} content={comment.content} key={index} index={index} />
                    ))}
                </div >
            </motion.div>
        )
        }
    </>
}



const ContactUs = () => {
    const [comments, setComments] = useState([]);
    const [commentCount, setCommentCount] = useState([]);
    const [page, setPage] = useState(1);

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
            setCommentCount(data.comments.length); // 更新 commentCount 状态

        } catch (error) {
            console.error("Error loading topics", error);
        }
    };

    useEffect(() => {
        fetchComments(); // 在组件挂载后执行一次
    }, []);


    return (

        <div className="max-container pt-10 pb-20 overflow-x-hidden overflow-y-hidden">

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="max-container"
            >

                <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="bold-64 mb-10 flex items-center flex-col">
                    <div>聯繫我們</div>
                    {commentCount && (
                        <div>{commentCount}</div>
                    )
                    }
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
            <CommentBoard comments={comments} commentCount={commentCount} />


        </div>
    );
};

export default ContactUs;