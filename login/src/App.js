import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./Routes";
import Layout from "./Pages/Layout";
import LoginPage from "./Components/LoginPage";
import FirstStep from "./Components/FirstStep";
import SecondStep from "./Components/SecondStep";
import ThirdStep from "./Components/ThirdStep";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={ROUTE_NAMES.HOME} element={<LoginPage />} />
          <Route path={ROUTE_NAMES.STEP_ONE} element={<FirstStep />} />
          <Route path={ROUTE_NAMES.STEP_TWO} element={<SecondStep />} />
          <Route path={ROUTE_NAMES.STEP_THREE} element={<ThirdStep />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
