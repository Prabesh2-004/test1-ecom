import { Bell, Menu, Search, User, Video } from 'lucide-react';

const Header = ({ onToggleSidebar }) => {

  return (
    <header className="flex items-center gap-4 px-4 py-3 bg-white shadow-sm sticky top-0 z-20">
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-md hover:bg-gray-100"
        aria-label="Toggle sidebar"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="flex items-center gap-3">
        <svg className="w-8 h-8 text-red-600 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        <div className="font-bold text-xl">YouTube</div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-2xl">
          <div className="flex items-center border rounded-full overflow-hidden">
            <input
              className="flex-1 px-4 py-2 outline-none"
              placeholder="Search"
            />
            <button className="px-4 py-2 border-l">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Video className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <User className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;

