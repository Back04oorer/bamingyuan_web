import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: 24, fontFamily: "system-ui" }}>
      <Nav />
      <main style={{ marginTop: 24 }}>
        <Outlet />
      </main>
      <footer style={{ marginTop: 48, opacity: 0.6 }}>
        © {new Date().getFullYear()} bamingyuan.com
      </footer>
    </div>
  );
}
