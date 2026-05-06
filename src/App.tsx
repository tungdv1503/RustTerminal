import React from "react";
import {
  Cloud,
  Server,
  Key,
  SplitSquareHorizontal,
  Braces,
  ServerCrash,
  Clock,
  Search,
  Bell,
  Minus,
  Square,
  X,
  Plus,
  Terminal,
  Usb,
  LayoutGrid,
  Tag,
  CalendarDays,
  FolderOpen,
  ChevronDown
} from "lucide-react";
import "./App.css";

const SidebarItem = ({ icon: Icon, label, isActive = false }) => {
  return (
    <div
      className={`flex items-center px-4 py-2 my-1 mx-2 rounded-lg cursor-pointer transition-colors ${
        isActive
          ? "bg-[#282b36] text-white font-medium"
          : "text-[#858b98] hover:bg-[#282b36] hover:text-white"
      }`}
    >
      <Icon className="w-5 h-5 mr-3" />
      <span className="text-sm">{label}</span>
    </div>
  );
};

const HostCard = ({ ip, user, type }) => {
  const isUbuntu = type === "ubuntu";
  return (
    <div className="flex items-center p-3 bg-[#282b36] rounded-xl cursor-pointer hover:bg-[#343746] transition-colors border border-transparent hover:border-[#3b4256]">
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-lg mr-3 shrink-0 ${
          isUbuntu ? "bg-[#ef5b25]" : "bg-[#007acc]"
        }`}
      >
        {isUbuntu ? (
          <Server className="w-6 h-6 text-white" />
        ) : (
          <Server className="w-6 h-6 text-white" />
        )}
      </div>
      <div className="flex flex-col overflow-hidden">
        <span className="text-sm font-semibold text-white truncate">{ip}</span>
        <span className="text-xs text-[#858b98] truncate">ssh, {user}</span>
      </div>
    </div>
  );
};

function App() {
  const hosts = [
    { ip: "192.168.133.29", user: "sysadmin", type: "ubuntu" },
    { ip: "192.168.133.61", user: "root", type: "ubuntu" },
    { ip: "192.168.5.254", user: "htsc", type: "ubuntu" },
    { ip: "192.168.5.225", user: "telnet, avatar", type: "ubuntu" },
    { ip: "192.168.160.215", user: "avatar", type: "server" },
    { ip: "10.10.3.40", user: "root_htsc", type: "ubuntu" },
    { ip: "192.168.160.238", user: "helios-demo", type: "ubuntu" },
    { ip: "123.25.24.155", user: "htsc", type: "ubuntu" },
    { ip: "10.10.3.40", user: "telnet, root_htsc", type: "server" },
    { ip: "192.168.160.154", user: "htsc", type: "server" },
    { ip: "192.168.133.19", user: "sysadmin", type: "server" },
    { ip: "192.168.133.61", user: "sysadmin", type: "server" },
    { ip: "103.141.141.69", user: "megacore", type: "server" },
    { ip: "103.141.141.70", user: "megacore", type: "server" },
    { ip: "192.168.227.27", user: "sysadmin", type: "server" },
  ];

  return (
    <div className="flex h-screen w-screen bg-[#1c1f2e] text-[#d2d4d9] font-sans selection:bg-[#ef5b25] selection:text-white">
      {/* Sidebar */}
      <div className="w-64 bg-[#1e2029] flex flex-col border-r border-[#2a2d3d] shrink-0 z-10">
        {/* Sidebar Header */}
        <div className="flex items-center px-4 h-14 border-b border-[#2a2d3d]">
          <div className="flex items-center justify-between bg-[#282b36] rounded px-3 py-1.5 w-full cursor-pointer hover:bg-[#343746]">
            <div className="flex items-center">
              <Cloud className="w-4 h-4 mr-2 text-[#858b98]" />
              <span className="text-sm font-medium text-white">Vault</span>
            </div>
            <ChevronDown className="w-4 h-4 text-[#858b98]" />
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="flex-1 py-4 overflow-y-auto">
          <SidebarItem icon={Server} label="Hosts" isActive />
          <SidebarItem icon={Key} label="Keychain" />
          <SidebarItem icon={SplitSquareHorizontal} label="Port Forwarding" />
          <SidebarItem icon={Braces} label="Snippets" />
          <SidebarItem icon={ServerCrash} label="Known Hosts" />
          <SidebarItem icon={Clock} label="Logs" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#1c1f2e]">
        {/* Top Header (Window controls & Search) */}
        <div className="h-14 flex items-center justify-between px-4 border-b border-[#2a2d3d] bg-[#1c1f2e] drag-region">
          {/* Top Left - Breadcrumbs / Folder */}
          <div className="flex items-center space-x-2 no-drag">
            <div className="flex items-center text-[#858b98] hover:text-white cursor-pointer px-2 py-1 rounded hover:bg-[#282b36]">
              <FolderOpen className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">SFTP</span>
            </div>
            <div className="flex items-center bg-[#282b36] text-white px-3 py-1 rounded-full cursor-pointer border border-[#ef5b25]">
              <div className="w-2 h-2 rounded-full bg-[#ef5b25] mr-2"></div>
              <span className="text-sm font-medium">192.168.133.61</span>
            </div>
            <div className="text-[#858b98] hover:text-white cursor-pointer p-1 rounded hover:bg-[#282b36]">
              <Plus className="w-4 h-4" />
            </div>
          </div>

          {/* Top Right - Window Controls */}
          <div className="flex items-center space-x-4 no-drag text-[#858b98]">
            <Bell className="w-4 h-4 hover:text-white cursor-pointer" />
            <div className="w-px h-4 bg-[#2a2d3d]"></div>
            <div className="flex items-center space-x-3">
              <Minus className="w-4 h-4 hover:text-white cursor-pointer" />
              <Square className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
              <X className="w-4 h-4 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col p-6 overflow-y-auto">
          {/* Search Bar Row */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-[#858b98]" />
              </div>
              <input
                type="text"
                placeholder="Find a host or ssh user@hostname..."
                className="w-full bg-[#282b36] text-white text-sm rounded-lg pl-10 pr-4 py-2.5 outline-none focus:ring-1 focus:ring-[#ef5b25] border border-transparent focus:border-[#ef5b25] transition-all placeholder-[#858b98]"
              />
            </div>
            <button className="bg-[#282b36] text-[#858b98] px-6 py-2.5 rounded-lg text-sm font-semibold uppercase cursor-not-allowed">
              Connect
            </button>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <button className="flex items-center bg-[#343746] hover:bg-[#3b4256] text-white px-3 py-1.5 rounded-md text-sm font-semibold transition-colors">
                <Server className="w-4 h-4 mr-2" />
                NEW HOST
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>
              <button className="flex items-center text-[#858b98] hover:text-white hover:bg-[#282b36] px-3 py-1.5 rounded-md text-sm font-semibold transition-colors">
                <Terminal className="w-4 h-4 mr-2" />
                TERMINAL
              </button>
              <button className="flex items-center text-[#858b98] hover:text-white hover:bg-[#282b36] px-3 py-1.5 rounded-md text-sm font-semibold transition-colors">
                <Usb className="w-4 h-4 mr-2" />
                SERIAL
              </button>
            </div>
            
            <div className="flex items-center space-x-2 text-[#858b98]">
              <div className="flex items-center cursor-pointer hover:text-white p-1.5 rounded hover:bg-[#282b36]">
                <LayoutGrid className="w-4 h-4" />
                <ChevronDown className="w-3 h-3 ml-1" />
              </div>
              <div className="flex items-center cursor-pointer hover:text-white p-1.5 rounded hover:bg-[#282b36]">
                <Tag className="w-4 h-4" />
                <ChevronDown className="w-3 h-3 ml-1" />
              </div>
              <div className="flex items-center cursor-pointer hover:text-white p-1.5 rounded hover:bg-[#282b36]">
                <CalendarDays className="w-4 h-4" />
                <ChevronDown className="w-3 h-3 ml-1" />
              </div>
            </div>
          </div>

          {/* Hosts Grid */}
          <div>
            <h2 className="text-white text-lg font-bold mb-4">Hosts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {hosts.map((host, index) => (
                <HostCard key={index} {...host} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
