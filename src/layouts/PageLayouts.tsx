import { Link } from "react-router-dom";
import { ArrowLeftIcons } from "../components/atoms/Icons";
import { Flex } from "../components/atoms/UI/Flex";
import { ILayouts } from "../types/assets.type";
import { ButtonTab } from "../components/organisms/Tabs";
import { useLocation } from "react-router-dom";

const PageLayouts = ({ children, title }: ILayouts) => {
  const local = useLocation();

  return (
    <div className="main">
      <div className="container">
        {local.pathname !== "/" ||
          (local.pathname !== "/" && (
            <Flex items="center" gap="1.2rem">
              <Link to={"/"}>
                <ArrowLeftIcons />
              </Link>
              <div className="main_title">{title}</div>
            </Flex>
          ))}
        {children}
      </div>

      <ButtonTab />
    </div>
  );
};

export default PageLayouts;
