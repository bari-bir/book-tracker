import styled from "@emotion/styled";
import { ReactNode } from "react";

interface IButton {
  children?: ReactNode;
  className?: string;
  background?: string;
  color?: string;
  padding?: string;
  width?: string;
  radius?: string;
  size?: string;
  weight?: string;
  shadow?: string;
  margin?: string;
}

export const Button = ({ children, className, ...props }: IButton) => {
  return (
    <ButtonStyled className={className + " button"} {...props}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<Partial<IButton>>`
  display: inline-block;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};
  margin: ${(props) => props.margin};
  border: none;
`;
