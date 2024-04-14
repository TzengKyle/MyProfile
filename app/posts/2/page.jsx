"use client"
import { projectInfos } from "@/constants";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"

import ProjectPageCover from "@/components/projectPage/ProjectPageCover";
import ProjectPageTitle from "@/components/projectPage/ProjectPageTitle";
import ProjectPageH1 from "@/components/projectPage/ProjectPageH1";
import ProjectPageH2 from "@/components/projectPage/ProjectPageH2";
import ProjectPagePassage from "@/components/projectPage/ProjectPagePassage";
import ProjectPageList from "@/components/projectPage/ProjectPageList";
import ProjectPageIconBar from "@/components/projectPage/ProjectPageIconBar";
import ProjectPageButtonBar from "@/components/projectPage/ProjectPageButtonBar";
import ProjectPageImgGroupBox from "@/components/projectPage/ProjectPageImgGroupBox";


export default function Page() {
    const { toast } = useToast()

    const [imgCurrentIndexs, setImgCurrentIndexs] = useState([2])
    const { projectIndex, type, title, h1s, h2s, intro, passages, results, iconUrls, coverImgUrl, imgIndexs, codeUrl, demoUrl } = projectInfos[1]

    return (
        <div className="overflow-y-hidden overflow-x-hidden">
            <ProjectPageCover coverImgUrl={coverImgUrl} />


            <div className="relative max-container w-screen z-[1] mb-16 mt-8 px-3">
                <ProjectPageIconBar iconUrls={iconUrls} />
                <ProjectPageTitle title={title} type={type} />
                <ProjectPageButtonBar codeUrl={codeUrl} demoUrl={demoUrl} toast={toast} />
                <ProjectPageH1 h1={h1s[0]} />
                <ProjectPagePassage passage={intro} />
                <ProjectPageH1 h1={h1s[1]} />
                <ProjectPageList titles={results} />
                <ProjectPageH1 h1={h1s[2]} />
                <ProjectPageH2 h2={h2s[0]} />
                <ProjectPagePassage passage={passages[0]} />
                <ProjectPagePassage passage={passages[1]} />
                <ProjectPageImgGroupBox projectIndex={projectIndex} imgGroupIndex={0} setImgCurrentIndexs={setImgCurrentIndexs} imgCurrentIndexs={imgCurrentIndexs} imgIndexs={imgIndexs} />
            </div>
        </div >
    );
}

