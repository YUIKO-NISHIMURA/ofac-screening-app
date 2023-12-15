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
      <header className='pb-8'>
        <h1 className="text-4xl font-bold">OFAC Screening</h1>
        <a className="border-b border-y-blue text-y-blue pb-1" href="https://ofac.treasury.gov/specially-designated-nationals-and-blocked-persons-list-sdn-human-readable-lists" target="_blank" rel="noreferrer">What is OFAC?</a>
      </header>
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
