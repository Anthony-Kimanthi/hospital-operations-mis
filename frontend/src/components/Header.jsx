function Header() {
  return (
    <header className="top-header">
      <div className="header-left">
        <div className="header-title">
          Hospital Operations Management Information System
        </div>
        <div className="header-subtitle">
          Healthcare Operations &amp; Analytics
        </div>
      </div>

      <div className="header-right">
        <button className="notification-button" type="button" title="Notifications">
          🔔
          <span className="notification-badge">3</span>
        </button>

        <div className="user-profile">
          <div className="user-avatar">A</div>

          <div className="user-details">
            <div className="user-name">Administrator</div>
            <div className="user-role">System Administrator</div>
          </div>

          <span className="user-chevron">⌄</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
