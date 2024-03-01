import React, { useState } from 'react';
import EditModal from '../../../modal/EditModal';
import DeleteModal from '../../../modal/DeleteModal';
import ViewModal from '../../../modal/ViewModal';
import TshirtTable from '../../../components/tables/TshirtTable';
import AddProductModal from '../../../modal/AddProductModal';

const dummyData = [
  { id: 1, name: 'Blue Casual', size: 'M', color: 'Blue', actualPrice: 20, appliedPrice: 15 },
  { id: 2, name: 'Red Casual', size: 'L', color: 'Red', actualPrice: 25, appliedPrice: 20 },
  { id: 3, name: 'Green Casual', size: 'S', color: 'Green', actualPrice: 18, appliedPrice: 15 },
  { id: 4, name: 'Black Casual', size: 'XL', color: 'Black', actualPrice: 30, appliedPrice: 25 },
  { id: 5, name: 'White Casual', size: 'S', color: 'White', actualPrice: 22, appliedPrice: 18 },
  { id: 6, name: 'Yellow Casual', size: 'M', color: 'Yellow', actualPrice: 28, appliedPrice: 25 },
  { id: 7, name: 'Pink Casual', size: 'L', color: 'Pink', actualPrice: 24, appliedPrice: 20 },
  { id: 8, name: 'Purple Casual', size: 'XL', color: 'Purple', actualPrice: 35, appliedPrice: 30 },
  { id: 9, name: 'Gray Casual', size: 'M', color: 'Gray', actualPrice: 26, appliedPrice: 22 },
  { id: 10, name: 'Orange Casual', size: 'S', color: 'Orange', actualPrice: 32, appliedPrice: 28 },
  { id: 11, name: 'Cyan Casual', size: 'M', color: 'Cyan', actualPrice: 21, appliedPrice: 17 },
  { id: 12, name: 'Maroon Casual', size: 'L', color: 'Maroon', actualPrice: 27, appliedPrice: 22 },
  { id: 13, name: 'Navy Casual', size: 'S', color: 'Navy', actualPrice: 29, appliedPrice: 25 },
  { id: 14, name: 'Olive Casual', size: 'XL', color: 'Olive', actualPrice: 31, appliedPrice: 26 },
  { id: 15, name: 'Teal Casual', size: 'S', color: 'Teal', actualPrice: 23, appliedPrice: 19 },
  { id: 16, name: 'Lime Casual', size: 'M', color: 'Lime', actualPrice: 19, appliedPrice: 16 },
  { id: 17, name: 'Coral Casual', size: 'L', color: 'Coral', actualPrice: 33, appliedPrice: 27 },
  { id: 18, name: 'Aqua Casual', size: 'XL', color: 'Aqua', actualPrice: 37, appliedPrice: 32 },
  { id: 19, name: 'Beige Casual', size: 'M', color: 'Beige', actualPrice: 34, appliedPrice: 30 },
  { id: 20, name: 'Ivory Casual', size: 'S', color: 'Ivory', actualPrice: 36, appliedPrice: 31 },
];


const CasualShirtPage = () => {
  const [data, setData] = useState(dummyData);
  const [product, setProduct] = useState({
    name: '',
    size: '',
    price: '',
    profileImage: null,
  });

  const [filterName, setFilterName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [editedItem, setEditedItem] = useState(selectedItem);
  const itemsPerPage = 10;

  // Filter data by name
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(filterName.toLowerCase()) ||
    item.size.toLowerCase().includes(filterName.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const openEditModal = (id) => {
    const item = data.find(item => item.id === id);
    console.log("ddd",item)
    if (item) {
      setSelectedItem(item);
      setEditModalOpen(true);
    }
  };

  // Utility function to open the Delete modal
  const openDeleteModal = (id) => {
    const item = data.find(item => item.id === id);
    if (item) {
      setSelectedItem(item);
      setDeleteModalOpen(true);
    }
  };

  // Utility function to open the View modal
  const openViewModal = (id) => {
    const item = data.find(item => item.id === id);
    if (item) {
      setSelectedItem(item);
      setViewModalOpen(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const handleSave = () => {
    console.log("Edited Item:", editedItem);
    setEditModalOpen(false)
    
  };

  const handleDeleteProduct =()=>{
    console.log("Delete Item:", selectedItem);
    setDeleteModalOpen(false)
  }

  const handleAddProduct = () => {
    // Implement the logic to save the product
    // You may want to send the product data to an API or update the state in your parent component
    // For simplicity, we'll just log the product data to the console
    console.log("Product Data:", product);

    setAddModalOpen(false)
  };


  return (
    <div className="container mx-auto p-4">
      <div className='flex justify-between items-center mb-4'>
      <input
        type="text"
        placeholder="Search by name"
        className="border rounded-md pl-4 py-2 "
        value={filterName}
        onChange={e => setFilterName(e.target.value)}
      />
      <button className='bg-blue-300 text-black px-10 py-2  rounded-md' onClick={()=>{setAddModalOpen(true)}}>Add</button>
      </div>

      <TshirtTable
        data={currentItems}
        onEdit={openEditModal}
        onDelete={openDeleteModal}
        onView={openViewModal}
      />

      <div className="flex justify-end mt-4">
        {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Modals */}
      {/* {isEditModalOpen? <EditModal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)} selectedItem={selectedItem}/> :""} */}
      
      <EditModal isOpen={isEditModalOpen} onClose={() => {setEditModalOpen(false);setSelectedItem(null)}} selectedItem={selectedItem} editedItem={editedItem} setEditedItem={setEditedItem} handleInputChange={handleInputChange} handleSave={handleSave}/>
      <DeleteModal isOpen={isDeleteModalOpen} onClose={() => {setDeleteModalOpen(false);setSelectedItem(null)}} selectedItem={selectedItem} handleDeleteProduct={handleDeleteProduct} />
      <ViewModal isOpen={isViewModalOpen} onClose={() => {setViewModalOpen(false);setSelectedItem(null)}} selectedItem={selectedItem} />
      <AddProductModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)} product={product} setProduct={setProduct} handleAddProduct={handleAddProduct}/>
    </div>
  );
}

export default CasualShirtPage;
