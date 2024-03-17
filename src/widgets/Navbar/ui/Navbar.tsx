import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppNavLink, AppNavLinkTheme } from "shared/ui/AppNavLink/AppNavLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppNavLink
          theme={AppNavLinkTheme.PRIMARY}
          to="/"
          className={cls.mainLink}
        >
          Main
        </AppNavLink>
        <AppNavLink theme={AppNavLinkTheme.PRIMARY} to="/about">
          About
        </AppNavLink>
      </div>
    </div>
  );
};
