import { useState } from "react"
import Navbar from "./components/navbar"
import { SelectedPage } from "./shared/types"
import Home from "./components/home";
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );


  return (
    <>
      <div className='app'>
        <Navbar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
      </div>
    </>
  )
}

export default App
