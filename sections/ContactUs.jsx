"use client"


import { motion } from "framer-motion";
import { fadeIn } from "@/util/motion";
import { staggerContainer } from "@/util/motion";
import { Button } from "@/components/ui/button";
import { ClipboardList, Mail } from "lucide-react";

const ContactUs = () => {


    return (
        <div className=" pt-10 pb-20 overflow-x-hidden overflow-y-hidden">
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
        </div>
    );
};

export default ContactUs;