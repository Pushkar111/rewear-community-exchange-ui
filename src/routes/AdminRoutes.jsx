
import { Routes, Route } from 'react-router-dom';
import { AdminAuthProvider } from '../contexts/AdminAuthContext';
import ProtectedAdminRoute from '../components/admin/ProtectedAdminRoute';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminLogin from '../pages/admin/AdminLogin';
import AdminDashboard from '../pages/admin/AdminDashboard';

const AdminLayout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex">
    <AdminSidebar />
    <div className="flex-1 lg:ml-0">
      {children}
    </div>
  </div>
);

const AdminRoutes = () => {
  return (
    <AdminAuthProvider>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/*" element={
          <ProtectedAdminRoute>
            <AdminLayout>
              <Routes>
                <Route path="/dashboard" element={<AdminDashboard />} />
                <Route path="/" element={<AdminDashboard />} />
                {/* Add more admin routes here */}
              </Routes>
            </AdminLayout>
          </ProtectedAdminRoute>
        } />
      </Routes>
    </AdminAuthProvider>
  );
};

export default AdminRoutes;
