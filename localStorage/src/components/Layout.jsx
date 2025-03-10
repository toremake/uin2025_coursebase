import { Link } from "react-router-dom";
import "../styles/layout.scss";

export default function Layout({ children, setSignedIn, signedIn }) {
  console.log(signedIn);
  return (
    <>
      <header>
        <nav>
          <Link to="/" id="logo">
            Connectis
          </Link>
          <ul>
            {signedIn ? (
              <>
                <li>Username</li>
                <li>
                  <button onClick={() => setSignedIn(false)}>Logg ut</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="login">Log in</Link>
                </li>
                <li>
                  <Link to="signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      {children}
      <footer>Connectis 2025</footer>
    </>
  );
}
