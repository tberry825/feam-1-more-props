// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import "./App.css";
import LoggerComponent from "./Components/LoggerComponent";
import UserProfile from "./Components/UserProfile";
import ProductCard from "./Components/ProductCard";
import ItemList from "./Components/ItemList";



function App() {

  const shoppingListItems = ['Apples', 'Bananas', 'Milk', 'Bread'];

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
    <LoggerComponent message = "Hey this React is getting fun"/>
    <UserProfile />
    <ProductCard />
    <ItemList  items={shoppingListItems}/>
    </div>
  );
}

export default App;
