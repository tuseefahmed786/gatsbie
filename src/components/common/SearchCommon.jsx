import React from 'react'
import search from '../../assets/search.png'
const SearchCommon = () => {
    return (
        <div className="relative">
            <img className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" src={search} alt="Search Icon" />
            <input
                type="text"
                placeholder="Search groups, people, etc."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#E9EBED] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}

export default SearchCommon
