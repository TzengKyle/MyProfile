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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CircleAlert } from 'lucide-react';



export default function Page() {
    const { toast } = useToast()

    const [imgCurrentIndexs, setImgCurrentIndexs] = useState([2, 4, 7])
    const { projectIndex, type, title, h1s, h2s, intro, passages, results, iconUrls, coverImgUrl, imgIndexs, codeUrl, demoUrl } = projectInfos[4]

    return (
        <div className="overflow-y-hidden overflow-x-hidden">
            <ProjectPageCover coverImgUrl={coverImgUrl} />


            <div className="relative max-container w-screen z-[1] mb-16 mt-8 px-3">
                <ProjectPageIconBar iconUrls={iconUrls} />
                <ProjectPageTitle title={title} type={type} />

                <Alert className="mt-4 mb-2 border-2 border-red-600 w-[98%]">
                    <CircleAlert className="" />
                    <AlertTitle className="ml-2 text-red-600">注意!</AlertTitle>
                    <AlertDescription className="ml-2 text-red-600">
                        因為此專案為企業合作專案，有與企業簽訂保密協議因此大部分的資訊無法公開!
                    </AlertDescription>
                </Alert>

                <ProjectPageButtonBar codeUrl={codeUrl} toast={toast} />
                <ProjectPageH1 h1={h1s[0]} />
                <ProjectPagePassage passage={intro} />
                <ProjectPageH1 h1={h1s[1]} />
                <ProjectPageList titles={results} />
                <ProjectPageH1 h1={h1s[2]} />
                <ProjectPageH2 h2={h2s[0]} />
                <ProjectPagePassage passage={passages[0]} />
                <ProjectPageImgGroupBox projectIndex={projectIndex} imgGroupIndex={0} setImgCurrentIndexs={setImgCurrentIndexs} imgCurrentIndexs={imgCurrentIndexs} imgIndexs={imgIndexs} />
                <ProjectPageH2 h2={h2s[1]} />
                <ProjectPagePassage passage={passages[1]} />
                <ProjectPageImgGroupBox projectIndex={projectIndex} imgGroupIndex={1} imgCurrentIndexs={imgCurrentIndexs} setImgCurrentIndexs={setImgCurrentIndexs} imgIndexs={imgIndexs} />
                <ProjectPageH2 h2={h2s[2]} />
                <ProjectPagePassage passage={passages[2]} />
                <ProjectPageImgGroupBox projectIndex={projectIndex} imgGroupIndex={2} imgCurrentIndexs={imgCurrentIndexs} setImgCurrentIndexs={setImgCurrentIndexs} imgIndexs={imgIndexs} />
            </div>
        </div >
    );
}

