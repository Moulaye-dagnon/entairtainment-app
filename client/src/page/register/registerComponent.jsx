import { useState } from "react";
import { InputComponent } from "../../Components/InputComponent/InputComponent";
import { Link, useNavigate } from "react-router";
import { Logo } from "../../Components/logoComponent/Logo";
import { register } from "../../services/api.conf";
export function RegisterComponent() {
  const navigate = useNavigate();
  const [valueInput, setValueInput] = useState({
    email: "",
    password: "",
    ConfirmPassword: "",
  });
  const [inputEmpty, setinputEmpty] = useState(false);
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setValueInput({ ...valueInput, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      valueInput.password &&
      valueInput.password === valueInput.ConfirmPassword
    ) {
      register(valueInput.email, valueInput.password, navigate);

      setValueInput({
        email: "",
        password: "",
        ConfirmPassword: "",
      });
    } else {
      setinputEmpty(true);
    }
  };

  return (
    <div>
      <Logo />
      <div className="max-w-[327px] md:max-w-[400px]  mx-auto bg-semi-dark-blue rounded-xl p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          <div className="text-4xl  mb-4">Sign Up</div>
          <InputComponent
            emptyValue={inputEmpty}
            type={"email"}
            name={"email"}
            id={"email"}
            value={valueInput.email}
            OnChange={handleOnchange}
            placeholder={"Email address"}
          />
          <InputComponent
            emptyValue={inputEmpty}
            type={"password"}
            name={"password"}
            value={valueInput.password}
            OnChange={handleOnchange}
            placeholder={"Password"}
          />
          <InputComponent
            emptyValue={inputEmpty}
            type={"password"}
            name={"ConfirmPassword"}
            value={valueInput.ConfirmPassword}
            OnChange={handleOnchange}
            placeholder={"Repeat Password"}
          />

          <button
            type="submit"
            className="w-full cursor-pointer hover:bg-white hover:text-semi-dark-blue py-[13px] bg-red rounded-md text-center font-medium  mt-5 mb-6"
          >
            Create an account
          </button>
          <p className="w-5/6 text-xm mx-auto">
            Alread have an account?
            <Link className=" inline-block ml-2 text-red" to={"/login"}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
