import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import TodoList from "./components/TodoList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <nav>
          <h1>TODO App</h1>
          <div>
            {isLoggedIn ? (
              <>
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
              </>
            ) : (
              <>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
              </>
            )}
          </div>
        </nav>
        <Routes>
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/todos" />
              ) : (
                <Login onLogin={() => setIsLoggedIn(true)} />
              )
            }
          />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/todos" /> : <Register />}
          />
          <Route
            path="/todos"
            element={!isLoggedIn ? <Navigate to="/login" /> : <TodoList />}
          />
          <Route
            path="/"
            element={<Navigate to={isLoggedIn ? "/todos" : "/login"} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
