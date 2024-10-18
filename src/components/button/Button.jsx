import "./Button.css";

export const Button = ({ title, type, disabled, onClick }) => {
  return (
    <button
      className={`btn ${
        (type === "add" && "add") ||
        (type === "remove" && "remove") ||
        (type === "checkout" && "checkout")
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
