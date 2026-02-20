import { students } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import EngagementBadge, { RPDisplay } from "@/components/EngagementBadge";
import { Trophy, Medal, Award, Info } from "lucide-react";

const podiumIcons = [
  <Trophy key="gold" className="h-6 w-6 text-gold" />,
  <Medal key="silver" className="h-5 w-5 text-muted-foreground" />,
  <Award key="bronze" className="h-5 w-5 text-engagement-medium" />,
];

const years = [1, 2, 3, 4];

const studentsByYear = years.map((year) => ({
  year,
  students: [...students]
    .filter((s) => s.academicYear === year)
    .sort((a, b) => b.rewardPoints - a.rewardPoints),
}));

const Leaderboard = () => {
  return (
    <div className="container mx-auto space-y-8 px-4 py-8">
      <div>
        <h1 className="font-display text-3xl font-bold tracking-tight">Leaderboard</h1>
        <p className="mt-1 text-muted-foreground">Top performing students ranked by Reward Points</p>
      </div>

      <Card className="border-gold/30 bg-gold-muted shadow-card">
        <CardContent className="flex items-start gap-3 py-4">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <div className="text-sm">
            <p className="font-semibold text-foreground">How Engagement Levels Work</p>
            <p className="mt-1 text-muted-foreground">
              <span className="font-medium text-engagement-high">High: 300+ RP</span> ·{" "}
              <span className="font-medium text-engagement-medium">Medium: 150–299 RP</span> ·{" "}
              <span className="font-medium text-engagement-low">Low: &lt;150 RP</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {studentsByYear.map(({ year, students: yearStudents }) => (
        <div key={year} className="space-y-4">
          <h2 className="font-display text-xl font-bold tracking-tight border-b pb-2">
            Year {year}
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            {yearStudents.slice(0, 3).map((student, i) => (
              <Card
                key={student.id}
                className={`shadow-card transition-all hover:shadow-card-hover animate-fade-in overflow-hidden ${
                  i === 0 ? "ring-2 ring-gold/40" : ""
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`h-1.5 ${i === 0 ? "bg-gradient-gold" : "bg-muted"}`} />
                <CardContent className="pt-5 text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                    {podiumIcons[i]}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground">#{i + 1}</p>
                    <h3 className="font-display text-lg font-bold">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">{student.department}</p>
                  </div>
                  <div className="flex justify-center">
                    <RPDisplay points={student.rewardPoints} size={i === 0 ? "lg" : "md"} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-card">
            <CardContent className="pt-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-3 font-semibold text-muted-foreground w-12">#</th>
                      <th className="pb-3 font-semibold text-muted-foreground">Name</th>
                      <th className="pb-3 font-semibold text-muted-foreground hidden sm:table-cell">Department</th>
                      <th className="pb-3 font-semibold text-muted-foreground">RP</th>
                      <th className="pb-3 font-semibold text-muted-foreground">Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yearStudents.map((student, i) => (
                      <tr
                        key={student.id}
                        className="border-b last:border-0 transition-colors hover:bg-muted/50"
                      >
                        <td className="py-3 font-medium text-muted-foreground">{i + 1}</td>
                        <td className="py-3 font-medium">{student.name}</td>
                        <td className="py-3 text-muted-foreground hidden sm:table-cell">{student.department}</td>
                        <td className="py-3">
                          <RPDisplay points={student.rewardPoints} size="sm" />
                        </td>
                        <td className="py-3">
                          <EngagementBadge level={student.engagementLevel} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
