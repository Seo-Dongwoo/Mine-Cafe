import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { KakaoProvider } from "./contexts/KakaoContext";
import { ToggleProvider } from "./contexts/ToggleContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const Home = React.lazy((_) => import("./pages/Home/Home"));
const Login = React.lazy((_) => import("./pages/Login/Login"));
const Signup = React.lazy((_) => import("./pages/Signup/Signup"));
const FindPassword = React.lazy((_) =>
  import("./pages/FindPassword/FindPassword")
);
const SearchCafe = React.lazy((_) => import("./pages/SearchCafe/SearchCafe"));
const MyCafe = React.lazy((_) => import("./pages/MyCafe/MyCafe"));
const Profile = React.lazy((_) => import("./pages/MyCafe/Profile"));

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
