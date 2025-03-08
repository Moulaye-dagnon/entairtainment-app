export function InputComponent({
  name,
  id,
  placeholder,
  type,
  value,
  OnChange,
  emptyValue,
}) {
  return (
    <div
      className={`${value ? "border-white" : "border-greyish-Blue"} ${
        type == "password" && emptyValue ? "border-red" : "border-greyish-Blue"
      } my-6 last:mb-0 cursor-pointer first:mt-0 relative w-full border-b   pl-4 inputComponent `}
    >
      <input
        className=" group-last: w-full caret-red   mb-3.5 outline-0 text-lg"
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        id={id}
        onChange={OnChange}
      />

      {type == "password" && emptyValue ? (
        <span className=" absolute top-2 text-red text-xs right-4">
          Can’t be empty
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
