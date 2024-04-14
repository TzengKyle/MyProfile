import Image from 'next/image';

const PageCover = ({ coverImgUrl }) => {
    return (
        <div className="relative w-screen h-[400px] z-[1]">
            <Image
                src={coverImgUrl} // 移除模板字符串
                fill="true"
                alt="flywheel-img-1"
                className="object-cover"
                quality={50}
                priority={true} // true，而不是字符串 "true"
            />
        </div>
    );
};

export default PageCover;

