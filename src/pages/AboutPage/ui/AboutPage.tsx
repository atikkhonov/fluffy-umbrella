import { useTranslation } from 'react-i18next';
import cls from './AboutPage.module.scss';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return <main className={cls.root}>{t('About page')}</main>;
};

export default AboutPage;
