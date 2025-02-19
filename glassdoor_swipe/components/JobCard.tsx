export default function JobCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full h-full">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Software Engineer</h2>
          <p className="text-gray-600 dark:text-gray-300">Company Name</p>
        </div>
        
        <div className="flex-grow">
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Salary</h3>
            <p className="text-gray-600 dark:text-gray-300">$80,000 - $120,000</p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Location</h3>
            <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Description</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We are looking for a talented Software Engineer to join our team...
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-center space-x-4">
          <button className="p-3 bg-red-500 rounded-full">
            <span className="sr-only">Decline</span>
            ❌
          </button>
          <button className="p-3 bg-green-500 rounded-full">
            <span className="sr-only">Accept</span>
            ✅
          </button>
        </div>
      </div>
    </div>
  );
}
