
import { HomeIcon, ChartBarIcon, UserGroupIcon, ChatBubbleLeftRightIcon, BriefcaseIcon, Cog6ToothIcon, ArrowLeftOnRectangleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import './App.css';

function App() {
  const mainNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <HomeIcon className="w-6 h-6" /> },
    { id: 'analytics', label: 'Analytic & Report', icon: <ChartBarIcon className="w-6 h-6" /> },
    { 
      id: 'account', 
      label: 'Account management', 
      icon: <UserGroupIcon className="w-6 h-6" />,
      subItems: ['Clients', 'Artisans', 'Professionals']
    },
    { id: 'message', label: 'Message', icon: <ChatBubbleLeftRightIcon className="w-6 h-6" /> },
    { id: 'job', label: 'Job oversight', icon: <BriefcaseIcon className="w-6 h-6" /> },
  ];

  const bottomNavItems = [
    { id: 'settings', label: 'Settings', icon: <Cog6ToothIcon className="w-6 h-6" /> },
    { id: 'logout', label: 'Logout', icon: <ArrowLeftOnRectangleIcon className="w-6 h-6" /> },
  ];

  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="nav-section">
          {/* Main Navigation */}
          <nav className="nav-menu">
            <ul>
              {mainNavItems.map((item) => (
                <li 
                  key={item.id}
                  className={`nav-item ${item.id === 'dashboard' ? 'active' : ''}`}
                >
                  <a href="#" className="nav-link">
                    <span className="icon">{item.icon}</span>
                    <span className="label">{item.label}</span>
                  </a>
                  {item.subItems && (
                    <ul className="submenu">
                      {item.subItems.map((subItem, index) => (
                        <li key={index} className="submenu-item">
                          <a href="#" className="submenu-link">
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Navigation */}
        <div className="nav-section bottom">
          <nav className="nav-menu">
            <ul>
              {bottomNavItems.map((item) => (
                <li 
                  key={item.id}
                  className="nav-item"
                >
                  <a href="#" className="nav-link">
                    <span className="icon">{item.icon}</span>
                    <span className="label">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <header className="top-bar">
          <div className="search-container">
            <MagnifyingGlassIcon className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <button className="sort-button">Sort by</button>
        </header>
        {/* Content will go here */}
      </main>
    </div>
  );
}

export default App;
