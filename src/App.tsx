import { useState } from 'react';
import { HomeIcon, ChartBarIcon, UserGroupIcon, ChatBubbleLeftRightIcon, BriefcaseIcon, Cog6ToothIcon, ArrowLeftOnRectangleIcon, MagnifyingGlassIcon, ChevronDownIcon, MapPinIcon, BookmarkIcon, HeartIcon, UserCircleIcon, CheckCircleIcon, XCircleIcon, StarIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon, Bars3Icon } from '@heroicons/react/24/outline';
import './App.css';
import RevenueChart from './components/RevenueChart';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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

  const accountData = [
    { userId: '#CCCCS45', name: 'Patrick James', avatar: 'https://i.imgur.com/5zV1sA8.jpeg', userStatus: 'Professional', status: 'Deactivated' },
    { userId: '#CCCCS45', name: 'Patrick James', avatar: 'https://i.imgur.com/5zV1sA8.jpeg', userStatus: 'Professional', status: 'Activated' },
    { userId: '#CCCCS45', name: 'Patrick James', avatar: 'https://i.imgur.com/5zV1sA8.jpeg', userStatus: 'Professional', status: 'Deactivated' },
    { userId: '#CCCCS45', name: 'Patrick James', avatar: 'https://i.imgur.com/5zV1sA8.jpeg', userStatus: 'Professional', status: 'Activated' },
  ];

  const unresolvedDisputesData = [
    { name: 'Jame Markus', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', issue: 'My task specia...', time: 'Jan 14 2025' },
    { name: 'Ngozie Peter', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', issue: 'My task specia...', time: 'Jan 14 2025' },
  ];

  return (
    <div className="app">
      {isSidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
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
          <button className="menu-button" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            <Bars3Icon className="w-6 h-6" />
          </button>
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
            <div className="card account-management">
              <div className="account-management-header">
                <h2>Account Management</h2>
                <a href="#" className="view-more-link-am">View More &raquo;</a>
              </div>
              <table className="account-management-table">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Name of user</th>
                    <th>User status</th>
                    <th>Status</th>
                    <th>Admin control</th>
                  </tr>
                </thead>
                <tbody>
                  {accountData.map((user, index) => (
                    <tr key={index}>
                      <td>{user.userId}</td>
                      <td>
                        <div className="user-name-cell">
                          <img src={user.avatar} alt={user.name} className="user-avatar" />
                          <span>{user.name}</span>
                        </div>
                      </td>
                      <td>
                        <div className="user-status-cell">
                          <UserCircleIcon className="user-status-icon" />
                          <span>{user.userStatus}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`status-badge ${user.status.toLowerCase()}`}>
                          {user.status === 'Activated' ? <CheckCircleIcon className="status-badge-icon" /> : <XCircleIcon className="status-badge-icon" />}
                          {user.status}
                        </span>
                      </td>
                      <td>
                        <button className="admin-control-button">Activate</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card performance">
              <div className="performance-header">
                <h2>Performance</h2>
              </div>
              <div className="performance-grid">
                <div className="performance-left-column">
                  <div className="perf-card total-user">
                    <p className="perf-card-title">Total User</p>
                    <div className="perf-metric">
                      <span>2k</span>
                      <sub>users</sub>
                      <ArrowTrendingUpIcon className="sparkline green" />
                    </div>
                    <p className="perf-card-subtitle">Monthly Subscribers</p>
                    <div className="subs-progress-bar">
                      <div className="subs-progress-inner" style={{ width: '40%' }}></div>
                      <span className="subs-label">20subs</span>
                    </div>
                  </div>

                  <div className="performance-bottom-left">
                    <div className="circular-progress-card">
                      <div className="circular-progress" style={{ '--value': 65 } as React.CSSProperties}>
                        <span className="progress-value">65%</span>
                      </div>
                    </div>

                    <div className="perf-card ratings-summary">
                      <div className="avatar-group">
                        <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="User 1" className="rated-avatar-sm" />
                        <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="User 2" className="rated-avatar-sm" />
                        <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="User 3" className="rated-avatar-sm" />
                      </div>
                      <p>+1k people rated</p>
                      <div className="star-rating">
                        <StarIcon className="star-icon-sm" />
                        <StarIcon className="star-icon-sm" />
                        <StarIcon className="star-icon-sm" />
                        <StarIcon className="star-icon-sm" />
                        <StarIcon className="star-icon-sm" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="performance-right-column">
                  <div className="perf-card resolved-disputes">
                    <p className="perf-card-title">Total Resolved Disputes</p>
                    <div className="perf-metric">
                      <span>25%</span>
                      <sub>disputes</sub>
                      <ArrowTrendingUpIcon className="sparkline green" />
                    </div>
                  </div>

                  <div className="perf-card unresolved-disputes">
                    <p className="perf-card-title">Total Unresolve Disputes</p>
                    <div className="perf-metric">
                      <span>75%</span>
                      <sub>disputes</sub>
                      <ArrowTrendingDownIcon className="sparkline red" />
                    </div>
                    <div className="disputes-list">
                      <div className="disputes-list-header">
                        <span>User name</span>
                        <span>Issues</span>
                        <span>Time</span>
                      </div>
                      {unresolvedDisputesData.map((dispute, index) => (
                        <div className="dispute-item" key={index}>
                          <div className="dispute-user">
                            <img src={dispute.avatar} alt={dispute.name} />
                            <span>{dispute.name}</span>
                          </div>
                          <span>{dispute.issue}</span>
                          <span>{dispute.time}</span>
                        </div>
                      ))}
                    </div>
                    <a href="#" className="view-more-queries">View more queries</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card popular-task-specialist">
              <div className="pts-main">
              <div>
              <div className="pts-header">
                  <h2>Popular Task Specialist</h2>
                </div>
                <div className="pts-items">
                  <div className="progress-item">
                    <label>Task Completion In Due Date</label>
                    <div className="progress-display">
                      <div className="progress-outer">
                        <div className="progress-inner" style={{ width: '80%', backgroundColor: 'var(--primary-color)' }}></div>
                        <span className="progress-percent-text">80%</span>
                      </div>
                    </div>
                  </div>
                  <div className="progress-item">
                    <label>Uncompleted task</label>
                    <div className="progress-display">
                      <div className="progress-outer">
                        <div className="progress-inner" style={{ width: '20%', backgroundColor: '#F44336' }}></div>
                        <span className="progress-percent-text">20%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div className="ratings-card">
                  <div className="avatar-group">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User 1" className="rated-avatar" />
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User 2" className="rated-avatar" />
                    <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="User 3" className="rated-avatar" />
                    <span className="rated-plus">+100</span>
                  </div>
                  <p className="most-rated-text">Most rated</p>
                  <div className="star-rating">
                    <StarIcon className="star-icon" />
                    <StarIcon className="star-icon" />
                    <StarIcon className="star-icon" />
                    <StarIcon className="star-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
