import styles from "./Button.module.css";
function Button({ children }) {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
}

export default Button;
