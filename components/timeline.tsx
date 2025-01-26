export default function timeline() {

    const scheduleItems = [
      { id: 1, location: "DTU", time: "10:00", status: "completed" },
      { id: 2, location: "Rithala", time: "10:15", status: "completed" },
      { id: 3, location: "Shalimar Bagh", time: "10:30", status: "completed" },
      { id: 4, location: "Ashok Vihar", time: "10:45", status: "current" },
      { id: 5, location: "Karol Bagh", time: "11:00", status: "upcoming" },
      { id: 6, location: "CP", time: "11:30", status: "upcoming" }
    ];
  
    return (
      <div className="flex h-screen w-screen mx-4">
        <ol className="overflow-hidden space-y-8">
          {scheduleItems.map((item, index) => (
            <li
              key={item.id}
              className={`relative flex-1 after:content-[''] after:w-0.5 after:h-full ${
                index !== scheduleItems.length - 1
                  ? item.status === 'completed'
                    ? 'after:bg-indigo-600'
                    : item.status === 'current'
                    ? 'after:bg-gray-400'
                    : 'after:bg-gray-400'
                  : ''
              } after:inline-block after:absolute ${
                index !== scheduleItems.length - 1 ? 'after:-bottom-11' : ''
              } after:left-4 lg:after:left-5`}
            >
              <a className="flex items-center font-medium w-full">
                <span
                  className={`w-8 h-8 ${
                    item.status === 'completed'
                      ? 'bg-indigo-600 text-white'
                      : item.status === 'current'
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'bg-gray-50 text-gray-900'
                  } border-2 ${
                    item.status === 'completed'
                      ? 'border-transparent'
                      : item.status === 'current'
                      ? 'border-indigo-600'
                      : 'border-gray-400'
                  } rounded-full flex justify-center items-center mr-3 text-sm lg:w-10 lg:h-10`}
                >
                  {item.status === 'completed' ? (
                    <svg
                      className="w-5 h-5 stroke-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12L9.28722 16.2923C9.62045 16.6259 9.78706 16.7927 9.99421 16.7928C10.2014 16.7929 10.3681 16.6262 10.7016 16.2929L20 7"
                        stroke="stroke-current"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </span>
                <div className="block">
                  <h4 className={`text-lg ${item.status === 'completed' ? 'text-indigo-600' : 'text-gray-900'}`}>
                    {item.location}
                  </h4>
                  <span className="text-sm">{item.time}</span>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    );
  }
  


