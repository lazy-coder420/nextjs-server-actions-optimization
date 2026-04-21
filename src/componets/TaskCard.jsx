const TaskCard = ({ task }) => {
  const { title, description, status, priority, dueDate } = task;

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border hover:shadow-xl transition duration-300">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600">
          {priority}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2">
        {description}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">

        {/* Status */}
        <span className={`text-xs px-2 py-1 rounded-full
          ${status === "completed" && "bg-green-100 text-green-600"}
          ${status === "pending" && "bg-yellow-100 text-yellow-600"}
          ${status === "in-progress" && "bg-purple-100 text-purple-600"}
        `}>
          {status}
        </span>

        {/* Date */}
        <span className="text-xs text-gray-400">
          {dueDate}
        </span>

      </div>
    </div>
  );
};

export default TaskCard;