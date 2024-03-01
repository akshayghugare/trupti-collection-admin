import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const Home = () => {
  // Sample data for demonstration purposes
  const storageData = [
    { title: 'Storage', value: 70, color: '#FF6384' },
    { title: 'Unused Space', value: 30, color: '#EDEDED' },
  ];

  const remainingStockData = [
    { title: 'Remaining Stock', value: 40, color: '#36A2EB' },
    { title: 'Used Stock', value: 60, color: '#EDEDED' },
  ];

  const buyerStockData = [
    { title: 'Buyer Stock', value: 20, color: '#FFCE56' },
    { title: 'Available Stock', value: 80, color: '#EDEDED' },
  ];

  return (
    <div className="flex flex-col p-4">
      <div className="">
        <h1 className="text-2xl mb-4">Clothes Dashboard</h1>
        <div className="mb-8">
          <h2 className="text-lg mb-2">Total Clothes by Category</h2>
          <ul className="flex gap-5">
            <li className="flex items-center border p-4 rounded-md shadow-lg">
              <span className="bg-red-500 rounded-full h-4 w-4 mr-2"></span>
              Category A: 30 items
            </li>
            <li className="flex items-center p-4 border rounded-md shadow-lg">
              <span className="bg-blue-500 rounded-full h-4 w-4 mr-2"></span>
              Category B: 20 items
            </li>
            <li className="flex items-center p-4 border rounded-md shadow-lg">
              <span className="bg-yellow-500 rounded-full h-4 w-4 mr-2"></span>
              Category C: 50 items
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between gap-10">
        <div className="">
          <h2 className="text-lg mb-2">Storage</h2>
          <PieChart
            data={storageData}
            label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}%`}
            labelPosition={50}
            labelStyle={{
              fontSize: '5px',
              fontFamily: 'sans-serif',
            }}
          />
        </div>
        <div className="">
          <h2 className="text-lg mb-2">Remaining Stock</h2>
          <PieChart
            data={remainingStockData}
            label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}%`}
            labelPosition={50}
            labelStyle={{
              fontSize: '5px',
              fontFamily: 'sans-serif',
            }}
          />
        </div>
        <div>
          <h2 className="text-lg mb-2">Buyer Stock</h2>
          <PieChart
            data={buyerStockData}
            label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}%`}
            labelPosition={50}
            labelStyle={{
              fontSize: '5px',
              fontFamily: 'sans-serif',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
