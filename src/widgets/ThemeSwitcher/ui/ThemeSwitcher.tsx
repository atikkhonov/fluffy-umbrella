import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NameOfComponentThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  return <div className={classNames(cls.ThemeSwitcher, {}, [className])}></div>;
};
