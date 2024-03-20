import { classNames } from 'shared/lib/classNames/classNames';
import { AppNavLink, AppNavLinkTheme } from 'shared/ui/AppNavLink/AppNavLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppNavLink
                    theme={AppNavLinkTheme.PRIMARY}
                    to="/"
                    className={cls.mainLink}
                >
                    {t('Home')}
                </AppNavLink>
                <AppNavLink theme={AppNavLinkTheme.PRIMARY} to="/about">
                    {t('About')}
                </AppNavLink>
            </div>
        </div>
    );
};
