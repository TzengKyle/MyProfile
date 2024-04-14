import Image from "next/image";

const ProjectPageCover = ({ coverImgUrl }) => {
    return (
        <div className="relative max-container w-screen h-[400px] z-[1]">
            <Image
                src={`${coverImgUrl}`}
                fill="true"
                alt="flywheel-img-1"
                className="object-cover"
            ></Image>
        </div>
    );
};

export default ProjectPageCover;