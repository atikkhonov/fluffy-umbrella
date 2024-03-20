import { NavLinkProps, NavLink } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './AppNavLink.module.scss';
import './AppNavLink.scss';

export enum AppNavLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
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
