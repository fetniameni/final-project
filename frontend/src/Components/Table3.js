import React from 'react'
const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";

const Rows = () => {
    
     };
function Table3({data}) {
    
  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
    <table className="w-full table-auto border border-border divide-y divide-border">
      <thead>
        <tr className="bg-dryGray">
          <th scope="col" className={`${Head}`}>
            Image
          </th>
          <th scope="col" className={`${Head}`}>
            Name
          </th>
          <th scope="col" className={`${Head}`} >
            Category
          </th>
          <th scope="col" className={`${Head}`}>
            Language
          </th>
          <th scope="col" className={`${Head}`}>
            Year
          </th>
          <th scope="col" className={`${Head}`}>
            Hours
          </th>
          <th scope="col" className={`${Head}`} >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-main divide-y divide-gray-800">
         {data?.map((favorites) => Rows(favorites))}
         {console.log(data)}
       </tbody>
    </table>
  </div>
  )
}

export default Table3