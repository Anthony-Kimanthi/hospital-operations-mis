import Sidebar from "../components/Sidebar";
import Header from "../components/Header";


export default function Layout({ children }) {

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh"
      }}
    >

      <Sidebar />

      <div
        style={{
          flex: 1,
          background: "#f6f8fb"
        }}
      >

        <Header />

        <main
          style={{
            padding: "25px"
          }}
        >
          {children}
        </main>

      </div>

    </div>
  );
}
