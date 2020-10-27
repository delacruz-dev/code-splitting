import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      This is the Home page <Link to="/reports">Go to Reports</Link>
    </div>
  );
}
