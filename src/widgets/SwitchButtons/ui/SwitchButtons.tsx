import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './SwitchButtons.module.scss';

interface SwitchButtonsProps {
  className?: string;
}

export const SwitchButtons = ({ className }: SwitchButtonsProps) => (
    <section className={classNames(cls.SwitchButtons, {}, [className])}>
        <LangSwitcher />
        <ThemeSwitcher />
    </section>
);
