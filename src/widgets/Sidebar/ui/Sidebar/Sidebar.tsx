import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { Button } from "shared/ui/Button/Button";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapse, setCollapse] = useState(false);

  const onChangeState = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapse]: collapse }, [
        className,
      ])}
    >
      <Button onClick={onChangeState}>123</Button>
    </div>
  );
};
