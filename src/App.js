import Home from "./component/Home/Home";
import Nav from "./component/Nav";
import { Routes, Route } from "react-router-dom";
import AddAsset from "./component/addAsset/AddAsset";
import Detail from "./component/Detail";
import Edit from "./component/edit/Edit";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/addAsset" element={<AddAsset />}></Route>
        <Route path="/details" element={<Detail />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
    </>
  );
}

export default App;
