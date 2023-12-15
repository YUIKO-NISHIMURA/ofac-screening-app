import React, { useEffect, useState } from 'react';
import { fetchCountries } from './api/fetchCountries';
import Form from './components/Form/index';
import Result from './components/Result/index';

const OFACSearch: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthMonth: '',
    birthDay: '',
    birthYear: '',
    country: '',
  });
  const [countries, setCountries] = useState<string[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);

  useEffect(() => {
    const fetchCountryData = async () => {
      const sortedCountries = await fetchCountries();
      setCountries(sortedCountries);
    };

    fetchCountryData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSearch = () => {
    setShowResult(true)
  };

  const handleBack = () => {
    setShowResult(false)
  };

  const handleReset = () => {
    setFormData({
      name: '',
      birthMonth: '',
      birthDay: '',
      birthYear: '',
      country: '',
    });
  };

  return (
    <div className="bg-y-gray p-8 h-screen">
      <h1 className="text-4xl font-bold pb-8">OFAC Screening</h1>
      {/* <p className="text-gray-600 mb-4 w-80">
        OFAC Search (also known as OFAC Screening, OFAC Scrubbing, and OFAC List Screening) is the process by which organizations identify whether or not any parties involved in a transaction can be found on watch lists maintained by the Office of Foreign Assets Control (OFAC), a division of U.S. Department of the Treasury.
      </p> */}

      <div className="bg-white px-6 py-12 rounded-md sm:w-1/2 w-full m-auto">
        {!showResult ? (
          <Form
            formData={formData}
            handleInputChange={handleInputChange}
            handleSearch={handleSearch}
            handleReset={handleReset}
            countries={countries}
          />
        ) : (
          <Result
            match={true}
            name= 'John Doe'
            dateOfBirth= '01/01/1990'
            country= 'USA'
            handleBack={handleBack}
          />
        )}
      </div>
    </div>
  );
};

export default OFACSearch;
