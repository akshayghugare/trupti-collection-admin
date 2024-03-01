import React from 'react';

const ViewModal = ({ isOpen, onClose, selectedItem }) => {
  return (
    <div className={`modal fixed inset-0 ${isOpen ? 'block' : 'hidden'}`}>
      {/* Modal overlay */}
      <div className="modal-overlay" onClick={onClose}></div>

      {/* Modal content */}
      <div className="modal-container bg-white w-full max-w-md mx-auto p-8 mt-20 rounded shadow-lg">
        {selectedItem && (
          <div>
            <h2 className="text-2xl font-bold mb-4">View Item</h2>
            {/* Display item details in the modal */}
            <p className="mb-2">Name: {selectedItem.name}</p>
            <p className="mb-4">Size: {selectedItem.size}</p>
            <p className="mb-4">Color: {selectedItem.color}</p>
            <p className="mb-4">Actual Price: {selectedItem.actualPrice}</p>
            <p className="mb-4">Applied Price: {selectedItem.appliedPrice}</p>
            {/* Add more details as needed */}
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewModal;
