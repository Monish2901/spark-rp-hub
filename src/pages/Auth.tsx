import { Link, Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { GraduationCap, BookOpen, ShieldCheck, Trophy, Sparkles } from "lucide-react";

const roles = [
  {
    id: "student",
    label: "Student",
    description: "View your engagement scores, activities, and academic progress.",
    icon: GraduationCap,
    href: "/auth/student",
    access: "View Access",
    accessEmoji: "📖",
    colorClass: "role-card-student",
    badgeClass: "badge-student",
    iconClass: "role-icon-student",
    btnClass: "btn-student",
    delay: "0ms",
  },
  {
    id: "faculty",
    label: "Faculty",
    description: "Manage student records, update activities, and monitor engagement.",
    icon: BookOpen,
    href: "/auth/faculty",
    access: "Edit & View Access",
    accessEmoji: "✏️",
    colorClass: "role-card-faculty",
    badgeClass: "badge-faculty",
    iconClass: "role-icon-faculty",
    btnClass: "btn-faculty",
    delay: "80ms",
  },
  {
    id: "admin",
    label: "Admin",
    description: "Full system control — manage users, roles, platform settings and data.",
    icon: ShieldCheck,
    href: "/auth/admin",
    access: "Full Access",
    accessEmoji: "🔐",
    colorClass: "role-card-admin",
    badgeClass: "badge-admin",
    iconClass: "role-icon-admin",
    btnClass: "btn-admin",
    delay: "160ms",
  },
];

const Auth = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="rp-loading">
        <div className="rp-spinner" />
      </div>
    );
  }

  if (user) return <Navigate to="/" replace />;

  return (
    <div className="rp-page">
      {/* Background */}
      <div className="rp-bg-blob rp-bg-blob-1" />
      <div className="rp-bg-blob rp-bg-blob-2" />
      <div className="rp-bg-blob rp-bg-blob-3" />
      <div className="rp-mesh" />

      <div className="rp-content">
        {/* Header */}
        <div className="rp-header">
          <div className="rp-logo">
            <div className="rp-logo-icon">
              <Trophy size={28} />
            </div>
            <span className="rp-logo-text">
              S<span className="rp-logo-accent">EP</span>
            </span>
          </div>
          <div className="rp-sparkle">
            <Sparkles size={14} />
            <span>Student Engagement Platform</span>
          </div>
          <h1 className="rp-title">
            Welcome Back
          </h1>
          <p className="rp-subtitle">
            Choose your portal below to sign in
          </p>
        </div>

        {/* Role Cards */}
        <div className="rp-cards">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Link
                key={role.id}
                to={role.href}
                className={`rp-card ${role.colorClass}`}
                style={{ animationDelay: role.delay }}
              >
                <div className="rp-card-inner">
                  {/* Top section */}
                  <div className="rp-card-top">
                    <div className={`rp-role-icon ${role.iconClass}`}>
                      <Icon size={28} />
                    </div>
                    <div className={`rp-access-badge ${role.badgeClass}`}>
                      <span>{role.accessEmoji}</span>
                      <span>{role.access}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="rp-card-info">
                    <h2 className="rp-card-title">{role.label}</h2>
                    <p className="rp-card-desc">{role.description}</p>
                  </div>

                  {/* CTA */}
                  <div className={`rp-card-btn ${role.btnClass}`}>
                    Sign In as {role.label}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Hover shimmer */}
                <div className="rp-card-shimmer" />
              </Link>
            );
          })}
        </div>

        <p className="rp-footer">
          © {new Date().getFullYear()} Student Engagement Platform · All rights reserved.
        </p>
      </div>

      <style>{`
        .rp-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a1a 0%, #0f0a1f 40%, #0a1a0f 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .rp-loading {
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          background: #0a0a1a;
        }
        .rp-spinner {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 3px solid rgba(255,255,255,0.1);
          border-top-color: #f97316;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .rp-bg-blob {
          position: absolute; border-radius: 50%;
          filter: blur(100px); opacity: 0.18;
          pointer-events: none;
          animation: blobDrift 12s ease-in-out infinite;
        }
        .rp-bg-blob-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #6366f1, #4f46e5);
          top: -150px; left: -100px;
        }
        .rp-bg-blob-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #10b981, #059669);
          bottom: -100px; right: -80px;
          animation-delay: -5s;
        }
        .rp-bg-blob-3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, #f97316, #ea580c);
          top: 40%; left: 55%;
          animation-delay: -9s;
        }
        @keyframes blobDrift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.97); }
        }

        .rp-mesh {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .rp-content {
          position: relative; z-index: 10;
          width: 100%; max-width: 960px;
          display: flex; flex-direction: column;
          align-items: center; gap: 2.5rem;
        }

        /* Header */
        .rp-header {
          text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
        }

        .rp-logo {
          display: flex; align-items: center; gap: 0.6rem;
          margin-bottom: 0.25rem;
        }
        .rp-logo-icon {
          display: flex; align-items: center; justify-content: center;
          width: 48px; height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, #f59e0b, #f97316);
          color: white;
          box-shadow: 0 0 24px rgba(245,158,11,0.4);
        }
        .rp-logo-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem; font-weight: 800;
          color: white; letter-spacing: -0.03em;
        }
        .rp-logo-accent {
          background: linear-gradient(135deg, #f59e0b, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .rp-sparkle {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 0.75rem; font-weight: 500;
          color: rgba(255,255,255,0.45);
          padding: 0.25rem 0.75rem;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
        }

        .rp-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 5vw, 2.75rem);
          font-weight: 800;
          color: white;
          margin: 0;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }

        .rp-subtitle {
          font-size: 1rem;
          color: rgba(255,255,255,0.45);
          margin: 0;
        }

        /* Cards grid */
        .rp-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.25rem;
          width: 100%;
        }

        /* Individual card */
        .rp-card {
          text-decoration: none;
          display: block;
          border-radius: 1.25rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s;
          animation: cardSlideIn 0.5s ease both;
        }
        @keyframes cardSlideIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .rp-card:hover {
          transform: translateY(-6px) scale(1.01);
        }

        .rp-card-shimmer {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0) 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .rp-card:hover .rp-card-shimmer { opacity: 1; }

        .rp-card-inner {
          padding: 1.75rem;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 1.25rem;
          display: flex; flex-direction: column; gap: 1.25rem;
          height: 100%;
          position: relative; z-index: 1;
          transition: border-color 0.3s, background 0.3s;
        }

        /* Student card */
        .role-card-student:hover .rp-card-inner {
          border-color: rgba(99,102,241,0.3);
          background: rgba(99,102,241,0.06);
          box-shadow: 0 20px 40px rgba(99,102,241,0.15), 0 0 0 1px rgba(99,102,241,0.15);
        }
        /* Faculty card */
        .role-card-faculty:hover .rp-card-inner {
          border-color: rgba(16,185,129,0.3);
          background: rgba(16,185,129,0.06);
          box-shadow: 0 20px 40px rgba(16,185,129,0.15), 0 0 0 1px rgba(16,185,129,0.15);
        }
        /* Admin card */
        .role-card-admin:hover .rp-card-inner {
          border-color: rgba(249,115,22,0.3);
          background: rgba(249,115,22,0.06);
          box-shadow: 0 20px 40px rgba(249,115,22,0.2), 0 0 0 1px rgba(249,115,22,0.2);
        }

        .rp-card-top {
          display: flex; align-items: center;
          justify-content: space-between; gap: 0.75rem;
        }

        .rp-role-icon {
          display: flex; align-items: center; justify-content: center;
          width: 60px; height: 60px; border-radius: 16px;
          color: white; flex-shrink: 0;
          transition: box-shadow 0.3s;
        }
        .role-icon-student { background: linear-gradient(135deg, #6366f1, #818cf8); box-shadow: 0 0 20px rgba(99,102,241,0.35); }
        .role-icon-faculty { background: linear-gradient(135deg, #10b981, #34d399); box-shadow: 0 0 20px rgba(16,185,129,0.35); }
        .role-icon-admin { background: linear-gradient(135deg, #f97316, #fb923c); box-shadow: 0 0 20px rgba(249,115,22,0.4); }

        .rp-access-badge {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 0.3rem 0.7rem;
          border-radius: 999px;
          font-size: 0.72rem; font-weight: 600;
        }
        .badge-student { background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.25); color: #a5b4fc; }
        .badge-faculty { background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.25); color: #6ee7b7; }
        .badge-admin { background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.25); color: #fb923c; }

        .rp-card-info { flex: 1; }

        .rp-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.35rem; font-weight: 700;
          color: white; margin: 0 0 0.5rem 0;
          letter-spacing: -0.02em;
        }

        .rp-card-desc {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
          margin: 0; line-height: 1.6;
        }

        .rp-card-btn {
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 0.7rem 1rem;
          border-radius: 0.75rem;
          font-size: 0.87rem; font-weight: 600;
          transition: all 0.2s;
        }
        .btn-student { background: rgba(99,102,241,0.15); color: #a5b4fc; border: 1px solid rgba(99,102,241,0.2); }
        .btn-faculty { background: rgba(16,185,129,0.12); color: #6ee7b7; border: 1px solid rgba(16,185,129,0.2); }
        .btn-admin { background: rgba(249,115,22,0.1); color: #fb923c; border: 1px solid rgba(249,115,22,0.2); }

        .rp-card:hover .btn-student { background: rgba(99,102,241,0.25); border-color: rgba(99,102,241,0.4); }
        .rp-card:hover .btn-faculty { background: rgba(16,185,129,0.22); border-color: rgba(16,185,129,0.4); }
        .rp-card:hover .btn-admin { background: rgba(249,115,22,0.2); border-color: rgba(249,115,22,0.4); }

        .rp-footer {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.2);
          text-align: center;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default Auth;
