import useMediaQuery from "@/hooks/useMediaQuery";
import spiral from "@/assets/spiral.png";
import fire from "@/assets/fire.png";
import face from "@/assets/face.png"

function Information() {
    const flexCenter = "flex items-center p-4"
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    
    return (
        <section className={`mx-auto ${isAboveMediumScreens ? "w-4/6" : ""}`}>
            <div className={`flex mt-12 justify-center ${isAboveMediumScreens ? "gap-28" : "flex-col gap-7"}`}>
                <div className={`flex ${isAboveMediumScreens ? "flex-col gap-5" : "flex-row gap-5 justify-between"}`}>
                    <div className={`${flexCenter} bg-green-100 rounded-lg`}>
                        <div>
                            <h1 className={`${isAboveMediumScreens ? "text-4xl" : "text-xl"}`}>
                                0
                            </h1>
                            <p className={`${isAboveMediumScreens ? "" : "text-sm"}`}>
                                project completed
                            </p>
                        </div>
                        <img src={spiral} alt="icon" className={`${isAboveMediumScreens? "h-20" : "h-12"}`}/>
                    </div>
                    <div className={`${flexCenter} bg-rose-200 rounded-lg`}>
                        <div>
                            <h1 className={`${isAboveMediumScreens ? "text-4xl" : "text-xl"}`}>
                                6+
                            </h1>
                            <p className={`${isAboveMediumScreens ? "" : "text-sm"}`}>
                                months experience
                            </p>
                        </div>
                        <img src={fire} alt="icon" className={`${isAboveMediumScreens? "h-20" : "h-12"}`}/>
                    </div>
                </div>
                <div className="flex p-5 items-center bg-rose-300 rounded-lg justify-center">
                    <div>
                        <p className={`${isAboveMediumScreens? "text-xl" : "text-md"}`}>Excited to gain new experiences through work and project</p>
                    </div>
                    <img src={face} alt="icon" className={`${isAboveMediumScreens? "h-20" : "h-12"}`}/>
                </div>
            </div>
        </section>
    )
}

export default Information