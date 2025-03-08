import logo from "../../assets/logo.svg";
export function Logo() {
  return (
    <div className="w-8 mx-auto my-12">
      <img src={logo} className=" w-full text-red" alt="" />
    </div>
  );
}
