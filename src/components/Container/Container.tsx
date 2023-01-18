import { ReactNode } from "react";
import "./Container.scss";

type ContainerProps = {
  children?: ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className="Container">{children}</div>;
}

export default Container;
