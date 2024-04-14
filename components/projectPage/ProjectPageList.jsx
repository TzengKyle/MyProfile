const ProjectPageList = ({ titles }) => {
    return (
        <div className="flex flex-col relative mt-4">
            {titles.map((title, index) => (
                <ProjectPageListLine
                    title={title}
                    index={index}
                    key={index}
                />
            ))}
        </div>
    );
};

const ProjectPageListLine = ({ title, index }) => {
    return (
        <div className="flex relative">
            <div className="flex items-start">
                <p className="regular-20 text-gray-30 mt-1 mr-2">{index + 1}.</p>
            </div>
            <div className=" flex-grow flex flex-col ">
                <p className="regular-20 text-gray-30 mt-1">{title}</p>
            </div>
        </div>
    );
};

export default ProjectPageList;