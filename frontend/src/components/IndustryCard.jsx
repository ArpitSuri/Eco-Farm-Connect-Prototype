import React from 'react'

const IndustryCard = ({item}) => {
  return (
    <div >
      <a
  href="#"
  className="relative block x   overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    className="absolute    inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
        {item.industryname}
      </h3>
      <p className="mt-1 text-xs font-medium text-gray-600">Email : {item.email}</p>

      <p className="mt-1 text-xs font-medium text-gray-600">GST : {item.gst_no}</p>
      <p className="mt-1 text-xs font-medium text-gray-600">Phone : {item.phone_no}</p>
    </div>

    
  </div>

  <div className="mt-4">
    <p className="text-sm text-pretty text-gray-500">
      <a href={item.website}Website ></a>
    </p>
  </div>

</a>
    </div>
  )
}

export default IndustryCard
