import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, Search, Calendar, Trophy, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/search", label: "Search", icon: Search },
  { path: "/activities", label: "Activities", icon: Calendar },
  { path: "/leaderboard", label: "Leaderboard", icon: Trophy },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold">
            <Trophy className="h-5 w-5 text-primary" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            S<span className="text-gradient-gold">EP</span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
          {user && (
            <Button variant="ghost" size="icon" onClick={handleLogout} className="ml-2">
              <LogOut className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
