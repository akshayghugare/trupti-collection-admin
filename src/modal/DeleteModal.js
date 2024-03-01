import React from 'react';

const DeleteModal = ({ isOpen, onClose, selectedItem,handleDeleteProduct }) => {
  return (
    <div className={`modal fixed inset-0 ${isOpen ? 'block' : 'hidden'}`}>
      {/* Modal overlay */}
      <div className="modal-overlay" onClick={onClose}></div>

      {/* Modal content */}
      <div className="modal-container bg-white w-full max-w-md mx-auto p-8 mt-20 rounded shadow-lg">
        {selectedItem && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Delete Item</h2>
            {/* Display item details in the modal */}
            <p className="mb-2">Name: {selectedItem.name}</p>
            <p className="mb-4">Size: {selectedItem.size}</p>
            {/* Add more details as needed */}
            <div className="flex justify-end">
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 mr-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                onClick={() => {
                  handleDeleteProduct()
                }}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DeleteModal;
