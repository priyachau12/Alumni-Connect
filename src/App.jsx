import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Dashboard } from "./components/Dashboard";
import './App.css'

export default function App() {
  return (
    <header>
      <Dashboard/>
    </header>
  );
}
