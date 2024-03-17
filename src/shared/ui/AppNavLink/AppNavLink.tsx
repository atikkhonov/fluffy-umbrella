//@ts-nocheck
import { NavLinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppNavLink.module.scss";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./AppNavLink.scss";

export enum AppNavLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppNavLinkProps extends NavLinkProps {
  className?: string;
  theme?: AppNavLinkTheme;
}

export const AppNavLink: FC<AppNavLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppNavLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <NavLink
      to={to}
      className={classNames(cls.AppNavLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};
