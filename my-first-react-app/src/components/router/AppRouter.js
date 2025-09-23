import ListPage from "./List/ListPage";
import DetailPage from "./List/DetailPage";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import HomePage from "./onlineStore/HomePage";
import AboutPage from "./onlineStore/AboutPage";

export default function AppRouter() {
  const list = [
    {id: 1, title: 'Название статьи', text: 'Какой-то текст...'},
    {id: 2, title: 'Название статьи', text: 'Какой-то текст...'},
    {id: 3, title: 'Название статьи', text: 'Какой-то текст...'},
    {id: 4, title: 'Название статьи', text: 'Какой-то текст...'},
    {id: 5, title: 'Название статьи', text: 'Какой-то текст...'},
  ]

  return (
    <>
      <BrowserRouter>
        <h1>Список статей</h1>
        <Routes>
          <Route exact path="/" element={<ListPage list={list} />} />
          <Route exact path="/:id" element={<DetailPage list={list} />} />
        </Routes>
      </BrowserRouter>

      {/*<BrowserRouter>*/}
      {/*  <nav>*/}
      {/*    <Link to="/">Главная</Link> | <Link to="/about">О нас</Link>*/}
      {/*  </nav>*/}
      {/*  <Routes>*/}
      {/*    <Route path="/" element={<HomePage />} />*/}
      {/*    <Route path="/about" element={<AboutPage />} />*/}
      {/*  </Routes>*/}
      {/*</BrowserRouter>*/}
    </>
    )
}
