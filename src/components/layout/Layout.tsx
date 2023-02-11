import { defaultMeta } from "../../utils/defaultData";
import Meta from "./Meta";
import Background from "../Background";

interface ILayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<ILayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Meta
        title={defaultMeta.title}
        keywords={defaultMeta.keywords}
        description={defaultMeta.description}
      />
      <Background />
      {children}
    </>
  );
};

export default Layout;
