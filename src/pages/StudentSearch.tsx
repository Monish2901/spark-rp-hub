import { useState } from "react";
import { students, Student } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import EngagementBadge, { RPDisplay } from "@/components/EngagementBadge";
import StudentDetailSheet from "@/components/StudentDetailSheet";
import { Search as SearchIcon, Hash, BookOpen, GraduationCap } from "lucide-react";

const StudentSearch = () => {
  const [query, setQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const filtered = query.trim()
    ? students.filter(
        (s) =>
          s.name.toLowerCase().includes(query.toLowerCase()) ||
          s.rollNumber.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="container mx-auto space-y-8 px-4 py-8">
      <div>
        <h1 className="font-display text-3xl font-bold tracking-tight">Student Search</h1>
        <p className="mt-1 text-muted-foreground">Search by name or roll number</p>
      </div>

      <div className="relative max-w-xl">
        <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Enter student name or roll number..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 text-base h-12"
        />
      </div>

      {query.trim() && filtered.length === 0 && (
        <p className="text-muted-foreground">No students found matching "{query}"</p>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((student, i) => (
          <Card
            key={student.id}
            className="shadow-card transition-all hover:shadow-card-hover animate-fade-in overflow-hidden cursor-pointer"
            style={{ animationDelay: `${i * 0.05}s` }}
            onClick={() => setSelectedStudent(student)}
          >
            <div className="h-1.5 bg-gradient-gold" />
            <CardContent className="pt-5 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold">{student.name}</h3>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Hash className="h-3.5 w-3.5" />
                    {student.rollNumber}
                  </div>
                </div>
                <EngagementBadge level={student.engagementLevel} />
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>{student.department}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="h-4 w-4" />
                  <span>Year {student.academicYear}</span>
                </div>
              </div>

              <div className="rounded-lg bg-gold-muted p-3">
                <p className="mb-1 text-xs font-medium text-muted-foreground">Total Reward Points</p>
                <RPDisplay points={student.rewardPoints} size="md" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <StudentDetailSheet
        student={selectedStudent}
        open={!!selectedStudent}
        onOpenChange={(open) => !open && setSelectedStudent(null)}
      />
    </div>
  );
};

export default StudentSearch;
