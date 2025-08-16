import { ChevronLeft, Clock, Compass, Film, Home, Play, Settings, ThumbsUp } from 'lucide-react';


export default function Sidebar({ isOpen = true}) {


  const sections = [
    { name: "Home", icon: <Home className="w-5 h-5" /> },
    { name: "Explore", icon: <Compass className="w-5 h-5" /> },
    { name: "Shorts", icon: <Film className="w-5 h-5" /> },
    { name: "Subscriptions", icon: <Play className="w-5 h-5" /> },
  ];

  return (
    <aside id='sidebar'
      className={`transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      } bg-white border-r h-[calc(100vh-64px)] sticky top-16`}
    >
      <div className="p-4 space-y-3">
        {/* <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-500 rounded-sm"></div>
            {isOpen && <span className="font-semibold">Browse</span>}
          </div>
          {isOpen && <ChevronLeft className="w-4 h-4" />}
        </div> */}

        <nav className="space-y-1">
          {sections.map((s) => (
            <div
              key={s.name}
              className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer"
            >
              {s.icon}
              {isOpen && <span className="text-sm">{s.name}</span>}
            </div>
          ))}
        </nav>

        <hr />

        <nav className="space-y-1">
          <div className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <Clock className="w-5 h-5" />
            {isOpen && <span className="text-sm">History</span>}
          </div>
          <div className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <ThumbsUp className="w-5 h-5" />
            {isOpen && <span className="text-sm">Liked</span>}
          </div>
          <div className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <Settings className="w-5 h-5" />
            {isOpen && <span className="text-sm">Settings</span>}
          </div>
        </nav>
      </div>
    </aside>
  );
}
