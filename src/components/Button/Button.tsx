import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  children,
  type = "primary",
  size = "medium",
  onClick,
}: ButtonProps) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}
