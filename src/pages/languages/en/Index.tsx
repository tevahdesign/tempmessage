
import { Navigate } from "react-router-dom";

// Redirect to the main English page
const EnglishHome = () => {
  return <Navigate to="/" replace />;
};

export default EnglishHome;
