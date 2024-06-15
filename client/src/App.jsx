import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { RecoilRoot, useRecoilValue } from "recoil";
import { Toaster } from "react-hot-toast";
import Homepage from "./pages/HomePage";
import AppLayout from "./pages/AppLayout";
import Form from "./components/Form";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import userAtom from "./atoms/userAtom";
function App() {
  const user = useRecoilValue(userAtom);
  return (
    <RecoilRoot>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/app" element={<AppLayout />}>
              <Route path="form" element={<Form />} />
            </Route>
            <Route
              path="/login"
              element={user ? <Navigate to={"/"} /> : <LoginPage />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to={"/"} /> : <SignupPage />}
            />
          </Routes>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "white",
                color: "black",
                fontFamily: "MontSerrat",
              },
            }}
          />
        </BrowserRouter>
      </CitiesProvider>
    </RecoilRoot>
  );
}

export default App;
