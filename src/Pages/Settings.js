import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { auth } from "../firebase";
import { lightTeme, DarkTeme, GlobalStyle } from "../theme";
function Settings() {
  const user = auth.currentUser;

  console.log(user);
  const [theme, seTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? seTheme("dark") : seTheme("light");
  };
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const updateEmail = (email) => {
    user
      .updateEmail(email)
      .then(() => {
        // Update successful
        // ...
      })
      .catch((error) => {
        alert("Email update unsuccessful");
        // An error occurred
        // ...
      });
  };

  const updateUsername = (username) => {
    user
      .updateProfile({
        displayName: username,
      })
      .then(() => {
        // Update successful
        // ...
      })
      .catch((error) => {
        alert("username update unsuccessful");
        // An error occurred
        // ...
      });
  };

  const onSave = () => {
    updateEmail(email);
    updateUsername(username);
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTeme : DarkTeme}>
        <GlobalStyle/>
      <>
        <div>Settings</div>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <button onClick={onSave}>SAVE</button>
        {/* <select>
          <option value="select a theme">select a theme</option>
          <option value="dark">dark</option>
          <option value="light">light</option>
        </select> */}
        <ThemeChanger>
        <button onClick={() => themeToggler()}>change theme</button>
        </ThemeChanger>
       
      </>
    </ThemeProvider>
  );
}

export default Settings;

const ThemeChanger = styled.div`
color: ${props => props.theme.fontColor}
`