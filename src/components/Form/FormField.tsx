// FormField.tsx
import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type: string; // 'text' or 'select'
  value: string;
  options?: string[]; // Only for type 'select'
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const INPUT_CLASSNAME = "w-full p-2 border border-gray-300 rounded h-12 focus:border-y-green outline-none"

const FormField: React.FC<FormFieldProps> = ({ label, name, type, value, options, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      {type === 'text' && (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className={INPUT_CLASSNAME}
        />
      )}
      {type === 'select' && (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={INPUT_CLASSNAME}
        >
          <option disabled value=""></option>
          {options?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default FormField;
