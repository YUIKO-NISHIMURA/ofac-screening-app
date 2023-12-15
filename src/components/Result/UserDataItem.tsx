import React from 'react';

interface UserDataItemProps {
  label: string;
  value: string;
  isMatch: boolean;
}

const UserDataItem: React.FC<UserDataItemProps> = ({ label, value, isMatch }) => {
  return (
    <li className='flex gap-2 mb-1'>
        <label className="font-bold w-40 text-right">{label}:</label>
        <p className={`border-b-2 border-solid ${isMatch ? 'border-y-hit' : 'border-y-clear'}`}>{value}</p>
        <span className={`inline-block ${isMatch ? 'bg-y-hit text-y-red' : 'bg-y-clear text-y-blue'} rounded-full p-2 h-fit text-[10px]`}>
          {isMatch ? 'Match' : 'Unmatch'}
        </span>
    </li>
);
}

export default UserDataItem;
