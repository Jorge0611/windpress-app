import { HTMLInputTypeAttribute } from "react";

interface Fields {
  type: HTMLInputTypeAttribute;
  id: string;
  name: string;
  label: string;
  autoComplete: string;
  placeholder?: string;
}

const FormInput = ({
  type,
  id,
  name,
  label,
  autoComplete,
  ...props
}: Fields) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-blue-gray-600"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        autoComplete={autoComplete}
        {...props}
        className="mt-1 focus:ring-blue-200 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </>
  );
};

export default FormInput;
