import React from 'react';
import Button from '../Button';
import UserDataItem from './UserDataItem';

interface UserData {
  match: boolean;
  name: string;
  dateOfBirth: string;
  country: string;
  handleBack: () => void;
}

const Result: React.FC<UserData> = ({match, name, dateOfBirth, country, handleBack}) => {
  return (
    <main className="text-center mt-4">
      <h2 className={`text-5xl ${match ? 'text-red-500' : 'text-y-green'}`}>
        {match ? 'Hit' : 'Clear'}
      </h2>
      <section className='my-4'>
        <UserDataItem label="Name" value={name} />
        <UserDataItem label="Date of Birth" value={dateOfBirth} />
        <UserDataItem label="Country" value={country} />
      </section>
      <div className='w-1/2 inline-grid'>
        <Button
            onClick={handleBack}
            label="Back"
            bgColor="y-green"
            textColor="white"
          />
      </div>
    </main>
  );
};

export default Result;
