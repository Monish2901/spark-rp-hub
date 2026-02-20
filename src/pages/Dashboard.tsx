import { students } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RPDisplay } from "@/components/EngagementBadge";
import { Users, GraduationCap, TrendingUp, Award } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const totalStudents = students.length;
  const avgRP = Math.round(students.reduce((sum, s) => sum + s.rewardPoints, 0) / totalStudents);

  const yearData = [1, 2, 3, 4].map((year) => {
    const yearStudents = students.filter((s) => s.academicYear === year);
    return {
      year: `Year ${year}`,
      count: yearStudents.length,
      avgRP: Math.round(yearStudents.reduce((sum, s) => sum + s.rewardPoints, 0) / (yearStudents.length || 1)),
    };
  });

  const engagementCounts = {
    High: students.filter((s) => s.engagementLevel === "High").length,
    Medium: students.filter((s) => s.engagementLevel === "Medium").length,
    Low: students.filter((s) => s.engagementLevel === "Low").length,
  };

  return (
    <div className="container mx-auto space-y-8 px-4 py-8">
      <div className="rounded-2xl bg-gradient-hero p-8 text-primary-foreground">
        <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Student Engagement Dashboard
        </h1>
        <p className="mt-2 text-primary-foreground/70">
          Track and analyze student engagement through Reward Points
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-card transition-shadow hover:shadow-card-hover animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
            <Users className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="font-display text-3xl font-bold">{totalStudents}</div>
          </CardContent>
        </Card>
        <Card className="shadow-card transition-shadow hover:shadow-card-hover animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average RP</CardTitle>
            <Award className="h-5 w-5 text-gold" />
          </CardHeader>
          <CardContent>
            <RPDisplay points={avgRP} size="md" />
          </CardContent>
        </Card>
        <Card className="shadow-card transition-shadow hover:shadow-card-hover animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">High Engagement</CardTitle>
            <TrendingUp className="h-5 w-5 text-engagement-high" />
          </CardHeader>
          <CardContent>
            <div className="font-display text-3xl font-bold text-engagement-high">{engagementCounts.High}</div>
            <p className="text-xs text-muted-foreground">students with 300+ RP</p>
          </CardContent>
        </Card>
        <Card className="shadow-card transition-shadow hover:shadow-card-hover animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Departments</CardTitle>
            <GraduationCap className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="font-display text-3xl font-bold">
              {new Set(students.map((s) => s.department)).size}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-1">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="font-display">Average RP by Year</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={yearData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 16% 88%)" />
                <XAxis dataKey="year" tick={{ fontSize: 13 }} />
                <YAxis tick={{ fontSize: 13 }} />
                <Tooltip
                  contentStyle={{ borderRadius: "0.75rem", border: "1px solid hsl(220 16% 88%)" }}
                />
                <Bar dataKey="avgRP" radius={[8, 8, 0, 0]} name="Avg RP" fill="hsl(42 92% 56%)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="font-display">Enrollment & RP by Year</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 font-semibold text-muted-foreground">Academic Year</th>
                  <th className="pb-3 font-semibold text-muted-foreground">Students</th>
                  <th className="pb-3 font-semibold text-muted-foreground">Avg RP</th>
                  <th className="pb-3 font-semibold text-muted-foreground">High</th>
                  <th className="pb-3 font-semibold text-muted-foreground">Medium</th>
                  <th className="pb-3 font-semibold text-muted-foreground">Low</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((year) => {
                  const ys = students.filter((s) => s.academicYear === year);
                  return (
                    <tr key={year} className="border-b last:border-0">
                      <td className="py-3 font-medium">Year {year}</td>
                      <td className="py-3">{ys.length}</td>
                      <td className="py-3">
                        <span className="font-semibold text-gradient-gold">
                          {Math.round(ys.reduce((s, st) => s + st.rewardPoints, 0) / (ys.length || 1))}
                        </span>
                      </td>
                      <td className="py-3 text-engagement-high font-medium">
                        {ys.filter((s) => s.engagementLevel === "High").length}
                      </td>
                      <td className="py-3 text-engagement-medium font-medium">
                        {ys.filter((s) => s.engagementLevel === "Medium").length}
                      </td>
                      <td className="py-3 text-engagement-low font-medium">
                        {ys.filter((s) => s.engagementLevel === "Low").length}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
