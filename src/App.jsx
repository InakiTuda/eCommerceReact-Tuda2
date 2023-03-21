import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
        <div>      
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path={"/"} element={<ItemListContainer/>}/>
              <Route path={"/category/id"} element={<ItemListContainer/>}/>
              <Route path={"/item/id"} element={<ItemDetailContainer/>}/>
            </Routes>           
          </BrowserRouter>
        </div>
  );
}

export default App;
