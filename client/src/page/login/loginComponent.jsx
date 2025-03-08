import { useState } from "react";
import { InputComponent } from "../../Components/InputComponent/InputComponent";
import { Link } from "react-router";
import { Logo } from "../../Components/logoComponent/Logo";
import axios from "axios";

export function LoginComponent() {
  const [valueInput, setValueInput] = useState({
    email: "",
    password: "",
  });
  const [inputEmpty, setinputEmpty] = useState(false);
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setValueInput({ ...valueInput, [name]: value });
  };
  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (valueInput.password) {
      setinputEmpty(false);

      try {
        const response = await axios.post("http://localhost:3000/auth/login", {
          email: valueInput.email,
          password: valueInput.password,
        });
        if (response) {
          console.log(response);
        }
      } catch (error) {
        console.log("Error server", error);
      }
    } else {
      setinputEmpty(true);
    }

    setValueInput({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <Logo />
      <div className="max-w-[327px] md:max-w-[400px]  mx-auto bg-semi-dark-blue rounded-xl p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          <div className="text-4xl  mb-4">Login</div>
          <InputComponent
            emptyValue={inputEmpty}
            type="email"
            name="email"
            id="email"
            value={valueInput.email}
            OnChange={handleOnchange}
            placeholder={"Email address"}
          />
          <InputComponent
            emptyValue={inputEmpty}
            name="password"
            type="password"
            id="password"
            value={valueInput.password}
            OnChange={handleOnchange}
            placeholder={"Password"}
          />

          <button
            type="submit"
            className="w-full cursor-pointer hover:bg-white hover:text-semi-dark-blue py-[13px] bg-red rounded-md text-center font-medium  mt-5 mb-6"
          >
            Login your account
          </button>
          <p className="w-5/6 text-xm mx-auto">
            Don’t have an account?
            <Link className=" inline-block ml-2 text-red" to={"/register"}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
