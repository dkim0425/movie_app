import { useState, useEffect } from "react";
import Detail from "./routes/Info";
import Home from "./routes/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Detail />} />
      </Routes>
    </Router >
  );
}

export default App;