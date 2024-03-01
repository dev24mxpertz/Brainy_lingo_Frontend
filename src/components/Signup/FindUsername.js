import React, { useEffect, useState } from "react";
import LandingNav from "../LayoutPage/LandingNav";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Find_Username } from "../../store/Actions/authActions";

const FindUsername = () => {
  const [Username, setUsername] = useState("");
  const [data, setdata] = useState(null);
  const FoundedUser = useSelector((state) => state.auth.FoundedUser);
  // console.log(data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      Find_Username({
        Username: Username,
      })
    );
    setUsername("");
    // navigate('/Forgot-Password')
  };

  useEffect(() => {
    setdata(FoundedUser);
    if (data !== null && data.length !== 0) {
      navigate("/Forgot-Password");
    }
  }, [FoundedUser, navigate, data]);

  return (
    <>
      <LandingNav />
      <div className="SignUp_div col-md-12">
        <h3>Please Fill the Username </h3>
        <form className="Signup_form" onSubmit={handleSubmit}>
          <h6 className="text-start">Username </h6>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control inputSignup"
              placeholder="Username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-outline-primary mt-3 ">Submit</button>
        </form>
        <div className="linediv ">
          <span>
            Don't have an account? <Link to="/SignUp">SignUp</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default FindUsername;
