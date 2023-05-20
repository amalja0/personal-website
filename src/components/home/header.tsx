import useMediaQuery from "@/hooks/useMediaQuery"
import illustration from "@/assets/illustration.png"

const Header = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    
    return (
        <section>
            <p className={`text-center ${isAboveMediumScreens ? "text-2xl" : "text-xs"}` }>
                Hi! I am <em>Amalia</em>
            </p>
            <h1 className={`mt-3 text-center ${isAboveMediumScreens ? "text-5xl": "text-xl"}`}>
                Welcome to my personal portfolio. Everything is crafted with <span className="text-secondary-100"> passion and precision</span>
            </h1>
            <img 
                src={illustration} 
                width={isAboveMediumScreens? "30%" : "60%"}
                className="mt-7 mx-auto"
            />
        </section>
    )
}

export default Header