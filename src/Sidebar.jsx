import { useState } from 'react';

function Sidebar() {
  const [isSidebarClosed, setIsSidebarClosed] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} flex`}>
      {/* Sidebar */}
      <nav className={`fixed top-0 left-0 h-full ${isSidebarClosed ? 'w-20' : 'w-64'} bg-gray-800 p-4 transition-all duration-300`}>
        <header className="relative">
          <div className="flex items-center space-x-4">
            <span className="w-10 h-10 rounded-full bg-gray-700 flex justify-center items-center">
              <img className="w-8 h-8 rounded-full" src="https://drive.google.com/uc?export=view&id=1ETZYgPpWbbBtpJnhi42_IR3vOwSOpR4z" alt="logo" />
            </span>
            {!isSidebarClosed && (
              <div className="text-white">
                <span className="text-xl font-semibold">Stella Army</span>
                <span className="text-sm">Web developer</span>
              </div>
            )}
          </div>
          <button
            onClick={toggleSidebar}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
          >
            <i className={`bx ${isSidebarClosed ? 'bx-chevron-right' : 'bx-chevron-left'}`}></i>
          </button>
        </header>

        <div className="mt-6">
          {/* Search Box */}
          <div className="flex items-center bg-gray-700 rounded-full p-2">
            <i className="bx bx-search text-white"></i>
            <input type="text" placeholder="Search..." className="bg-transparent text-white outline-none ml-2" />
          </div>

          <ul className="mt-6 space-y-4">
            <li>
              <a href="#" className="flex items-center space-x-4 text-white hover:bg-gray-600 p-2 rounded-md">
                <i className="bx bx-home-alt"></i>
                {!isSidebarClosed && <span>Dashboard</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-4 text-white hover:bg-gray-600 p-2 rounded-md">
                <i className="bx bx-bar-chart-alt-2"></i>
                {!isSidebarClosed && <span>Revenue</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-4 text-white hover:bg-gray-600 p-2 rounded-md">
                <i className="bx bx-bell"></i>
                {!isSidebarClosed && <span>Notifications</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-4 text-white hover:bg-gray-600 p-2 rounded-md">
                <i className="bx bx-pie-chart-alt"></i>
                {!isSidebarClosed && <span>Analytics</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-4 text-white hover:bg-gray-600 p-2 rounded-md">
                <i className="bx bx-heart"></i>
                {!isSidebarClosed && <span>Likes</span>}
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-4 text-white hover:bg-gray-600 p-2 rounded-md">
                <i className="bx bx-wallet"></i>
                {!isSidebarClosed && <span>Wallets</span>}
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-auto">
          <ul>
            <li>
              <a href="#" className="flex items-center space-x-4 text-white hover:bg-gray-600 p-2 rounded-md">
                <i className="bx bx-log-out"></i>
                {!isSidebarClosed && <span>Logout</span>}
              </a>
            </li>
            <li className="mt-4 flex items-center justify-between p-2 bg-gray-700 rounded-full">
              <div className="flex items-center space-x-2">
                <i className="bx bx-moon text-white"></i>
                <i className="bx bx-sun text-white hidden"></i>
                <span className="text-white">Dark mode</span>
              </div>
              <div
                onClick={toggleDarkMode}
                className="w-10 h-5 rounded-full bg-gray-500 relative cursor-pointer"
              >
                <div
                  className={`absolute top-0 left-0 h-5 w-5 bg-gray-900 rounded-full transition-all ${isDarkMode ? 'transform translate-x-5' : ''}`}
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <section className={`ml-${isSidebarClosed ? '20' : '64'} flex-1 bg-gray-100 p-6`}>
        <div className="text-2xl font-semibold">Dashboard Sidebar</div>
      </section>
    </div>
  );
}

export default Sidebar;
