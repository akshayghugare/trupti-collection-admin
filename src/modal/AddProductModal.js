import React, { useState } from 'react';

const AddProductModal = ({ isOpen, onClose, onSave,product,setProduct ,handleAddProduct }) => {
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, profileImage: file });
  };

  
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      {/* Modal overlay */}
      <div className="modal-overlay" onClick={onClose}></div>

      {/* Modal content */}
      <div className="modal-container bg-white w-full max-w-md mx-auto p-8 mt-20 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>
        <div className='h-[374px] overflow-auto'>
        <label className="block mb-4">
          Product Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block mb-4">
          Size:
          <input
            type="text"
            name="size"
            value={product.size}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block mb-4">
          Price:
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </label>
        <label className="block mb-4">
          Profile Image:
          <input
            type="file"
            name="profileImage"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
          />
          {product.profileImage && (
            <img
              src={URL.createObjectURL(product.profileImage)}
              alt="Preview"
              className="mt-2 w-full rounded"
            />
          )}
        </label>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
            onClick={handleAddProduct}
          >
            Save
          </button>
          <button
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
