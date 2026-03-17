// import React from "react";
// import { Link } from "react-router-dom";

// function Card({ blog }) {
//   return (
//     <Link to={`/blog/${blog._id}`}>
//       <div className="flex px-3 py-3">
//         <div className="max-w-sm rounded overflow-hidden shadow-lg">
//           <img
//             className="w-full"
//             src={blog.image}
//             alt="Sunset in the mountains"
//           />
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">{blog.title}</div>
//             <div className="font-semibold text-xl mb-1">{blog.subtitle}</div>
//             <p className="text-gray-700 text-base">{blog.description}</p>
//           </div>
//           <div className="px-6 py-4">
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
//               #WWE
//             </span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
//               #Wrestling
//             </span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
//               #Superstar
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default Card;

import React from "react";
import { Link } from "react-router-dom";

function Card({ blog }) {
  return (
    <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      
      {/* Image */}
      <img
        className="w-full h-48 object-contain"
        src={blog.image}
        alt={blog.title}
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        
        <h2 className="font-bold text-lg mb-1">{blog.title}</h2>
        <h3 className="text-gray-600 text-sm mb-2">{blog.subtitle}</h3>

        {/* Description limited */}
        <p className="text-gray-700 text-sm line-clamp-3">
          {blog.description}
        </p>

        {/* See More */}
        <Link
          to={`/blog/${blog._id}`}
          className="text-blue-600 text-sm mt-2 hover:underline"
        >
          See more →
        </Link>

        {/* Tags */}
        <div className="mt-auto pt-3 flex flex-wrap gap-2">
          <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">
            #WWE
          </span>
          <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">
            #Wrestling
          </span>
          <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">
            #Superstar
          </span>
        </div>

      </div>
    </div>
  );
}

export default Card;