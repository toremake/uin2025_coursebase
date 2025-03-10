import { useState } from "react";

export default function Login({ setSignedIn, existingUser }) {
  const [login, setLogin] = useState([]);
  const [error, setError] = useState();

  const handleLogin = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setLogin((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  console.log(login.username, login.password);
  console.log(existingUser);

  const handleClick = (e) => {
    e.preventDefault();
    const storageUser = JSON.parse(existingUser);
    //sammenligne brukernavn og passord med eksiterende bruker
    const exists =
      login.username === storageUser.username &&
      login.password === storageUser.password;
    //Hvis passord og brukernavn stemmer skal man kunne logge seg inn
    console.log(exists);
    exists ? setSignedIn(true) : setError("Noe stemmer ikke");
  };

  return (
    <section>
      <h1>Logg inn</h1>
      <form>
        <label>
          Brukernavn
          <input
            onChange={handleLogin}
            name="username"
            type="text"
            placeholder="Ackarlse..."
          />
        </label>
        <label>
          Passord
          <input
            onChange={handleLogin}
            name="password"
            type="password"
            placeholder="*********"
          />
        </label>
        <button onClick={handleClick}>Logg inn</button>
      </form>
      <p>{error}</p>
    </section>
  );
}
