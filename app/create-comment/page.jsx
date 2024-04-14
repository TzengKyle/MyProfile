"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation'
import React from 'react';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

import PageCover from "@/components/PageCover";
import { createCommentFormSchema } from "@/lib/formSchemas"
import { checkImageUrlValidity } from "@/lib/formats";

const CreateCommentPageTitle = ({ title }) => {
    return (
        <div className=" relative z-[1] mt-4">
            <p className=" bold-18 border-l-4 border-black  ml-2 pl-2 mb-12 text-primary_yellow">
                首頁 {">"} 傳送郵件
            </p>
            <h1 className=" bold-64  flexCenter">
                {title}
            </h1>
            <div className=" border-t-8 border-black mt-6"></div>
        </div>
    );
};

export default function Page() {
    const [imgUrlInputVal, setImgUrlInputVal] = useState("");
    const [isValidImage, setIsValidImage] = useState("noUrl");
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter()
    const { toast } = useToast()

    const handleImgUrlInputChange = (imgUrl) => {
        setImgUrlInputVal(imgUrl)
        checkImageUrlValidity(imgUrl, setIsValidImage);
    };

    const form = useForm({
        // 每次只要更新zodResolver都會幫忙validation
        resolver: zodResolver(createCommentFormSchema),
        defaultValues: {
            name: "",
            imgUrl: "",
            content: "",
        },
    });

    const fetchGetComment = async ({ name, imgUrl, content }) => {
        setIsSubmitting(true)
        checkImageUrlValidity(imgUrl, setIsValidImage);
        if (isValidImage !== "validImg") {
            toast({
                title: "留言失敗!",
                description: "您必須附上正確有效的頭貼連結!",
            })
            setIsSubmitting(false)
        } else {
            try {
                const response = await fetch('/api/get-comment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' // 設定 Content-Type 為 JSON
                    },
                    body: JSON.stringify({ // 將要傳遞的資料轉換為 JSON 字串
                        name: name,
                        imgUrl: imgUrl,
                        content: content
                    })
                });
                if (response.ok) {
                    toast({
                        title: "成功留言!",
                        description: "您可以到留言板找到您的留言!",
                    })
                    router.push("/");
                }
                else {
                    throw new Error('Failed to create comment');
                }
                console.log("成功留言");


            } catch (error) {
                toast({
                    title: "留言失敗!",
                    description: "您可以查看網路連接是否正確!",
                })
                console.error("Error loading topics", error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    //下面的onSubmit={form.handleSubmit()會自動確認當它是valid的時候才可以submit
    async function onSubmit(values) {
        const { name, imgUrl, content } = values
        console.log(name, imgUrl, content)
        await fetchGetComment({ name, imgUrl, content })
    }

    return (
        <div className="overflow-y-hidden overflow-x-hidden">
            <PageCover coverImgUrl={"/create-comment-img-1.jpg"} />

            <div className="relative max-container w-screen z-[1] mb-16 mt-8 px-3">
                <CreateCommentPageTitle title={"留言區"} />

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem className="mt-16">
                                <FormLabel className="bold-24">姓名</FormLabel>

                                <Input className="" placeholder="王 X X" {...field} />
                                <FormDescription>
                                    輸入您的姓名，方便我知道你是誰!。字元數需要介於2~5之間。
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField control={form.control} name="imgUrl" render={({ field }) => (
                            <FormItem className="mt-8">
                                <FormLabel className="bold-24">頭貼網址</FormLabel>
                                <Input className="" placeholder="https://lh3.googleusercontent.com/a/xxxxx" {...field} onChange={(e) => { field.onChange(e); handleImgUrlInputChange(e.target.value) }} />
                                <FormDescription>
                                    只能上傳圖片網址，圖片預覽區有正常顯示照片表示該網址是正確的圖片網址，並且才能上傳此留言。
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <div className="w-[300px] h-[300px] border mt-4 flexCenter text-gray-500" style={{ borderRadius: '20px' }}>
                            {(isValidImage == "noUrl") && "圖片預覽區"}
                            {(isValidImage == "validImg") &&
                                <div className="relative w-[300px] h-[300px] overflow-hidden z-[1]" style={{ borderRadius: '20px' }}>
                                    {/* // ! object-cover是盡可能超出容器 並且裁切多餘的部分 可以保持原本比例*/}
                                    <img
                                        src={imgUrlInputVal}
                                        fill="true"
                                        alt="flywheel-img-1"
                                        className="object-cover"
                                        style={{ width: '100%', height: '100%' }}
                                    ></img>
                                </div>}
                            {(isValidImage == "errorImg") &&
                                <span className="text-red-500">此網址無法正確回傳圖片</span>}

                        </div>
                        <FormField control={form.control} name="content" render={({ field }) => (
                            <FormItem className="mt-8">
                                <FormLabel className="bold-24">留言內容</FormLabel>
                                <Textarea className="" placeholder="說說您想說的話吧!" {...field} />
                                <FormMessage />
                            </FormItem>
                        )}
                        />


                        <div className="w-full bg-white hover:bg-white mt-4 flexCenter">
                            <div className="bg-black w-[130px] border  border-black" style={{ borderRadius: '10px' }}>
                                <Button disabled={isSubmitting} type="submit" className="disabled:bg-gray-300 disabled:text-black border text-white bg-black bold-18 py-2 w-[128px] hover:bg-white hover:text-black flexCenter gap-2 cursor-pointer" style={{ borderRadius: '10px' }}>
                                    <span>{isSubmitting ? `傳送中...` : "寄出"}</span>
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </div >
    );
}
