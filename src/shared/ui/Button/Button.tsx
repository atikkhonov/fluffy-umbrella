import { classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  CIRCLE = "circle",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = (props) => {
  const { children, className, theme, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      type="button"
    >
      {children}
    </button>
  );
};
