/* eslint-disable */

import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import GetStarted from "./pages/GetStarted/GetStarted";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Settings from "./pages/Settings/Settings";
import TasksFormPage from "./pages/TasksForm/TasksFormPage";
import TasksPointsForm from "./pages/TasksForm/TasksPointsForm";
import Ruleta from "./pages/Minijuegos/Ruleta";
import CuantoConoces from "./pages/Minijuegos/CuantoConoces"
import QuePrefiere from "./pages/Minijuegos/QuePrefiere";
import Minijuegos from "./pages/Minijuegos/Minijuegos";
import TasksList from "./pages/Tasks/TasksList"
import { useLocation } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "./context/auth.context";

function App() {
  const { coupleCreated, setCoupleCreated, hasBeenGreeted, setHasBeenGreeted, setTasksCreated, tasksCreated } = useContext(AuthContext);
  let location = useLocation();

  useEffect(()=>{
    if(location.pathname !== "/profile" && coupleCreated){
      setCoupleCreated(false)
    }
    if(hasBeenGreeted && location.pathname !== "/profile"){
      setHasBeenGreeted(false)
    }
  },[location])

  return (
    <div className="App">

      <Routes>
        <Route path="/home" element={<IsPrivate><HomePage /></IsPrivate>}/>
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <IsPrivate>
              <Leaderboard />
            </IsPrivate>
          }
        />
        <Route
          path="/minijuegos"
          element={
            <IsPrivate>
              <Minijuegos />
            </IsPrivate>
          }
        />
        <Route
          path="/ruleta"
          element={
            <IsPrivate>
              <Ruleta />
            </IsPrivate>
          }
        />
        <Route
          path="/cuantoconoces"
          element={
            <IsPrivate>
              <CuantoConoces />
            </IsPrivate>
          }
        />
        <Route
          path="/queprefiere"
          element={
            <IsPrivate>
              <QuePrefiere />
            </IsPrivate>
          }
        />
        <Route
          path="/tasks"
          element={
            <IsPrivate>
              <TasksList />
            </IsPrivate>
          }
        />
        <Route
          path="/tasksForm"
          element={
            <IsPrivate>
              <TasksFormPage />
            </IsPrivate>
          }
        />
                <Route
          path="/settings"
          element={
            <IsPrivate>
              <Settings />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon><LoginPage /></IsAnon>
          }
        />
        <Route path="/" element={<IsAnon><GetStarted /></IsAnon>} />
      </Routes>
    </div>
  );
}

export default App;
