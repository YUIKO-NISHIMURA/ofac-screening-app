import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type: string; // 'text' or 'select'
  value: string;
  options?: string[]; // Only for type 'select'
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  hasError?: boolean;
  errorMessage?: string;
}

const INPUT_CLASSNAME = "w-full p-2 border border-gray-300 rounded h-12 focus:border-y-green outline-none"

const FormField: React.FC<FormFieldProps> = ({ label, name, type, value, options, onChange, onBlur, hasError, errorMessage }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      {type === 'text' && (
        <div>
          <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`${INPUT_CLASSNAME} ${hasError ? 'border-red-500' : 'border-gray-300'}`}
          />
          {hasError && <p className="text-red-500 text-xs">{errorMessage}</p>}
        </div>
      )}
      {type === 'select' && (
        <div>
          <select
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`${INPUT_CLASSNAME} ${hasError ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option disabled value=""></option>
            {options?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          {hasError && <p className="text-red-500 text-xs">{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default FormField;
