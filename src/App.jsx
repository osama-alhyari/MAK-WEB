import { PrimeReactProvider } from "primereact/api";
import { Routes, Route } from "react-router-dom";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Auth from "./Pages/Auth/Auth";

export default function App() {
  return (
    <PrimeReactProvider>
      {/* <LoadingSplashScreen display={visibility ? "block" : "none"} /> */}

      <Routes>
        <Route path="/Registration" element={<Auth />} />
      </Routes>
    </PrimeReactProvider>
  );
}
