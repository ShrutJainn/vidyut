import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { RecoilRoot } from "recoil";
import Homepage from "./pages/HomePage";
import AppLayout from "./pages/AppLayout";
import Form from "./components/Form";
function App() {
  return (
    <RecoilRoot>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/app" element={<AppLayout />}>
              <Route path="form" element={<Form />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </RecoilRoot>
  );
}

export default App;
