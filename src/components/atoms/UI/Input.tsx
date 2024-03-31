import styled from "@emotion/styled";

interface Input {
  placeholder?: string;
  label?: string;
  onChange?: (e: any) => void;
  value?: string;
  type?: string;
}

export const Input = ({ value, placeholder, label, type, onChange }: Input) => {
  return (
    <>
      <label>{label}</label>
      <InputStyled
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        type={type}
      />
    </>
  );
};

export const UploadFile = ({ type }: Input) => {
  return (
    <>
      <InputStyled type={type} variant/>
    </>
  );
};

const InputStyled = styled.input<{ variant?: boolean }>`
  width: 100%;

  border: 0.2px solid black;
  padding-inline: 1.2rem;
  padding-block: 1.2rem;
  border-radius: 14px;
  margin-top: 1rem;

  ${(props) =>
    props.variant &&
    `
    border: none;
  `}
`;
