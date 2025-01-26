import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Dashboard } from "./components/Dashboard";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './components/Home';
import Connect from './components/Connect';

export default function App() {
  return (
  <>
    <header>
        <Dashboard/>
    </header>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/connect" element={<Connect/>}></Route>
    </Routes>
  </>
  );
}
