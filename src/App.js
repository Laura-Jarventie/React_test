import React from "react";
import { Router } from "./pages/Router";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import { Message } from "./pages/message";
import { Button } from "./pages/Button";
import { Counters } from "./pages/Counters";
import { Items } from "./pages/items";
import { List } from "./pages/List";
import { CssExc } from "./pages/CssExc";
import { TicTacToe } from "./tictactoe/TicTacToe";


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Router />}>
        <Route index element={<Message />} />
        <Route path="Button" element={<Button />} />
        <Route path="Counters" element={<Counters />} />
        <Route path="Items" element={<Items />} />
        <Route path="List" element={<List />} />
        <Route path="CssExc" element={<CssExc />} />
        <Route path="TicTacToe" element={<TicTacToe />} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
