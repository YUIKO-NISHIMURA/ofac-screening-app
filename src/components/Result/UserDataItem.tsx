import React from 'react';

interface UserDataItemProps {
  label: string;
  value: string;
  isMatch: boolean;
}

const UserDataItem: React.FC<UserDataItemProps> = ({ label, value, isMatch }) => {
  const color = isMatch ? 'y-hit' : 'y-clear';
  return (
    <li className='flex gap-2 mb-1 '>
        <label className="font-bold w-40 text-right">{label}:</label>
        <p className={`border-b-2 border-solid border-${color}`}>{value}</p>
        <span className={`inline-block bg-${color} rounded-full p-2 h-fit text-[10px]`}>
          {isMatch ? 'Match' : 'Unmatch'}
        </span>
    </li>
);
}

export default UserDataItem;
