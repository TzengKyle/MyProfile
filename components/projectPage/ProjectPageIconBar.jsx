import { motion } from "framer-motion";

const ProjectPageIconBar = ({ iconUrls }) => {
    return (
        <div className="flex items-center justify-center gap-12 mt-4 border-y-2 border-black py-4">
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
                            fill="true"
                            alt={`flywheel-img-${index}`}
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default ProjectPageIconBar;