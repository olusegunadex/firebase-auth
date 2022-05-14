import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../src/config/Firebase";
import { useAuth } from "../src/useAuth/useAuth";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  if (!user) {
    navigate("/login");
  }

  console.log("user-info", user);

  return (
    <div>
      <button className="signout-btn" onClick={logout}>
        Sign Out
      </button>
      <p>
        Back to login? <Link to="/login">Click</Link>{" "}
      </p>
    </div>
  );
}
