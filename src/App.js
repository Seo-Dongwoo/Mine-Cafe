import React, { Suspense } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import FindPassword from "./pages/FindPassword/FindPassword";
import SearchCafe from "./pages/SearchCafe/SearchCafe";
import MyCafe from "./pages/MyCafe/MyCafe";
import Profile from "./pages/MyCafe/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { KakaoProvider } from "./contexts/KakaoContext";
import { ToggleProvider } from "./contexts/ToggleContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <KakaoProvider>
          <ToggleProvider>
            <BrowserRouter>
              <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/findPassword" element={<FindPassword />} />
                  <Route path="/search-cafe" element={<SearchCafe />} />
                  <Route
                    path="/my-cafe"
                    element={
                      <ProtectedRoute>
                        <MyCafe />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/my-cafe/profile"
                    element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </ToggleProvider>
        </KakaoProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
