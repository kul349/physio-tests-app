import React from 'react'

function ConditionCard({icon,title,description}) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-white text-center hover:bg-transition  hover:bg-silver-1 duration-300 group">
      <div
        className="text-4xl text-teal-600 mb-3 group-hover:text-white"
        role="img"
        aria-label="icon"
      >
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-dim-gray-4 group-hover:text-white">
        {title}
      </h4>
      <p className="text-dim-gray-4 text-sm group-hover:text-white">
        {description}
      </p>
    </div>
  );
}

export default ConditionCard