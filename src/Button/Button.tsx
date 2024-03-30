import React from "react";
import styled from "styled-components";

interface ButtonType {
  type: "submit" | "button" | "reset";
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Button = ({
  type = "submit",
  onClick,
  children,
  disabled,
  ...props
}: ButtonType) => {
  return (
    <S.CommonButton
      type={type}
      onClick={onClick}
      children={children}
    ></S.CommonButton>
  );
};

export default Button;

const S = {
  CommonButton: styled.button`
    cursor: pointer;
    background-color: #fff;
    border: solid 1px #000;
    border-radius: 2px;
    padding: 5px 10px;
  `,
};
