import Link from "next/link"
import { Github } from "lucide-react"
import { LaptopMinimal } from "lucide-react"

const ProjectPageButtonBar = ({ codeUrl, demoUrl, toast }) => {
    return (
        <div className="flex mt-2 -mb-6 gap-4">

            {(codeUrl) ? (
                <Link href={codeUrl}>
                    <div className="bg-black w-32 border border-black" style={{ borderRadius: '10px' }}>
                        <div className="border text-white bg-black bold-18 py-2 w-30 hover:bg-white hover:text-black flexCenter gap-2 cursor-pointer" style={{ borderRadius: '10px' }}>
                            <Github />
                            <span>程式碼</span>
                        </div>
                    </div>
                </Link>
            ) : (
                <div
                    className="bg-black w-32 border border-black"
                    style={{ borderRadius: '10px' }}
                    onClick={() => {
                        toast({
                            title: "十分抱歉",
                            description: "這項專案沒有提供程式碼",
                        })
                    }}
                >
                    <div className="border text-white bg-black bold-18 py-2 w-30 hover:bg-white hover:text-black flexCenter gap-2 cursor-pointer" style={{ borderRadius: '10px' }} >
                        <Github />
                        <span>程式碼</span>
                    </div>
                </div>
            )}

            {(demoUrl) ? (
                <Link href={demoUrl}>
                    <div className="bg-black w-32 border border-black" style={{ borderRadius: '10px' }}>
                        <div className="border text-white bg-black bold-18 py-2 w-30 hover:bg-white hover:text-black flexCenter gap-2 cursor-pointer" style={{ borderRadius: '10px' }}>
                            <LaptopMinimal />
                            <span>Demo</span>
                        </div>
                    </div>
                </Link>
            ) : (
                <div
                    className="bg-black w-32 border border-black"
                    style={{ borderRadius: '10px' }}
                    onClick={() => {
                        toast({
                            title: "十分抱歉",
                            description: "這項專案無法進行展示",
                        })
                    }}
                >
                    <div className="border text-white bg-black bold-18 py-2 w-30 hover:bg-white hover:text-black flexCenter gap-2 cursor-pointer" style={{ borderRadius: '10px' }} >
                        <LaptopMinimal />
                        <span>Demo</span>
                    </div>
                </div>
            )}

        </div>
    )
}

export default ProjectPageButtonBar;