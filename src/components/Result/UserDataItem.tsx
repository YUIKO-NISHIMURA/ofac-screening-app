import React from 'react';

interface UserDataItemProps {
  label: string;
  value: string;
}

const UserDataItem: React.FC<UserDataItemProps> = ({ label, value }) => (
    <li className='flex gap-2 mb-1'>
        <label className="font-bold w-40 text-right">{label}:</label>
        <p>{value}</p>
    </li>
);

export default UserDataItem;
