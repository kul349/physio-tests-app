const ConditionCard = ({ Icon, title, description }) => {
  return (
    <div className="group relative bg-white p-8 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-0 group-hover:opacity-10 transition-opacity bg-emerald-500" />

      <div className="inline-flex items-center justify-center p-3 rounded-xl mb-6 bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
        {Icon && <Icon className="w-8 h-8" />}
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed text-sm">{description}</p>

      <div className="mt-6 flex items-center text-sm font-semibold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default ConditionCard;
