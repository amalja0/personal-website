import { SelectedPage } from "@/shared/types";
import Header from "./header";
import useMediaQuery from "@/hooks/useMediaQuery";
import Information from "./information";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <main className={`mx-auto w-11/12 ${isAboveMediumScreens ? " py-12" : ""}`}>
      <Header/>
      <Information/>
    </main>
  )
}

export default Home