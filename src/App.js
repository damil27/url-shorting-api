import Header from "./components/Header";
import Footer from "./components/footer";

import Boost from "./components/Boost";
import Hero from "./components/Hero";
import Statistic from "./components/Statistic";
import { useEffect, useState } from "react";
import Form from "./components/Form";

function localStorageItem() {
  const localItems = JSON.parse(localStorage.getItem("shortly"));
  if (localItems) {
    return localItems;
  } else {
    return [];
  }
}
function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [shortlyApi, setShortlyApi] = useState(localStorageItem());
  const [copyText, setCopyText] = useState("copy");

  const handleToggle = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const getAPI = async () => {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputVal}`);
    const data = await res.json();
    const result = await data.result;
    setShortlyApi((prev) => [...prev, result]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getAPI();
    setInputVal("");
    console.log(shortlyApi);
  };

  const handleCopy = (id) => {
    // navigator.clipboard.writeText(short);

    // shortlyApi.map((item) =>
    //   item.code === id.code ? setCopyText({ copyText: "somethin" }) : copyText
    // );
    // setCopyText({textCopy :"copied!"});
  };

  useEffect(() => {
    localStorage.setItem("shortly", JSON.stringify(shortlyApi));
  }, [shortlyApi]);
  return (
    <>
      <Header handleToggle={handleToggle} />
      <Hero handleToggle={handleToggle} openMenu={openMenu} />
      <Form
        handleSubmit={handleSubmit}
        getAPI={getAPI}
        inputVal={inputVal}
        setInputVal={setInputVal}
      />
      <Statistic
        shortlyApi={shortlyApi}
        handleCopy={handleCopy}
        setCopyText={setCopyText}
        copyText={copyText}
      />
      <Boost />
      <Footer />
    </>
  );
}

export default App;
