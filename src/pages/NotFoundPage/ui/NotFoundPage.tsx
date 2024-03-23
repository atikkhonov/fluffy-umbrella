// Bonjour
import cls from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

interface NotFoundPageProps {
  className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const [t] = useTranslation();

  return (
    <main className={classNames(cls.NotFoundPage, {}, [className])}>
      <h1>{t("Page Not Found")}</h1>
    </main>
  );
};
