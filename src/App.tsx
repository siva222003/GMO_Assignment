import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/spinners/Loader";

const Form = lazy(() => import("./pages/Form"));
const Display = lazy(() => import("./pages/Display"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Form />
          </Suspense>
        }
      />
      <Route
        path="/display"
        element={
          <Suspense fallback={<Loader />}>
            <Display />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
