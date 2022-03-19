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
    user.updateEmail(email).then(() => {}).catch((error) => {
      alert(error.message)
    })
  };

  const updateUsername = (username) => {
    user
      .updateProfile({
        displayName: username,
      })
      .then(() => {}).catch((error) => {
        alert(error.message)
      });
  };

  const onSave = () => {
    updateEmail(email);
    updateUsername(username);
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTeme : DarkTeme}>
      <GlobalStyle />
      <>
        <div></div>
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

        <ThemeChanger>
          <button onClick={() => themeToggler()}>change theme</button>
        </ThemeChanger>
      </>
    </ThemeProvider>
  );
}

export default Settings;

const ThemeChanger = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
