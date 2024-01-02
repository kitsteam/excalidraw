import OpenColor from "open-color";
import "./Kits.scss";
import "./Card.scss";

export const Card: React.FC<{
  color: keyof OpenColor | "primary";
  children?: React.ReactNode;
}> = ({ children, color }) => {
  return (
    <div
      className="Card"
      style={{
        ["--card-color" as any]:
          color === "primary" ? "var(--color-primary)" : 'var(--kits-primary)',
        ["--card-color-darker" as any]:
          color === "primary"
            ? "var(--color-primary-darker)"
            : 'var(--kits-primary-darker)',
        ["--card-color-darkest" as any]:
          color === "primary"
            ? "var(--color-primary-darkest)"
            : 'var(--kits-primary-darkest)',
      }}
    >
      {children}
    </div>
  );
};
