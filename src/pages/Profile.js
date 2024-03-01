import React from 'react';
import profilepic from '../assets/tshirt1.webp'



const Profile = () => {
  const personalDetails = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    profilePicture: profilepic, // Replace with the actual URL or path of your profile picture
  };

  const address = {
    street: '123 Main Street',
    city: 'Cityville',
    state: 'Stateville',
    zipCode: '12345',
  };

  return (
    <div className="flex flex-col p-4">
       <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <section className="flex items-center bg-gray-100 p-4 rounded-md mb-4">
        <img
          src={personalDetails.profilePicture}
          alt="Profile Picture"
          className="rounded-full h-40 w-40 mr-4 object-cover"
        />
        <div>
          <h2 className="text-xl font-bold mb-2">Personal Details</h2>
          <ul>
            <li>
              <strong>Name:</strong> {personalDetails.name}
            </li>
            <li>
              <strong>Age:</strong> {personalDetails.age}
            </li>
            <li>
              <strong>Email:</strong> {personalDetails.email}
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-xl font-bold mb-2">Address</h2>
        <ul>
          <li>
            <strong>Street:</strong> {address.street}
          </li>
          <li>
            <strong>City:</strong> {address.city}
          </li>
          <li>
            <strong>State:</strong> {address.state}
          </li>
          <li>
            <strong>Zip Code:</strong> {address.zipCode}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Profile;

