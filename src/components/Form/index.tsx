import React, { useState } from 'react';
import Button from '../Button';
import { getMonths, getDays, getYears } from './helper';
import DateSelector from './DateSelector';
import FormField from './FormField';
import { FormDataType, FormErrorType } from '../../types/Form';

interface FormProps {
  apiError: string | null;
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  setApiError: React.Dispatch<React.SetStateAction<string | null>>;
  handleSearch: () => void;
  countries: string[];
}

const Form: React.FC<FormProps> = ({
  apiError,
  formData,
  setFormData,
  setApiError,
  handleSearch,
  countries,
}) => {
  const [errors, setErrors] = useState<FormErrorType>({
    name: true,
    birthDate: false,
    country: false,
  });

  const [focusedInput, setFocusedInput] = useState<keyof FormErrorType | ''>('');


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      birthDate: formData.birthMonth === '' || formData.birthDay === '' || formData.birthYear === '',
      country: formData.country === '',
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSearchClick = () => {
    if (validateForm()) handleSearch();
  };

  const handleBlurAndValidate = () => validateForm();
  const handleReset = () => {
    setErrors({ name: false, birthDate: false, country: false });
    setApiError(null);
    setFormData({
      name: '',
      birthMonth: '',
      birthDay: '',
      birthYear: '',
      country: '',
    });
  };

  return (
    <>
      <h2 className="text-3xl">Sanctions List Search</h2>
      <main className='my-6'>
        <FormField
          label="Type"
          name="type"
          type="text"
          value="Individual"
          isFixedValue={true}
        />
        <FormField
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange(e)}
          onBlur={() => {handleBlurAndValidate(); setFocusedInput('name');}}
          hasError={errors.name && focusedInput === 'name'}
          errorMessage="Name is required."
        />
        <div className="mb-4 space-x-4">
          <div className="w-full">
            <label className="block mb-1">Date of Birth</label>
            <div className="grid grid-cols-4 gap-2">
              {['Month', 'Day', 'Year'].map((unit) => (
                <DateSelector
                  key={unit}
                  label={unit}
                  name={`birth${unit}`}
                  value={formData[`birth${unit}` as keyof FormDataType]}
                  options={unit === 'Month' ? getMonths() : unit === 'Day' ? getDays() : getYears()}
                  onChange={handleInputChange}
                  onBlur={() => { handleBlurAndValidate(); setFocusedInput('birthDate'); }}
                  hasError={errors.birthDate && focusedInput === 'birthDate'}
                  errorMessage="Birth date is required."
                />
              ))}
            </div>
          </div>
        </div>
        <FormField
          label="Country"
          name="country"
          type="select"
          value={formData.country}
          options={countries}
          onChange={(e) => handleInputChange(e)}
          onBlur={() => {handleBlurAndValidate(); setFocusedInput('country');}}
          hasError={errors.country && focusedInput === 'country'}
          errorMessage="Country is required."
        />
        {apiError && <p className='text-red-500 text-xl'>{apiError}</p>}

      </main>
      <p>*This information is based on data provided by OFAC SDN.</p>
      <a className="border-b border-y-blue text-y-blue pb-1" href="https://ofac.treasury.gov/specially-designated-nationals-and-blocked-persons-list-sdn-human-readable-lists" target="_blank" rel="noreferrer">*Check for last Update</a>
      <div className="flex space-x-2 w-full mt-4">
        <Button
          onClick={handleSearchClick}
          label="Search"
          bgColor={Object.values(errors).some(Boolean) ? "gray" : "blue" }
          disabled={Object.values(errors).some(Boolean)} 
        />
        <Button
          onClick={() => { handleReset(); }}
          label="Reset"
          bgColor="black"
        />
      </div>
    </>
  );
};

export default Form;
