import { getCurrentWindow } from "@tauri-apps/api/window";
import { useState, useEffect, useRef } from "react";
import { Menu, Minus, Square, X } from "lucide-react";
import "@styles/TitleBar.css";

const appWindow = getCurrentWindow();

const TitleBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className="titlebar">
      <div className="titlebar-left">
        <div className="menu-container" ref={menuRef}>
          <button
            className="menu-trigger"
            onClick={() => setShowMenu(!showMenu)}
            title="Menu"
          >
            <Menu size={26} strokeWidth={2.5} />
          </button>

          {/* Menu Dropdown */}
          {showMenu && (
            <div className="dropdown-menu">
              <div className="menu-item" onClick={() => setShowMenu(false)}>
                <span>SFTP</span>
                <kbd>Ctrl+2</kbd>
              </div>
              <div className="menu-item " onClick={() => setShowMenu(false)}>
                <span>Settings</span>
                <kbd>Ctrl+,</kbd>
              </div>
              <div className="menu-divider" />
              <div className="menu-item" onClick={() => setShowMenu(false)}>
                <span>New Local Terminal</span>
              </div>
              <div className="menu-item" onClick={() => setShowMenu(false)}>
                <span>Edit</span>
                <span className="arrow">▶</span>
              </div>
              <div className="menu-item" onClick={() => setShowMenu(false)}>
                <span>View</span>
                <span className="arrow">▶</span>
              </div>
              <div className="menu-divider" />
              <div
                className="menu-item active"
                onClick={() => appWindow.close()}
              >
                <span>Exit</span>
              </div>
            </div>
          )}
        </div>
        <span className="app-title">RustTerminal</span>
      </div>

      <div data-tauri-drag-region className="titlebar-drag-region"></div>

      <div className="titlebar-controls">
        <button
          className="control-btn"
          onClick={() => appWindow.minimize()}
          title="Minimize"
        >
          <Minus size={24} />
        </button>
        <button
          className="control-btn"
          onClick={() => appWindow.toggleMaximize()}
          title="Maximize"
        >
          <Square size={24} />
        </button>
        <button
          className="control-btn close-btn"
          onClick={() => appWindow.close()}
          title="Close"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
