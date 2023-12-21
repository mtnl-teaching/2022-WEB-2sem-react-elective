import { useState } from "react";
import MyAltButton from "../components/shared/MyAltButton";
import SignInContent from "../components/SignInContent";
import SignUpModal from "../components/SignUpModal";

export default function Login({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="container">
      <div className="main--card">
        <SignInContent setUser={setUser} />
        <MyAltButton onClick={() => setShowSignUp(true)} text="Sign up" />
      </div>
      {showSignUp && (
        <SignUpModal close={() => setShowSignUp(false)} setUser={setUser} />
      )}
    </div>
  );
}
