import classNames from "classnames";

// function Button(props) { // Bunun yerine distructer kullanılabilir
function Button({ children, text, variant = "default" }) {
  // const styleButton = {
  //   color: "black",
  //   textAlingJustify: "center",
  //   justifyContent: "between",

  //   fontWeight: "500",
  // };

  // console.log(text);
  return (
    <button
      className={classNames({
        "w-1/2 hover:w-full p-4 h-5 flex text-center items-center rounded-xl hover:rounded-lg my-2": true,
        " bg-gray-100": variant === "default",
        " bg-green-600 text-white": variant === "success",
        " bg-red-600 text-white": variant === "danger",
        " bg-yellow-300 text-black": variant === "info",
      })}>
      {text} {children} {variant}
    </button>
  );
}

export default Button;
