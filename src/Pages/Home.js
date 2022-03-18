import React, { useEffect } from "react";
import Header from "../Components/Header";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../redux/action";

function Home() {
  const { user } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  const handleSingIn = (e) => {
    e.preventDefault();
    dispatch(LoginAPI(user));
  };
  return (
    <>
      <Header />
      <div className="home">
        <div className="login">
          {user ? (
              <>
            <h1>Welcome {user.displayName}</h1>
            {/* <input type="text"  placeholder="address"/>
            <input type="number"  placeholder="mobile number"/> */}
            </>
          ) : (
            <button className="button" onClick={handleSingIn}>
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
