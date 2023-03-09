import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import GetStarted from "./pages/GetStarted/GetStarted";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Settings from "./pages/Settings/Settings";
import TasksForm from "./pages/TasksForm/TasksForm";
import TasksPointsForm from "./pages/TasksForm/TasksPointsForm";
import Ruleta from "./pages/Minijuegos/Ruleta";
import CuantoConoces from "./pages/Minijuegos/CuantoConoces"
import QuePrefiere from "./pages/Minijuegos/QuePrefiere";
import Minijuegos from "./pages/Minijuegos/Minijuegos";
import TasksList from "./pages/Tasks/TasksList"

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <Routes>
        <Route path="/home" element={<HomePage />}/>
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
          path="/tasksPoints"
          element={
            <IsPrivate>
              <TasksPointsForm />
            </IsPrivate>
          }
        />
        <Route
          path="/tasksForm"
          element={
            <IsPrivate>
              <TasksForm />
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
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route path="/" element={<GetStarted />} />
      </Routes>
    </div>
  );
}

export default App;
