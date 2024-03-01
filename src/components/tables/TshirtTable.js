import React from 'react';
import { RiEdit2Fill,RiDeleteBin2Line,RiEyeLine} from 'react-icons/ri';

const TshirtTable = ({ data, onEdit, onDelete, onView }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Size</th>
          <th className="border px-4 py-2">Color</th>
          <th className="border px-4 py-2">Actual Price</th>
          <th className="border px-4 py-2">Applied Price</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">{item.size}</td>
            <td className="border px-4 py-2">{item.color}</td>
            <td className="border px-4 py-2">{item.actualPrice}</td>
            <td className="border px-4 py-2">{item.appliedPrice}</td>
            <td className="border px-4 py-2">
              <button className="mr-2" onClick={() => onEdit(item.id)}><RiEdit2Fill/></button>
              <button className="mr-2" onClick={() => onDelete(item.id)}><RiDeleteBin2Line/></button>
              <button onClick={() => onView(item.id)}><RiEyeLine/></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TshirtTable;
