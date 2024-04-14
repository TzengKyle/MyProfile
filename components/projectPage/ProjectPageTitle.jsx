const ProjectPageTitle = ({ type, title }) => {
    return (
        <div className=" relative z-[1] mt-4">
            <p className=" bold-18 border-l-4 border-black  ml-2 pl-2 mb-12 ">
                首頁 {">"} 專案分享 {">"} {type}
            </p>
            <h1 className=" bold-36 desk:bold-64 flex">
                {title}
            </h1>
            <div className=" border-t-8 border-black w-1/2 mt-6"></div>
        </div>
    );
};

export default ProjectPageTitle;