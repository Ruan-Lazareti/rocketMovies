import { Routes, Route } from "react-router-dom";

import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details"

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/details" element={<Details />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}