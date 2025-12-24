import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  marginRight: 12,
  textDecoration: "none",
  fontWeight: isActive ? 700 : 400
});

export default function Nav() {
  return (
    <header style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
      <div style={{ fontWeight: 800 }}>bamingyuan.com</div>
      <nav>
        <NavLink to="/" end style={linkStyle}>Home</NavLink>
        <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
      </nav>
    </header>
  );
}
