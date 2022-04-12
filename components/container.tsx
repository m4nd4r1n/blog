import { ReactNode, FunctionComponent } from "react";

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="mx-auto px-8 max-w-6xl">{children}</div>;
};

export default Container;
