import React from 'react';
import { ApiResponse } from '../../types/Result';
import Button from '../Button';
import UserDataItem from './UserDataItem';

interface UserData {
  searchData: ApiResponse
  name: string;
  dateOfBirth: string;
  country: string;
  handleBack: () => void;
}

const Result: React.FC<UserData> = ({ searchData, name, dateOfBirth, country, handleBack }) => {
  const matches = searchData.matches[name];
  const isMatch = matches?.length > 0;
  let isdateOfBirthMatch = false;
  let isCountryMatch = false;

  if (isMatch) {
    isdateOfBirthMatch = matches.some(match => match.dob && match.dob === dateOfBirth);
    isCountryMatch = matches.some(match =>
      match.addresses && match.addresses.some(address => address.country === country)
    );
  }

  return (
    <main className="text-center mt-4">
      <h2 className={`text-5xl ${isMatch ? 'text-y-red' : 'text-y-blue'}`}>
        {isMatch ? 'Hit' : 'Clear'}
      </h2>
      <section className="my-4 inline-block items-center justify-center">
        <UserDataItem label="Name" value={name} isMatch={isMatch}/>
        <UserDataItem label="Date of Birth" value={dateOfBirth} isMatch={isdateOfBirthMatch}/>
        <UserDataItem label="Country" value={country} isMatch={isCountryMatch}/>
      </section>
      <div className="text-sm">
        <p>*This information is based on data provided by OFAC SDN.</p>
        <a className="border-b border-y-blue text-y-blue pb-1" href="https://sanctionssearch.ofac.treas.gov/" target="_blank" rel="noreferrer">For more information...</a>
      </div>
      <div className="w-1/2 inline-grid mt-6">
        <Button onClick={handleBack} label="Back" bgColor="blue"/>
      </div>
    </main>
  );
};

export default Result;

