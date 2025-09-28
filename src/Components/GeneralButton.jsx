import { Button } from "primereact/button";

export default function GeneralButton({
  onClick,
  width = 180,
  children = null,
  icon = null,
  disabled = false,
  skin = "general",
  height = 40,
  type = "submit",
  borderRadius = 7,
  className = null,
  style = {},
}) {
  if (children !== null) {
    return (
      <Button
        className={`${skin}-button text-buttons ${className}`}
        disabled={disabled}
        onClick={onClick}
        style={{ ...style, width, height, borderRadius }}
        icon={icon}
        type={type}
      >
        {children}
      </Button>
    );
  } else {
    return (
      <Button
        className={`${skin}-button icon-buttons ${className}`}
        disabled={disabled}
        onClick={onClick}
        style={{ ...style, width: height, height }}
        icon={icon}
        type={type}
      />
    );
  }
}
