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
import { z } from "zod"
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
import { useRouter } from 'next/navigation'


const formSchema = z
    .object({
        name: z.string({
            required_error: "必填"
        }).min(2, {
            message: "需要大於2個字元"
        }).max(30, {
            message: "需要小於30個字元"
        }),
        emailAddress: z.string({
        }).optional(),
        subject: z.string().min(1, { message: "必填" }),
        content: z.string().min(1, { message: "必填" }),
    })
    .refine(
        (data) => {
            if (!data.name) return true;
            return data.name.length >= 2
        },
        {
            message: "姓名字元數需在2~5之間",
            path: ["name"],
        }
    );

const SendMailPageCover = ({ coverImgUrl }) => {
    return (
        <div className="relative w-screen h-[400px] z-[1]">
            <Image
                src={`${coverImgUrl}`}
                fill="true"
                alt="flywheel-img-1"
                className="object-cover"
            ></Image>
        </div>
    );
};

const SendMailPageTitle = ({ title }) => {
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
    const router = useRouter()
    const { toast } = useToast()
    const form = useForm({
        // 每次只要更新zodResolver都會幫忙validation
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            emailAddress: "",
            subject: "",
            content: "",
        },
    });
    const [isSubmitting, setIsSubmitting] = useState(false)

    const fetchSendMail = async ({ name, emailAddress, subject, content }) => {
        setIsSubmitting(true)
        try {
            const response = await fetch('/api/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // 設定 Content-Type 為 JSON
                },
                body: JSON.stringify({ // 將要傳遞的資料轉換為 JSON 字串
                    name: name,
                    emailAddress: emailAddress,
                    subject: subject,
                    content: content
                })
            });
            if (response.ok) {
                toast({
                    title: "成功寄出郵件!",
                    description: "若您有附上您得電子信箱，會受到自動回覆的信件呦!",
                })
                router.push("/");
            }
            else {
                throw new Error('Failed to send mail');
            }
            console.log("成功傳送郵件");


        } catch (error) {
            console.error("Error loading topics", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    //下面的onSubmit={form.handleSubmit()會自動確認當它是valid的時候才可以submit
    async function onSubmit(values) {
        const { name, emailAddress, subject, content } = values
        console.log(name, emailAddress, content)
        await fetchSendMail({ name, emailAddress, subject, content })
    }

    return (
        <div className="overflow-y-hidden overflow-x-hidden">
            <SendMailPageCover coverImgUrl={"/send-mail-img-1.jpg"} />

            <div className="relative max-container w-screen z-[1] mb-16 mt-8">
                <SendMailPageTitle title={"傳送郵件"} />

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem className="mt-16">
                                <FormLabel className="bold-24">姓名</FormLabel>

                                <Input className="" placeholder="王 X X" {...field} />
                                <FormDescription>
                                    輸入您的姓名，供收件人查看。字元數需要介於2~30之間。
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField control={form.control} name="emailAddress" render={({ field }) => (
                            <FormItem className="mt-8">
                                <FormLabel className="bold-24">您的信箱</FormLabel>
                                <Input className="" placeholder="example@gmail.com" {...field} />
                                <FormDescription>
                                    輸入您的電子郵件。我們只會傳送是否有收到您的郵件的回覆信，如果您不願留下您的信箱則不會收到該信件。
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField control={form.control} name="subject" render={({ field }) => (
                            <FormItem className="mt-8">
                                <FormLabel className="bold-24">信件主旨</FormLabel>
                                <Input className="" placeholder="您的主旨" {...field} />
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField control={form.control} name="content" render={({ field }) => (
                            <FormItem className="mt-8">
                                <FormLabel className="bold-24">信件內容</FormLabel>
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
