function Button(props) {
  const styleButton = {
    color: "red",
    textAlingJustify: "center",
    justifyContent: "between",
    backgroundColor: "yellow",
  };

  console.log(props);
  return <button style={styleButton}>{props.text}</button>;
}

export default Button;
