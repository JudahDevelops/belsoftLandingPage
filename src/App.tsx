import { HomeIcon, ChartBarIcon, UserGroupIcon, ChatBubbleLeftRightIcon, BriefcaseIcon, Cog6ToothIcon, ArrowLeftOnRectangleIcon, MagnifyingGlassIcon, ChevronDownIcon, MapPinIcon, BookmarkIcon, HeartIcon } from '@heroicons/react/24/outline';
import './App.css';
import RevenueChart from './components/RevenueChart';

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

  const jobData = [
    {
      posterName: 'Mack Zuckerberg',
      posterAvatar: 'https://i.imgur.com/5zV1sA8.jpeg',
      jobTitle: 'Install Security Cameras for TechHub',
      budget: '4000',
      description: 'A growing tech company needs a technician to install 6 CCTV cameras in their office space. The job requires running cables through walls and configuring the security system.',
      location: 'Lagos, Nigeria',
    },
    {
      posterName: 'Mack Zuckerberg',
      posterAvatar: 'https://i.imgur.com/5zV1sA8.jpeg',
      jobTitle: 'Install Security Cameras for TechHub',
      budget: '4000',
      description: 'A growing tech company needs a technician to install 6 CCTV cameras in their office space. The job requires running cables through walls and configuring the security system.',
      location: 'Lagos, Nigeria',
    }
    // Add more job objects here to populate the list
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
        <div className="overview-container">
          <h1 className="overview-title">Overview</h1>
          <div className="dashboard-grid">
            <div className="card revenue-overview">
              <div className="card-header">
                <h2>Revenue Overview</h2>
                <div className="dropdown-wrapper">
                  <select className="time-dropdown">
                    <option>For every month</option>
                    <option>For every week</option>
                    <option>For every year</option>
                  </select>
                  <ChevronDownIcon className="dropdown-icon" />
                </div>
              </div>
              <RevenueChart />
            </div>
            <div className="card job-oversight">
              <h2>Job Oversight</h2>
              <div className="job-oversight-controls">
                <div className="search-wrapper-job">
                  <MagnifyingGlassIcon className="search-icon" />
                  <input type="text" placeholder="Search..." />
                </div>
                <button className="filter-button">
                  <span>Filter</span>
                </button>
                <div className="dropdown-wrapper">
                  <select className="job-filter-dropdown">
                    <option>Date</option>
                    <option>Last 1 week</option>
                    <option>Last 2 weeks</option>
                    <option>Last month</option>
                    <option>Last 5 months</option>
                  </select>
                  <ChevronDownIcon className="dropdown-icon" />
                </div>
                <div className="dropdown-wrapper">
                  <select className="job-filter-dropdown">
                    <option>Jobs</option>
                    <option>Technological Jobs</option>
                    <option>Business Jobs</option>
                    <option>Handy Jobs</option>
                    <option>Scientific Jobs</option>
                  </select>
                  <ChevronDownIcon className="dropdown-icon" />
                </div>
              </div>
              <div className="job-list-container">
                {jobData.map((job, index) => (
                  <div className="job-card" key={index}>
                    <div className="job-card-header">
                      <div className="avatar-container">
                        <img src={job.posterAvatar} alt={`${job.posterName} avatar`} className="poster-avatar" />
                        <span className="online-dot"></span>
                      </div>
                      <span className="poster-name">{job.posterName}</span>
                    </div>
                    <h3 className="job-title">{job.jobTitle}</h3>
                    <p className="job-budget">Budget: N{job.budget}</p>
                    <p className="job-description">{job.description}</p>
                    <a href="#" className="view-more-link">View More...</a>
                    <div className="job-card-footer">
                      <div className="location-tag">
                        <MapPinIcon className="footer-icon" />
                        <span>{job.location}</span>
                      </div>
                      <div className="action-icons">
                        <BookmarkIcon className="footer-icon" />
                        <HeartIcon className="footer-icon" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card performance">
              <h2>Performance</h2>
              {/* Placeholder for performance content */}
            </div>
            <div className="card account-management">
              <h2>Account Management</h2>
              {/* Placeholder for account management content */}
            </div>
            <div className="card popular-task-specialist">
              <h2>Popular Task Specialist</h2>
              {/* Placeholder for popular task specialist content */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
