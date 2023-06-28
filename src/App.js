import Header from "./components/Header";
import Footer from "./components/footer";

import Boost from "./components/Boost";
import Hero from "./components/Hero";
import Statistic from "./components/Statistic";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleToggle = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <>
      <Header handleToggle={handleToggle} />
      <Hero handleToggle={handleToggle} openMenu={openMenu} />
      <Form />
      <Statistic />
      <Boost />
      <Footer />
    </>
  );
}

export default App;
