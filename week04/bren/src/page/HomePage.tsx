// import Header from "../components/layout/Header";
// import SideMenu from "../components/layout/SideMenu";
import { useState } from "react";
import CategoryTabs from "../components/movie/CategoryTabs";
import MovieList from "../components/movie/MovieList";
// import RightBanner from "../components/layout/RightBanner";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("now_playing");
  return (
    <>
      {/* <Header /> */}
      {/* <SideMenu /> */}
      <CategoryTabs />
      <MovieList />
      {/* <RightBanner /> */}
    </>
  );
}
