import Home from "./component/Home/Home";
import Nav from "./component/Nav";
import { Routes, Route } from "react-router-dom";
import AddAsset from "./component/addAsset/AddAsset";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/addAsset" element={<AddAsset />}></Route>
      </Routes>
    </>
  );
}

export default App;
