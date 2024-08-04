// import { Navigate, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const ProtectedRoute = ({ element }) => {
//   const location = useLocation();
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // Adjust based on your state

//   if (!isAuthenticated) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return element;
// };

// export default ProtectedRoute;






// import { useSelector } from "react-redux";

// const ProtectedRoute = () => {
//   const { user } = useSelector((state) => state.userSlice);
//   return user === null || !user?.isAdmin ? <Navigate to='/' replace /> : <Outlet />;
// }
// }
// export default ProtectedRoute