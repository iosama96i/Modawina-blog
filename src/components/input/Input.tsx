import React, { ReactElement, MouseEvent } from "react";

interface Iprops {
  type?: "text" | "email" | "password" | "date" | "radio" | "tel" | "number";
  label?: string;
  value?: string;
  placeholder?: string;
  name?: string;
  children?: ReactElement;
  onChange?: Function;
  onBlur?: Function;
  onClick?: Function;
  onKeyPress?: Function;
  required?: boolean;
  requiredMsg?: string;
  error?: string;
  disabled?: boolean;
  additionalInfo?: string;
  className?: string;
  autoCorrect?: boolean;
  full?: boolean;
  checked?: boolean;
  divStyel?: string;
  minLength?: number;
  maxLength?: number;
}

const Input = ({
  type = "text",
  label = "lable",
  value = "",
  placeholder = "Placeholder",
  name = "name",
  children,
  onChange = () => {},
  onBlur = () => {},
  onClick = () => {},
  onKeyPress = () => {},
  required = true,
  requiredMsg = "",
  error = "",
  disabled = false,
  className = "",
  checked = false,
  divStyel = "",
  maxLength,
  minLength,
}: Iprops) => {
  const input = (
    <input
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
      required={required}
      onChange={(e) => onChange(e)}
      onBlur={(e) => onBlur(e)}
      onClick={(e) => onClick(e)}
      onKeyPress={(e) => onClick(e)}
      disabled={disabled}
      checked={checked}
      maxLength={maxLength}
      minLength={minLength}
    />
  );
  return (
    <div className={`${divStyel} ` + (error && "error")}>
      <label htmlFor={name} className="block mb-1">
        {label} <p className="text-[#EB0000] inline">{`${requiredMsg}`}</p>
      </label>

      {input}

      <span>{error}</span>
    </div>
  );
};

export default Input;
