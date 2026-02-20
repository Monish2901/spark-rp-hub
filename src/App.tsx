import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Dashboard from "@/pages/Dashboard";
import StudentSearch from "@/pages/StudentSearch";
import Activities from "@/pages/Activities";
import Leaderboard from "@/pages/Leaderboard";
import Auth from "@/pages/Auth";
import StudentLogin from "@/pages/StudentLogin";
import FacultyLogin from "@/pages/FacultyLogin";
import AdminLogin from "@/pages/AdminLogin";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!user) return <Navigate to="/auth" replace />;
  return <>{children}</>;
};

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <>
      {user && <Navbar />}
      <Routes>
        {/* Role selection hub — redirects to "/" if already logged in */}
        <Route path="/auth" element={user ? <Navigate to="/" replace /> : <Auth />} />

        {/* Individual role login pages */}
        <Route path="/auth/student" element={user ? <Navigate to="/" replace /> : <StudentLogin />} />
        <Route path="/auth/faculty" element={user ? <Navigate to="/" replace /> : <FacultyLogin />} />
        <Route path="/auth/admin" element={user ? <Navigate to="/" replace /> : <AdminLogin />} />

        {/* Protected app routes */}
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/search" element={<ProtectedRoute><StudentSearch /></ProtectedRoute>} />
        <Route path="/activities" element={<ProtectedRoute><Activities /></ProtectedRoute>} />
        <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
