
function RightSide() {
  return (
     <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Add New Event
      </h2>

      {/* Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          placeholder="Enter event title"
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          placeholder="Enter event description"
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Location</label>
        <input
          type="text"
          placeholder="Enter event location"
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Date */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="date"
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Add Event
      </button>
    </div>
  );
}
export default RightSide;