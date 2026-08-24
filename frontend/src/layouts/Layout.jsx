import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <div className="app-shell">
      <Sidebar />

      <div className="app-main">
        <Header />

        <main className="app-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
