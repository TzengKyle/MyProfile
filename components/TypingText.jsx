"use client"

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const TypingText = ({ text, className, interval = 400, timeout = 0 }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;

        const intervalId = setTimeout(() => {
            setInterval(() => {

                if (index == text.length * 3 + 1) {
                    clearInterval(intervalId);
                } else {
                    if (Math.floor(index / text.length) % 2 == 0) {
                        setDisplayText(text.substr(0, index % text.length));
                    }
                    else {
                        setDisplayText(text.substr(0, text.length - (index % text.length)));
                    }
                    index++
                }
            }, interval);
        }, timeout) // 调整此处的时间间隔来控制打字速度

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <span className={`${className}`}>{displayText} |</span>;
};

export default TypingText;
