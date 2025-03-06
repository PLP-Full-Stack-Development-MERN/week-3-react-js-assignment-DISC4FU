import React from 'react';

const Profile = ({ name, email }) => {
  return (
    <div className="border p-4 rounded shadow-md w-1/2 mx-auto my-4">
      <h2 className="text-lg font-semibold">Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default Profile;