import React, { useState } from 'react';

const EditModal = ({ isOpen, onClose, selectedItem,editedItem ,handleInputChange,handleSave}) => {
  

  

  

  return (
    <div className={`modal fixed inset-0 ${isOpen ? 'block' : 'hidden'}`}>
      {/* Modal overlay */}
      <div className="modal-overlay" onClick={onClose}></div>

      {/* Modal content */}
      <div className="modal-container bg-white w-full max-w-md mx-auto p-8 mt-20 rounded shadow-lg">
        {selectedItem && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Edit Item</h2>
            {/* Editable input fields */}
            <label className="block mb-2">
              Name:
              <input
                type="text"
                name="name"
                value={editedItem?.name || selectedItem.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </label>
            <label className="block mb-2">
              Color:
              <input
                type="text"
                name="color"
                value={editedItem?.color || selectedItem.color}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </label>
            <label className="block mb-4">
              Size:
              <input
                type="text"
                name="size"
                value={editedItem?.size || selectedItem.size}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </label>
            <label className="block mb-4">
              Actual price:
              <input
                type="text"
                name="actualPrice"
                value={editedItem?.actualPrice || selectedItem.actualPrice}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </label>
            <label className="block mb-4">
              Applied price:
              <input
                type="text"
                name="appliedPrice"
                value={editedItem?.appliedPrice || selectedItem.appliedPrice}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </label>
            {/* Add more editable fields as needed */}
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
                onClick={handleSave}
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
        )}
      </div>
    </div>
  );
}

export default EditModal;
