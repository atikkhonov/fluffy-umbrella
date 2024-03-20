import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';

const MainPage = () => {
    const { t } = useTranslation();

    return <main className={cls.root}>{t('Home page')}</main>;
};

export default MainPage;
