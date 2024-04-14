"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/util/motion";
import { staggerContainer } from "@/util/motion";
import { Button } from "@/components/ui/button";
import { ClipboardList, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast"
import { useEffect, useState } from "react";
import Link from "next/link";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const CommentCard = ({ name, imgUrl, content }) => {
    return (
        <>
            {/* // ! min-w-[320px]是讓它可以滑動的關鍵 因為flex會把它硬塞進去*/}
            <motion.div variants={fadeIn('right', 'tween', 0.1, 1)} className="h-[240px] lg:w-[400px] sm:w-[300px] w-[90%] mx-2 flex flex-col gap-2 border border-black py-2 px-2" style={{ borderRadius: '20px' }} >
                <div className="flex items-center sm:gap-6 gap-2 border rounded-full border-black">
                    <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden z-[1]">
                        {/* // ! object-cover是盡可能超出容器 並且裁切多餘的部分 可以保持原本比例*/}
                        <img
                            src={`${imgUrl}`}
                            fill="fill"
                            alt="flywheel-img-1"
                            className="object-cover"
                            style={{ width: '100%', height: '100%' }}
                        ></img>
                    </div>
                    <div className="text-black sm:bold-24 bold-16">| {name}</div>
                </div>
                <div className=" flex gap-6 h-[160px] px-4 overflow-auto sm:overflow-hidden hover:overflow-auto border-b border-black " style={{ borderRadius: '20px' }} >
                    <div className="regular-12 sm:regular-16">{content}</div>

                </div>
            </motion.div >
        </>
    );
};

const CommentBoard = ({ comments }) => {
    return <>
        {comments && comments.length > 0 && (
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="flex justify-center items-start xl:h-[520px] h-[800px]"
            >

                <div className="grid xl:grid-cols-3 grid-cols-2 z-[1] gap-y-4 w-[100%]">
                    {comments.map((comment, index) => (
                        <CommentCard id={index} name={comment.name} imgUrl={comment.imgUrl} content={comment.content} key={index} index={index} />
                    ))}
                </div >
            </motion.div>
        )
        }
    </>
}

const ContactUs = () => {
    const [comments, setComments] = useState([]);
    const [commentCount, setCommentCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const { toast } = useToast()
    const perPage = 6

    const handleNextPage = () => {
        if (currentPage < Math.ceil(commentCount / perPage)) {
            setCurrentPage(currentPage + 1)
        } else {
            toast({
                title: "已經是最後一頁了!",
            })
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        } else {
            toast({
                title: "已經是第一頁了!",
            })
        }
    }

    const handleChosenPage = (page) => {
        setCurrentPage(page)
    }

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
        <section id="contactUs" className="max-container pt-12 pb-20 overflow-x-hidden overflow-y-hidden" id="contactUs">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="max-container"
            >

                <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="sm:bold-64 md:bold-52 bold-40 mb-10 flex items-center flex-col">
                    <div>聯繫我們</div>
                    <div className="flex gap-2">
                        <motion.div
                            variants={fadeIn('up', 'tween', 0.4, 1)}
                            className="border text-white bg-black bold-18 flexCenter px-8 rounded-full flex cursor-pointer h-8 gap-2"
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link href={"/create-comment"}>留下些話</Link>
                            <ClipboardList />
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 'tween', 0.4, 1)}
                            className="border border-black text-black bg-white bold-18 px-8 flexCenter rounded-full flex gap-2 cursor-pointer h-8"
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link href={"/send-mail"}>傳送郵件</Link>
                            <Mail />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            <CommentBoard comments={comments.slice((currentPage - 1) * perPage, currentPage * perPage)} commentCount={commentCount} currentPage={currentPage} perPage={perPage} key={currentPage} />

            <Pagination>
                <PaginationContent>
                    <PaginationItem key={"prev"} className=" hover:bg-slate-200 rounded-full cursor-pointer border border-black w-28 flexCenter">
                        <PaginationPrevious onClick={() => handlePrevPage()} className="rounded-full hover:bg-slate-200" />
                    </PaginationItem>
                    <div key="pageItemBar" className="gap-1 hidden sm:flex">
                        {
                            Array.from({ length: Math.ceil(commentCount / perPage) }, (_, index) => (
                                (index + 1) === currentPage
                                    ?
                                    (<PaginationItem key={index + 1} className=" hover:bg-slate-400 rounded-full cursor-pointer border border-black bg-slate-200">
                                        <PaginationLink className="rounded-full hover:bg-slate-200" onClick={() => handleChosenPage(index + 1)}>{index + 1} </PaginationLink>
                                    </PaginationItem>)
                                    :
                                    (<PaginationItem key={index + 1} className=" hover:bg-slate-400 rounded-full cursor-pointer border border-black">
                                        <PaginationLink className="rounded-full hover:bg-slate-200" onClick={() => handleChosenPage(index + 1)}>{index + 1}</PaginationLink>
                                    </PaginationItem>)

                            ))
                        }
                    </div>
                    <div className="block sm:hidden">
                        <PaginationItem key={currentPage} className=" hover:bg-slate-400 rounded-full cursor-pointer border border-black bg-slate-200">
                            <PaginationLink className="rounded-full hover:bg-slate-200" onClick={() => handleChosenPage(currentPage)}>{currentPage} </PaginationLink>
                        </PaginationItem>
                    </div>
                    <PaginationItem key={"next"} className=" hover:bg-slate-200 rounded-full cursor-pointer border border-black w-28 flexCenter">
                        <PaginationNext className="rounded-full hover:bg-slate-200 " onClick={() => handleNextPage()} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </section>
    );
};

export default ContactUs;