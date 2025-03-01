export default function CreateEvent() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-6">
        <header className="w-full flex justify-between items-center max-w-5xl">
          <h1 className="text-2xl font-bold">Event <span className="text-purple-600">Hive</span></h1>
          <div>
            <button className="mr-4 text-gray-700">Login</button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md">Signup</button>
          </div>
        </header>
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 mt-6">
          <h2 className="text-2xl font-bold text-center mb-6">Create Event</h2>
          <label className="block text-lg font-semibold">Event Title</label>
          <input type="text" placeholder="Event Title" className="w-full p-3 border rounded-md mb-4" />
          <label className="block text-lg font-semibold">Event Venue</label>
          <input type="text" placeholder="Event Venue" className="w-full p-3 border rounded-md mb-4" />
          <div className="space-y-4">
            <label className="block text-lg font-semibold">Start Time</label>
            <div className="grid grid-cols-2 gap-4">
              <input type="time" className="w-full p-3 border rounded-md" placeholder="Start Time" />
              <input type="time" className="w-full p-3 border rounded-md" placeholder="End Time" />
            </div>
            <label className="block text-lg font-semibold">Start Date</label>
            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="w-full p-3 border rounded-md" placeholder="Start Date" />
              <input type="date" className="w-full p-3 border rounded-md" placeholder="End Date" />
            </div>
            <h2 className="text-xl font-semibold mt-6">Event Description</h2>
            <div className="w-full h-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-600">
              Upload Event Image
            </div>
            <textarea placeholder="Type here..." className="w-full p-3 border rounded-md h-24"></textarea>
            <button className="w-full bg-purple-600 text-white py-3 rounded-md font-bold hover:bg-purple-700">
              Create event
            </button>
          </div>
        </div>
      </div>
    );
  }
  