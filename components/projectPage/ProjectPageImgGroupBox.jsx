import { CircleArrowLeft } from "lucide-react";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";

const ProjectPageImgGroupBox = ({ projectIndex, imgGroupIndex, setImgCurrentIndexs, imgCurrentIndexs, imgIndexs }) => {
    const handlePrevImg = (imgGroupIndex) => {
        if (imgCurrentIndexs[imgGroupIndex] > imgIndexs[imgGroupIndex][0]) {
            const newImgCurrentIndexs = [...imgCurrentIndexs];
            newImgCurrentIndexs[imgGroupIndex] -= 1;
            setImgCurrentIndexs(newImgCurrentIndexs)
        }
    }

    const handleNextImg = (imgGroupIndex) => {
        if (imgCurrentIndexs[imgGroupIndex] < imgIndexs[imgGroupIndex][imgIndexs[imgGroupIndex].length - 1]) {
            const newImgCurrentIndexs = [...imgCurrentIndexs];
            newImgCurrentIndexs[imgGroupIndex] += 1;
            setImgCurrentIndexs(newImgCurrentIndexs)
        }
    }

    return (
        <div className="flexCenter mt-6" >
            <div className="relative aspect-video md:w-[800px] w-full flex justify-between border-2">
                <div className="absolute aspect-video md:w-[800px] w-full flex overflow-hidden z-[-1]">
                    {/* // ! object-cover是盡可能超出容器 並且裁切多餘的部分 可以保持原本比例*/}
                    <Image
                        src={`/project${projectIndex}-img-${imgCurrentIndexs[imgGroupIndex]}.png`}
                        fill="true"
                        alt="project1-img-1"
                        className="object-fit"
                    ></Image>
                </div>
                <div className="w-12 hover:text-white bold-20 hover:bg-black flexCenter hover:bg-opacity-20 text-gray-400 cursor-pointer" onClick={() => handlePrevImg(imgGroupIndex)}><CircleArrowLeft /></div>
                <div className="w-12 hover:text-white bold-20 hover:bg-black flexCenter hover:bg-opacity-20 text-gray-400 cursor-pointer" onClick={() => handleNextImg(imgGroupIndex)}><CircleArrowRight /></div>
            </div>
        </div>
    );
}

export default ProjectPageImgGroupBox;