import { useState } from "react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/assets/logo.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const pages: string[] = [ "Home", "About", "Project",  "Contact" ]

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between"
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <nav>
            <div
                className={`${flexBetween} top-0 z-30 w-full h-24 py-6`}
            >
                <div className={`${flexBetween} mx-auto w-11/12`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img alt="logo" src={Logo} width="20%"/>
                        {isAboveMediumScreens ? (
                            <div className={"flex items-center justify-end w-full"}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    {
                                        pages.map((page) => (
                                            <Link
                                                key={page}
                                                page={`${page}`}
                                                selectedPage={selectedPage}
                                                setSelectedPage={setSelectedPage}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        ) : (
                            isMenuToggled ? (
                                <button
                                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                                >
                                    <XMarkIcon className="h-6 w-6 text-green-200" />
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                                >
                                    <Bars2Icon className="h-6 w-6 text-green-200" />
                                </button>
                            )
                            
                        )}
                    </div>
                </div>
            </div>

            {
                !isAboveMediumScreens && isMenuToggled && (
                    <div 
                        className="flex fixed right-0 w-40 items-center justify-center"
                    >
                        <div className="flex flex-col gap-5 items-center">
                            {
                                pages.map((page) => (
                                    <Link
                                        key={page}
                                        page={`${page}`}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar