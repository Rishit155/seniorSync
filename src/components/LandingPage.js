import { Outlet, Link } from "react-router-dom";
import heartIcon from "./heart.png";

// Define styles as a const
const landingPageStyles = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "20px",
  fontFamily: "Arial, sans-serif", // Add a default font family
};

const headerStyles = {
  textAlign: "center",
  padding: "20px 0",
  borderBottom: "1px solid #ccc", // Add a border to separate header
};

const h1Styles = {
  fontSize: "2.5em", // Increase font size for the title
  color: "#333",
  marginBottom: "10px", // Add some space below the title
  display: "inline-flex", // Make the title and heart icon inline
  alignItems: "center", // Align items vertically
};

const heartIconStyles = {
  width: "30px", // Adjust size as needed
  height: "30px",
  marginLeft: "10px", // Add space between title and icon
};

const navUlStyles = {
  listStyleType: "none",
  padding: 0,
  textAlign: "center", // Center the navigation links
};

const navUlLiStyles = {
  display: "inline",
  marginRight: "20px",
};

const navUlLiLinkStyles = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "bold",
  transition: "color 0.3s ease", // Add a smooth color transition on hover
};

const LandingPage = () => {
  return (
    <div style={landingPageStyles}>
      <header style={headerStyles}>
        <h1 style={h1Styles}>
          SeniorSync
          <img src={heartIcon} alt="Heart" style={heartIconStyles} />
        </h1>
      </header>
      <nav>
        <ul style={navUlStyles}>
          <li style={navUlLiStyles}>
            <Link to="/metrics" style={navUlLiLinkStyles}>Metrics</Link>
          </li>
          <li style={navUlLiStyles}>
            <Link to="/checklist" style={navUlLiLinkStyles}>Checklist</Link>
          </li>
          <li style={navUlLiStyles}>
            <Link to="/medicine" style={navUlLiLinkStyles}>Medicine</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default LandingPage;