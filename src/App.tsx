import React, { useEffect, useState } from 'react';
import { fetchCountries } from './api/fetchCountries';
import { searchOFAC } from './api/searchOfac';
import { formatDay, formatMonth } from './components/Form/helper';
import Form from './components/Form/index';
import Result from './components/Result/index';
import { FormDataType } from './types/Form';
import { ApiResponse } from './types/Result';

const OfacSearch: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    birthMonth: '',
    birthDay: '',
    birthYear: '',
    country: '',
  });
  const [countries, setCountries] = useState<string[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null); 
  const [searchData, setsearchData] = useState<ApiResponse | null>(null); 

  useEffect(() => {
    const fetchCountryData = async () => {
      const sortedCountries = await fetchCountries();
      setCountries(sortedCountries);
    };

    fetchCountryData();
  }, []);

  const handleSearch = async () => {
    try {
      setApiError(null);
      const resultData:ApiResponse  = await searchOFAC(formData);
      setsearchData(resultData);
      setShowResult(true)
    } catch (error: any) {
      setApiError(error.message);
    }
  };

  const handleBack = () => {
    setShowResult(false)
  };
  
  return (
    <div className="bg-y-gray p-8 h-screen">
      <h1 className="text-4xl font-bold pb-8">OFAC Screening</h1>
      {/* <p className="text-gray-600 mb-4 w-80">
        OFAC Search (also known as OFAC Screening, OFAC Scrubbing, and OFAC List Screening) is the process by which organizations identify whether or not any parties involved in a transaction can be found on watch lists maintained by the Office of Foreign Assets Control (OFAC), a division of U.S. Department of the Treasury.
      </p> */}

      <div className="bg-white px-6 py-12 rounded-md sm:w-1/2 w-full m-auto">
        {showResult && searchData ? (
          <Result
            searchData={searchData}
            name={formData.name}
            dateOfBirth={formData.birthMonth && `${formData.birthYear}-${formatMonth(formData.birthMonth)}-${formatDay(formData.birthDay)}`}
            country={formData.country}
            handleBack={handleBack}
          />
        ) : (
          <Form
            apiError={apiError}
            formData={formData}
            setFormData={setFormData}
            setApiError={setApiError}
            handleSearch={handleSearch}
            countries={countries}
          />
        )}
      </div>
    </div>
  );
};

export default OfacSearch;
