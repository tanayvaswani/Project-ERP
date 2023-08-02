export const AuthMiddleware = () => {
  const authToken = localStorage.getItem("authtoken");
  return !!authToken; // Returns true if authToken exists, false otherwise
};