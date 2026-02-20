import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Loader2, GraduationCap, ArrowLeft, Eye, EyeOff, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StudentLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  // Sign In state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Sign Up state
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);

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

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: signUpEmail,
      password: signUpPassword,
      options: {
        data: { display_name: signUpName, role: "student" },
        emailRedirectTo: window.location.origin,
      },
    });
    setLoading(false);
    if (error) {
      toast({ title: "Sign up failed", description: error.message, variant: "destructive" });
    } else {
      toast({
        title: "Check your email",
        description: "We've sent you a verification link. Please check your inbox.",
      });
    }
  };

  return (
    <div className="student-login-page">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="login-container">
        <Link to="/auth" className="back-link">
          <ArrowLeft size={16} />
          <span>All Portals</span>
        </Link>

        <div className="login-card student-card">
          <div className="card-header">
            <div className="role-icon student-icon">
              <GraduationCap size={32} />
            </div>
            <h1 className="role-title">Student Portal</h1>
            <p className="role-subtitle">
              {mode === "signin"
                ? "Sign in to view your academic journey & engagement"
                : "Create your student account to get started"}
            </p>
          </div>

          <div className="role-badge student-badge">
            <span>📖 View Access</span>
          </div>

          {/* Tab switcher */}
          <div className="auth-tabs">
            <button
              className={`auth-tab ${mode === "signin" ? "auth-tab-active student-tab-active" : ""}`}
              onClick={() => setMode("signin")}
              type="button"
            >
              Sign In
            </button>
            <button
              className={`auth-tab ${mode === "signup" ? "auth-tab-active student-tab-active" : ""}`}
              onClick={() => setMode("signup")}
              type="button"
            >
              Create Account
            </button>
          </div>

          {/* Sign In Form */}
          {mode === "signin" && (
            <form onSubmit={handleSignIn} className="login-form">
              <div className="field-group">
                <Label htmlFor="student-email" className="field-label">Student Email</Label>
                <div className="input-wrapper">
                  <Mail className="input-icon" size={17} />
                  <Input
                    id="student-email"
                    type="email"
                    placeholder="student@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="custom-input"
                    required
                  />
                </div>
              </div>

              <div className="field-group">
                <Label htmlFor="student-password" className="field-label">Password</Label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={17} />
                  <Input
                    id="student-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="custom-input pr-10"
                    required
                  />
                  <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)} tabIndex={-1}>
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="submit-btn student-btn" disabled={loading}>
                {loading ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                {loading ? "Signing in…" : "Sign In as Student"}
              </Button>
            </form>
          )}

          {/* Sign Up Form */}
          {mode === "signup" && (
            <form onSubmit={handleSignUp} className="login-form">
              <div className="field-group">
                <Label htmlFor="student-signup-name" className="field-label">Full Name</Label>
                <div className="input-wrapper">
                  <User className="input-icon" size={17} />
                  <Input
                    id="student-signup-name"
                    type="text"
                    placeholder="Your full name"
                    value={signUpName}
                    onChange={(e) => setSignUpName(e.target.value)}
                    className="custom-input"
                    required
                  />
                </div>
              </div>

              <div className="field-group">
                <Label htmlFor="student-signup-email" className="field-label">Student Email</Label>
                <div className="input-wrapper">
                  <Mail className="input-icon" size={17} />
                  <Input
                    id="student-signup-email"
                    type="email"
                    placeholder="student@university.edu"
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    className="custom-input"
                    required
                  />
                </div>
              </div>

              <div className="field-group">
                <Label htmlFor="student-signup-password" className="field-label">Password</Label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={17} />
                  <Input
                    id="student-signup-password"
                    type={showSignUpPassword ? "text" : "password"}
                    placeholder="Min. 6 characters"
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    className="custom-input pr-10"
                    minLength={6}
                    required
                  />
                  <button type="button" className="eye-btn" onClick={() => setShowSignUpPassword(!showSignUpPassword)} tabIndex={-1}>
                    {showSignUpPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="submit-btn student-btn" disabled={loading}>
                {loading ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                {loading ? "Creating account…" : "Create Student Account"}
              </Button>
            </form>
          )}

          <p className="card-footer-note">
            {mode === "signin"
              ? "Don't have an account? Click Create Account above."
              : "Already have an account? Click Sign In above."}
          </p>
        </div>
      </div>

      <style>{`
        .student-login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          padding: 1.5rem;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.25;
          animation: float 8s ease-in-out infinite;
          pointer-events: none;
        }
        .blob-1 {
          width: 420px; height: 420px;
          background: radial-gradient(circle, #6366f1, #818cf8);
          top: -100px; left: -100px;
          animation-delay: 0s;
        }
        .blob-2 {
          width: 320px; height: 320px;
          background: radial-gradient(circle, #8b5cf6, #a78bfa);
          bottom: -80px; right: -80px;
          animation-delay: -3s;
        }
        .blob-3 {
          width: 240px; height: 240px;
          background: radial-gradient(circle, #6366f1, #4f46e5);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -6s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-24px) scale(1.04); }
        }

        .login-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 440px;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 0.85rem;
          margin-bottom: 1.25rem;
          transition: color 0.2s;
        }
        .back-link:hover { color: #a5b4fc; }

        .login-card {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1.5rem;
          padding: 2.5rem 2rem;
          box-shadow: 0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .card-header {
          text-align: center;
          margin-bottom: 1.25rem;
        }

        .role-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          border-radius: 20px;
          margin-bottom: 1rem;
        }
        .student-icon {
          background: linear-gradient(135deg, #6366f1, #818cf8);
          box-shadow: 0 0 32px rgba(99,102,241,0.5);
          color: white;
        }

        .role-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: white;
          margin: 0 0 0.5rem 0;
          letter-spacing: -0.02em;
        }

        .role-subtitle {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.5);
          margin: 0;
          line-height: 1.5;
        }

        .role-badge {
          display: flex;
          justify-content: center;
          margin-bottom: 1.25rem;
        }
        .student-badge span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          background: rgba(99,102,241,0.15);
          border: 1px solid rgba(99,102,241,0.3);
          color: #a5b4fc;
        }

        /* Auth Tabs */
        .auth-tabs {
          display: flex;
          gap: 4px;
          background: rgba(255,255,255,0.06);
          border-radius: 0.75rem;
          padding: 4px;
          margin-bottom: 1.5rem;
        }
        .auth-tab {
          flex: 1;
          padding: 0.55rem 0.75rem;
          border-radius: 0.6rem;
          font-size: 0.85rem;
          font-weight: 600;
          border: none;
          background: transparent;
          color: rgba(255,255,255,0.45);
          cursor: pointer;
          transition: all 0.25s;
        }
        .auth-tab:hover {
          color: rgba(255,255,255,0.7);
        }
        .auth-tab-active {
          color: white !important;
        }
        .student-tab-active {
          background: rgba(99,102,241,0.3) !important;
          box-shadow: 0 2px 8px rgba(99,102,241,0.25);
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .field-label {
          color: rgba(255,255,255,0.75) !important;
          font-size: 0.85rem !important;
          font-weight: 500 !important;
        }

        .input-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255,255,255,0.35);
          pointer-events: none;
          z-index: 1;
        }

        .custom-input {
          padding-left: 2.5rem !important;
          background: rgba(255,255,255,0.06) !important;
          border: 1px solid rgba(255,255,255,0.12) !important;
          color: white !important;
          border-radius: 0.75rem !important;
          height: 46px !important;
          transition: border-color 0.2s, background 0.2s !important;
        }
        .custom-input::placeholder { color: rgba(255,255,255,0.25) !important; }
        .custom-input:focus {
          border-color: rgba(99,102,241,0.6) !important;
          background: rgba(255,255,255,0.09) !important;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.15) !important;
          outline: none !important;
        }

        .eye-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          padding: 0;
          transition: color 0.2s;
        }
        .eye-btn:hover { color: rgba(255,255,255,0.7); }

        .submit-btn {
          width: 100%;
          height: 48px;
          border-radius: 0.75rem !important;
          font-size: 0.95rem;
          font-weight: 600;
          margin-top: 0.4rem;
          transition: all 0.2s !important;
          border: none !important;
        }
        .student-btn {
          background: linear-gradient(135deg, #6366f1, #818cf8) !important;
          color: white !important;
          box-shadow: 0 8px 20px rgba(99,102,241,0.4);
        }
        .student-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #4f46e5, #6366f1) !important;
          box-shadow: 0 12px 28px rgba(99,102,241,0.55) !important;
          transform: translateY(-1px);
        }
        .student-btn:disabled { opacity: 0.65; }

        .card-footer-note {
          text-align: center;
          margin-top: 1.25rem;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.35);
        }
      `}</style>
    </div>
  );
};

export default StudentLogin;
