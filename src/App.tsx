import "./App.css";
import TitleBar from "@components/TitleBar";
import { useTabStore } from "@store/useTabStore";
import HomePage from "@features/Home/HomePage";

function App() {
  const { tabs, activeTabId } = useTabStore();
  return (
    <div>
      <TitleBar />
      <main className="container">
        <div className="flex-1 relative">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={tab.id === activeTabId ? "block h-full" : "hidden"}
            >
              {tab.type === "home" ? (
                <HomePage />
              ) : (
                // <SSHTerminal sessionId={tab.id} />
                <div>Terminal</div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
