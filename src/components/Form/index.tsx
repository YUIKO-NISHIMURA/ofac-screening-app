// Form.tsx
import React from 'react';
import Button from '../Button';
import { getMonths, getDays, getYears } from './helper';
import DateSelector from './DateSelector';
import FormField from './FormField';

interface FormProps {
  formData: {
    name: string;
    birthMonth: string;
    birthDay: string;
    birthYear: string;
    country: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSearch: () => void;
  handleReset: () => void;
  countries: string[];
}

const Form: React.FC<FormProps> = ({
  formData,
  handleInputChange,
  handleSearch,
  handleReset,
  countries,
}) => {
  return (
    <>
        <h2 className="text-3xl">Sanctions List Search</h2>
        <main className='my-6'>
          <FormField
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />
          <div className="mb-4 space-x-4">
            <div className="w-full">
              <label className="block mb-1">Date of Birth</label>
              <div className="flex space-x-2 w-full">
                <DateSelector
                  label="Month"
                  name="birthMonth"
                  value={formData.birthMonth}
                  options={getMonths()}
                  onChange={handleInputChange}
                  widthHalf={true}
                />
                <DateSelector
                  label="Day"
                  name="birthDay"
                  value={formData.birthDay}
                  options={getDays()}
                  onChange={handleInputChange}
                />
                <DateSelector
                  label="Year"
                  name="birthYear"
                  value={formData.birthYear}
                  options={getYears()}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <FormField
            label="Country"
            name="country"
            type="select"
            value={formData.country}
            options={countries}
            onChange={handleInputChange}
          />
        </main>
        <div className="flex space-x-2 w-full">
            <Button
              onClick={handleSearch}
              label="Search"
              bgColor="y-green"
              textColor="white"
            />
            <Button
              onClick={handleReset}
              label="Reset"
              bgColor="gray-300"
              textColor="gray-700"
            />
        </div>

    </>
  );
};

export default Form;
