import { Student } from "@/data/mockData";
import { getStudentPerformance } from "@/data/studentPerformance";
import { getAcademicEngagement, SubjectEngagement } from "@/data/academicEngagement";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EngagementBadge, { RPDisplay } from "@/components/EngagementBadge";
import {
  GraduationCap,
  Code2,
  Trophy,
  Users,
  Award,
  Hash,
  BookOpen,
  BookOpenCheck,
} from "lucide-react";

interface Props {
  student: Student | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const levelColors: Record<string, string> = {
  Advanced: "bg-engagement-high/15 text-engagement-high border-engagement-high/30",
  Intermediate: "bg-engagement-medium/15 text-engagement-medium border-engagement-medium/30",
  Beginner: "bg-engagement-low/15 text-engagement-low border-engagement-low/30",
};

const engagementBadgeColor: Record<string, string> = {
  High: "bg-[hsl(var(--engagement-high))]/15 text-[hsl(var(--engagement-high))] border-[hsl(var(--engagement-high))]/30",
  Medium: "bg-[hsl(var(--engagement-medium))]/15 text-[hsl(var(--engagement-medium))] border-[hsl(var(--engagement-medium))]/30",
  Low: "bg-[hsl(var(--engagement-low))]/15 text-[hsl(var(--engagement-low))] border-[hsl(var(--engagement-low))]/30",
};

const StudentDetailSheet = ({ student, open, onOpenChange }: Props) => {
  if (!student) return null;

  const perf = getStudentPerformance(student.id);
  const academicEngagement = getAcademicEngagement(student.id, student.department);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader className="pb-4">
          <div className="flex items-center justify-between pr-6">
            <div>
              <SheetTitle className="font-display text-xl">{student.name}</SheetTitle>
              <SheetDescription className="flex items-center gap-2 mt-1">
                <Hash className="h-3.5 w-3.5" />
                {student.rollNumber}
                <span className="mx-1">·</span>
                <BookOpen className="h-3.5 w-3.5" />
                {student.department}
                <span className="mx-1">·</span>
                Year {student.academicYear}
              </SheetDescription>
            </div>
            <EngagementBadge level={student.engagementLevel} />
          </div>
          <div className="rounded-lg bg-gold-muted p-3 mt-3">
            <RPDisplay points={student.rewardPoints} size="md" />
          </div>
        </SheetHeader>

        <Tabs defaultValue={academicEngagement ? "academic" : "technical"} className="mt-2">
          <TabsList className={`grid w-full ${academicEngagement ? "grid-cols-4" : "grid-cols-3"}`}>
            {academicEngagement && (
              <TabsTrigger value="academic" className="text-xs gap-1">
                <BookOpenCheck className="h-3.5 w-3.5" /> Academic
              </TabsTrigger>
            )}
            <TabsTrigger value="technical" className="text-xs gap-1">
              <Code2 className="h-3.5 w-3.5" /> Tech
            </TabsTrigger>
            <TabsTrigger value="sports" className="text-xs gap-1">
              <Trophy className="h-3.5 w-3.5" /> Sports
            </TabsTrigger>
            <TabsTrigger value="clubs" className="text-xs gap-1">
              <Users className="h-3.5 w-3.5" /> Clubs
            </TabsTrigger>
          </TabsList>

          {/* Academic Engagement (ECE only) */}
          {academicEngagement && (
            <TabsContent value="academic" className="space-y-4 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpenCheck className="h-4 w-4 text-primary" />
                <h4 className="font-medium text-sm">Subject-wise Engagement</h4>
              </div>
              <div className="rounded-lg border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs">Subject</TableHead>
                      <TableHead className="text-xs text-right">Engagement</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {academicEngagement.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="text-sm font-medium">{item.subject}</TableCell>
                        <TableCell className="text-right">
                          <Badge
                            variant="outline"
                            className={engagementBadgeColor[item.engagementLevel]}
                          >
                            {item.engagementLevel}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          )}

          {/* Technical Skills */}
          <TabsContent value="technical" className="space-y-3 mt-4">
            {perf.technicalSkills.length === 0 ? (
              <p className="text-sm text-muted-foreground">No technical skills recorded.</p>
            ) : (
              perf.technicalSkills.map((skill, i) => (
                <div key={i} className="rounded-lg border p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <Badge variant="outline" className={levelColors[skill.level]}>
                      {skill.level}
                    </Badge>
                  </div>
                  {skill.certifications && skill.certifications.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {skill.certifications.map((cert, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-1 rounded-md bg-gold-muted px-2 py-0.5 text-xs"
                        >
                          <Award className="h-3 w-3 text-gold" />
                          {cert}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </TabsContent>

          {/* Sports */}
          <TabsContent value="sports" className="space-y-3 mt-4">
            {perf.sports.length === 0 ? (
              <p className="text-sm text-muted-foreground">No sports records available.</p>
            ) : (
              perf.sports.map((s, i) => (
                <div key={i} className="rounded-lg border p-3 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{s.sport}</span>
                    <Badge className="bg-gradient-gold text-accent-foreground border-0 text-xs">
                      {s.achievement}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {s.event} · {s.date}
                  </p>
                </div>
              ))
            )}
          </TabsContent>

          {/* Clubs */}
          <TabsContent value="clubs" className="space-y-3 mt-4">
            {perf.clubs.length === 0 ? (
              <p className="text-sm text-muted-foreground">No club activities recorded.</p>
            ) : (
              perf.clubs.map((c, i) => (
                <div key={i} className="rounded-lg border p-3 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{c.club}</span>
                    <Badge variant="secondary" className="text-xs">
                      {c.role}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{c.contributions}</p>
                  <p className="text-xs text-muted-foreground">Since {c.since}</p>
                </div>
              ))
            )}
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};

export default StudentDetailSheet;
