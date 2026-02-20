import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Loader2, ShieldCheck, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        setLoading(false);
        if (error) {
            toast({ title: "Sign in failed", description: error.message, variant: "destructive" });
        } else {
            navigate("/");
        }
    };

    return (
        <div className="admin-login-page">
            {/* Radial spotlight */}
            <div className="admin-spotlight" />
            <div className="adm-blob adm-blob-1" />
            <div className="adm-blob adm-blob-2" />

            {/* Animated particle dots */}
            {[...Array(6)].map((_, i) => (
                <div key={i} className="adm-particle" style={{
                    left: `${10 + i * 15}%`,
                    top: `${20 + (i % 3) * 25}%`,
                    animationDelay: `${i * 0.8}s`,
                    width: `${4 + (i % 3) * 2}px`,
                    height: `${4 + (i % 3) * 2}px`,
                }} />
            ))}

            <div className="adm-container">
                <Link to="/auth" className="adm-back-link">
                    <ArrowLeft size={16} />
                    <span>All Portals</span>
                </Link>

                <div className="adm-card">
                    {/* Animated top border */}
                    <div className="adm-card-glow" />

                    <div className="adm-header">
                        <div className="adm-icon-wrap">
                            <ShieldCheck size={34} />
                        </div>
                        <h1 className="adm-title">Admin Portal</h1>
                        <p className="adm-subtitle">Full system control — manage users, data &amp; configurations</p>
                    </div>

                    <div className="adm-badge">
                        <span>🔐 Full Access</span>
                    </div>

                    <div className="adm-security-notice">
                        <ShieldCheck size={13} />
                        <span>Secure admin authentication required</span>
                    </div>

                    <form onSubmit={handleSignIn} className="adm-form">
                        <div className="adm-field">
                            <Label htmlFor="admin-email" className="adm-label">Admin Email</Label>
                            <div className="adm-input-wrap">
                                <Mail className="adm-icon-left" size={17} />
                                <Input
                                    id="admin-email"
                                    type="email"
                                    placeholder="admin@university.edu"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="adm-input"
                                    required
                                />
                            </div>
                        </div>

                        <div className="adm-field">
                            <Label htmlFor="admin-password" className="adm-label">Admin Password</Label>
                            <div className="adm-input-wrap">
                                <Lock className="adm-icon-left" size={17} />
                                <Input
                                    id="admin-password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="adm-input"
                                    required
                                />
                                <button type="button" className="adm-eye" onClick={() => setShowPassword(!showPassword)} tabIndex={-1}>
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        <Button type="submit" className="adm-btn" disabled={loading}>
                            {loading ? <Loader2 className="animate-spin mr-2" size={18} /> : <ShieldCheck size={18} className="mr-2" />}
                            {loading ? "Verifying…" : "Sign In as Admin"}
                        </Button>
                    </form>

                    <p className="adm-footer-note">
                        Unauthorised access is strictly prohibited and logged.
                    </p>
                </div>
            </div>

            <style>{`
        .admin-login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0d0d0d 0%, #1a0a00 50%, #0d0d0d 100%);
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          padding: 1.5rem;
        }

        .admin-spotlight {
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .adm-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          animation: admFloat 10s ease-in-out infinite;
          pointer-events: none;
        }
        .adm-blob-1 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #f97316, #ea580c);
          top: -100px; right: -80px;
        }
        .adm-blob-2 {
          width: 280px; height: 280px;
          background: radial-gradient(circle, #fb923c, #f97316);
          bottom: -60px; left: -40px;
          animation-delay: -5s;
        }
        @keyframes admFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-22px) scale(1.04); }
        }

        .adm-particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(251,146,60,0.35);
          animation: particlePulse 4s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes particlePulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.4); }
        }

        .adm-container {
          position: relative; z-index: 10;
          width: 100%; max-width: 440px;
        }

        .adm-back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          font-size: 0.85rem;
          margin-bottom: 1.25rem;
          transition: color 0.2s;
        }
        .adm-back-link:hover { color: #fb923c; }

        .adm-card {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border: 1px solid rgba(251,146,60,0.12);
          border-radius: 1.5rem;
          padding: 2.5rem 2rem;
          box-shadow: 0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05);
          position: relative;
          overflow: hidden;
        }

        .adm-card-glow {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #f97316, #fb923c, #f97316, transparent);
          animation: glowSweep 3s linear infinite;
        }
        @keyframes glowSweep {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }

        .adm-header { text-align: center; margin-bottom: 1.25rem; }

        .adm-icon-wrap {
          display: inline-flex;
          align-items: center; justify-content: center;
          width: 76px; height: 76px;
          border-radius: 22px;
          background: linear-gradient(135deg, #f97316, #fb923c);
          box-shadow: 0 0 40px rgba(249,115,22,0.55), 0 0 80px rgba(249,115,22,0.2);
          color: white;
          margin-bottom: 1rem;
          position: relative;
        }
        .adm-icon-wrap::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 24px;
          border: 1px solid rgba(249,115,22,0.3);
        }

        .adm-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: white;
          margin: 0 0 0.5rem 0;
          letter-spacing: -0.02em;
        }

        .adm-subtitle {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.45);
          margin: 0;
          line-height: 1.5;
        }

        .adm-badge {
          display: flex; justify-content: center;
          margin-bottom: 1rem;
        }
        .adm-badge span {
          display: inline-flex;
          align-items: center; gap: 6px;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          font-size: 0.78rem; font-weight: 600;
          background: rgba(249,115,22,0.1);
          border: 1px solid rgba(249,115,22,0.25);
          color: #fb923c;
        }

        .adm-security-notice {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.3);
          margin-bottom: 1.5rem;
        }

        .adm-form { display: flex; flex-direction: column; gap: 1.1rem; }

        .adm-field { display: flex; flex-direction: column; gap: 0.45rem; }

        .adm-label {
          color: rgba(255,255,255,0.7) !important;
          font-size: 0.85rem !important;
          font-weight: 500 !important;
        }

        .adm-input-wrap { position: relative; }

        .adm-icon-left {
          position: absolute; left: 12px; top: 50%;
          transform: translateY(-50%);
          color: rgba(255,255,255,0.35);
          pointer-events: none; z-index: 1;
        }

        .adm-input {
          padding-left: 2.5rem !important;
          background: rgba(255,255,255,0.04) !important;
          border: 1px solid rgba(249,115,22,0.12) !important;
          color: white !important;
          border-radius: 0.75rem !important;
          height: 46px !important;
          transition: border-color 0.2s, background 0.2s !important;
        }
        .adm-input::placeholder { color: rgba(255,255,255,0.22) !important; }
        .adm-input:focus {
          border-color: rgba(249,115,22,0.45) !important;
          background: rgba(255,255,255,0.07) !important;
          box-shadow: 0 0 0 3px rgba(249,115,22,0.1) !important;
          outline: none !important;
        }

        .adm-eye {
          position: absolute; right: 12px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none; cursor: pointer;
          color: rgba(255,255,255,0.35);
          display: flex; align-items: center; padding: 0;
          transition: color 0.2s;
        }
        .adm-eye:hover { color: rgba(255,255,255,0.65); }

        .adm-btn {
          width: 100%;
          height: 50px;
          border-radius: 0.75rem !important;
          font-size: 0.95rem; font-weight: 600;
          margin-top: 0.4rem;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s !important;
          border: none !important;
          background: linear-gradient(135deg, #ea580c, #f97316) !important;
          color: white !important;
          box-shadow: 0 8px 24px rgba(249,115,22,0.45);
        }
        .adm-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #c2410c, #ea580c) !important;
          box-shadow: 0 14px 32px rgba(249,115,22,0.6) !important;
          transform: translateY(-1px);
        }
        .adm-btn:disabled { opacity: 0.6; }

        .adm-footer-note {
          text-align: center;
          margin-top: 1.25rem;
          font-size: 0.73rem;
          color: rgba(255,255,255,0.3);
        }
      `}</style>
        </div>
    );
};

export default AdminLogin;
