import { useContext, createContext, useState } from "react";
import DragonBall from "../images/Dbz.jpg";
import Naruto from "../images/naruto.jpg";
import OnePunch from "../images/onepunch.jpg";
import Yugioh from "../images/yigioh.jpg";
import JujutsuKaisen from "../images/JujutsuKaisen.jpg";
import MyHero from "../images/myHero.jpg";
import Shingeki from "../images/ShingekinoKyojin.jpg";
import Fma from "../images/Fmab.jpg";

const animeContext = createContext();

export const useTheContext = () => {
  const context = useContext(animeContext);
  return context;
};

export function TheContext({ children }) {
  const totalAnime = [
    {
      id: 1,
      title: "Dragon Ball Z",
      abb: "Dbz",
      img: `${DragonBall}`,
    },
    {
      id: 2,
      title: "Naruto",
      abb: "naruto",
      img: `${Naruto}`,
    },
    {
      id: 3,
      title: "Shingeki No Kyojin",
      abb: "shingeki",
      img: `${Shingeki}`,
    },
    {
      id: 4,
      title: "One Punch Man",
      abb: "onepunch",
      img: `${OnePunch}`,
    },
    {
      id: 5,
      title: "Jujutsu Kaisen",
      abb: "JujutsuKaisen",
      img: `${JujutsuKaisen}`,
    },
    {
      id: 6,
      title: "Yu-Gi-Oh",
      abb: "yugioh",
      img: `${Yugioh}`,
    },
    {
      id: 7,
      title: "My Hero Academia",
      abb: "HeroAcademi",
      img: `${MyHero}`,
    },
    {
      id: 8,
      title: "Fullmetal Alchemist",
      abb: "fullmetal",
      img: `${Fma}`,
    },
  ];

  const [search, setSearch] = useState("");

  const hanldeSearch = (e) => {
    setSearch(e.target.value);
  };

  let newTotalAnime = [];
  if (search.length < 1) {
    newTotalAnime = totalAnime;
  } else {
    newTotalAnime = totalAnime.filter((el) =>
      el.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  return (
    <animeContext.Provider
      value={{ totalAnime, newTotalAnime, hanldeSearch, search }}
    >
      {children}
    </animeContext.Provider>
  );
}
