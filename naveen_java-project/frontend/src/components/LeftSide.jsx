
function LeftSide() {
  return (
     <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Event List
      </h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search events..."
        className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left text-sm text-gray-600">
            <th className="p-2">ID</th>
            <th className="p-2">Title</th>
            <th className="p-2">Location</th>
            <th className="p-2">Date</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          {[1, 2, 3].map((id) => (
            <tr key={id} className="border-t">
              <td className="p-2">{id}</td>
              <td className="p-2">Sample Event</td>
              <td className="p-2">New York</td>
              <td className="p-2">2025-01-10</td>
              <td className="p-2 space-x-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                  Edit
                </button>
                <button className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6 text-sm text-gray-600">
        <button className="hover:text-blue-600">‹ Prev</button>
        <span className="font-semibold text-blue-600">1</span>
        <button className="hover:text-blue-600">Next ›</button>
      </div>
    </div>
  );
}
export default LeftSide;