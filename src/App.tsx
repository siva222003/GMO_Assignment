import { Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Display from "./pages/Display";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/display" element={<Display />} />
    </Routes>
  );
}

export default App;
