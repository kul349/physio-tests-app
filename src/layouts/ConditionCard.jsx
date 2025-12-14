import React from 'react'

function ConditionCard({icon,title,description}) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-white text-center hover:bg-silver transition duration-300">
      <div
        className="text-4xl text-teal-600 mb-3 "
        role="img"
        aria-label="icon"
      >
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-dim-gray-4">{title}</h4>
      <p className="text-dim-gray-4 text-sm">{description}</p>
    </div>
  );
}

export default ConditionCard