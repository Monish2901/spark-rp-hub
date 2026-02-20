import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Loader2, BookOpen, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FacultyLogin = () => {
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
        <div className="faculty-login-page">
            <div className="fac-blob fac-blob-1" />
            <div className="fac-blob fac-blob-2" />
            <div className="fac-blob fac-blob-3" />

            {/* Decorative grid lines */}
            <div className="grid-overlay" />

            <div className="fac-container">
                <Link to="/auth" className="fac-back-link">
                    <ArrowLeft size={16} />
                    <span>All Portals</span>
                </Link>

                <div className="fac-card">
                    <div className="fac-header">
                        <div className="fac-icon-wrap">
                            <BookOpen size={32} />
                        </div>
                        <h1 className="fac-title">Faculty Portal</h1>
                        <p className="fac-subtitle">Access student records, manage activities &amp; track engagement</p>
                    </div>

                    <div className="fac-badge">
                        <span>✏️ Edit &amp; View Access</span>
                    </div>

                    <form onSubmit={handleSignIn} className="fac-form">
                        <div className="fac-field">
                            <Label htmlFor="faculty-email" className="fac-label">Faculty Email</Label>
                            <div className="fac-input-wrap">
                                <Mail className="fac-icon" size={17} />
                                <Input
                                    id="faculty-email"
                                    type="email"
                                    placeholder="faculty@university.edu"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="fac-input"
                                    required
                                />
                            </div>
                        </div>

                        <div className="fac-field">
                            <Label htmlFor="faculty-password" className="fac-label">Password</Label>
                            <div className="fac-input-wrap">
                                <Lock className="fac-icon" size={17} />
                                <Input
                                    id="faculty-password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="fac-input pr-10"
                                    required
                                />
                                <button type="button" className="fac-eye" onClick={() => setShowPassword(!showPassword)} tabIndex={-1}>
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        <Button type="submit" className="fac-btn" disabled={loading}>
                            {loading ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                            {loading ? "Signing in…" : "Sign In as Faculty"}
                        </Button>
                    </form>

                    <p className="fac-footer-note">
                        Credentials issued by the department admin.
                    </p>
                </div>
            </div>

            <style>{`
        .faculty-login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #022c22 0%, #064e3b 50%, #022c22 100%);
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          padding: 1.5rem;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .fac-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.22;
          animation: facFloat 9s ease-in-out infinite;
          pointer-events: none;
        }
        .fac-blob-1 {
          width: 380px; height: 380px;
          background: radial-gradient(circle, #10b981, #059669);
          top: -80px; left: -60px;
        }
        .fac-blob-2 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, #34d399, #10b981);
          bottom: -60px; right: -60px;
          animation-delay: -4s;
        }
        .fac-blob-3 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, #6ee7b7, #34d399);
          top: 40%; right: 15%;
          animation-delay: -7s;
        }
        @keyframes facFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        .fac-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 440px;
        }

        .fac-back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          font-size: 0.85rem;
          margin-bottom: 1.25rem;
          transition: color 0.2s;
        }
        .fac-back-link:hover { color: #6ee7b7; }

        .fac-card {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(16,185,129,0.15);
          border-radius: 1.5rem;
          padding: 2.5rem 2rem;
          box-shadow: 0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06);
        }

        .fac-header { text-align: center; margin-bottom: 1.25rem; }

        .fac-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px; height: 72px;
          border-radius: 20px;
          background: linear-gradient(135deg, #10b981, #34d399);
          box-shadow: 0 0 32px rgba(16,185,129,0.5);
          color: white;
          margin-bottom: 1rem;
        }

        .fac-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: white;
          margin: 0 0 0.5rem 0;
          letter-spacing: -0.02em;
        }

        .fac-subtitle {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.5);
          margin: 0;
          line-height: 1.5;
        }

        .fac-badge {
          display: flex;
          justify-content: center;
          margin-bottom: 1.75rem;
        }
        .fac-badge span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          background: rgba(16,185,129,0.12);
          border: 1px solid rgba(16,185,129,0.25);
          color: #6ee7b7;
        }

        .fac-form { display: flex; flex-direction: column; gap: 1.1rem; }

        .fac-field { display: flex; flex-direction: column; gap: 0.45rem; }

        .fac-label {
          color: rgba(255,255,255,0.75) !important;
          font-size: 0.85rem !important;
          font-weight: 500 !important;
        }

        .fac-input-wrap { position: relative; }

        .fac-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255,255,255,0.35);
          pointer-events: none;
          z-index: 1;
        }

        .fac-input {
          padding-left: 2.5rem !important;
          background: rgba(255,255,255,0.05) !important;
          border: 1px solid rgba(16,185,129,0.15) !important;
          color: white !important;
          border-radius: 0.75rem !important;
          height: 46px !important;
          transition: border-color 0.2s, background 0.2s !important;
        }
        .fac-input::placeholder { color: rgba(255,255,255,0.25) !important; }
        .fac-input:focus {
          border-color: rgba(16,185,129,0.5) !important;
          background: rgba(255,255,255,0.08) !important;
          box-shadow: 0 0 0 3px rgba(16,185,129,0.12) !important;
          outline: none !important;
        }

        .fac-eye {
          position: absolute;
          right: 12px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.35);
          display: flex; align-items: center; padding: 0;
          transition: color 0.2s;
        }
        .fac-eye:hover { color: rgba(255,255,255,0.7); }

        .fac-btn {
          width: 100%;
          height: 48px;
          border-radius: 0.75rem !important;
          font-size: 0.95rem;
          font-weight: 600;
          margin-top: 0.4rem;
          transition: all 0.2s !important;
          border: none !important;
          background: linear-gradient(135deg, #10b981, #34d399) !important;
          color: #022c22 !important;
          box-shadow: 0 8px 20px rgba(16,185,129,0.35);
        }
        .fac-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #059669, #10b981) !important;
          box-shadow: 0 12px 28px rgba(16,185,129,0.5) !important;
          transform: translateY(-1px);
        }
        .fac-btn:disabled { opacity: 0.65; }

        .fac-footer-note {
          text-align: center;
          margin-top: 1.25rem;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.35);
        }
      `}</style>
        </div>
    );
};

export default FacultyLogin;
