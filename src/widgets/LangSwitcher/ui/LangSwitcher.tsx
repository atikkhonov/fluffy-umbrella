import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import LangSwitcherIcon from 'shared/assets/icons/lang.svg';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const changeLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CIRCLE}
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={changeLang}
        >
            <LangSwitcherIcon />
        </Button>
    );
};
