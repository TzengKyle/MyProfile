import { z } from "zod"
import { isValidUrl } from "../formats";

export const createCommentFormSchema = z
    .object({
        name: z.string({
            required_error: "必填"
        }).min(2, {
            message: "需要大於2個字元"
        }).max(5, {
            message: "需要小於5個字元"
        }),
        imgUrl: z.string().min(1, { message: "必填" }),
        content: z.string().min(1, { message: "必填" }),
    })
    .refine(
        (data) => {
            if (isValidUrl(data.imgUrl)) {
                return true
            } else {
                return false
            }

        },
        {
            message: "請輸入正確的URL格式",
            path: ["imgUrl"]
        }
    );

export const sendMailFormSchema = z
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
    });