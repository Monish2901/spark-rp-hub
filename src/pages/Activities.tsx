import { useState } from "react";
import { activities, Activity } from "@/data/mockData";
import { getActivityDetail } from "@/data/activityDetails";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RPDisplay } from "@/components/EngagementBadge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Calendar,
  MapPin,
  Clock,
  Building2,
  Users,
  Mail,
  CalendarCheck,
  Sparkles,
} from "lucide-react";

const categoryColors: Record<string, string> = {
  Technical: "bg-primary/10 text-primary border-primary/20",
  Academic: "bg-accent/20 text-accent-foreground border-accent/30",
  Social: "bg-success/10 text-success border-success/20",
  Sports: "bg-engagement-medium/10 text-engagement-medium border-engagement-medium/20",
  Cultural: "bg-destructive/10 text-destructive border-destructive/20",
};

const Activities = () => {
  const [selected, setSelected] = useState<Activity | null>(null);
  const detail = selected ? getActivityDetail(selected.id) : undefined;

  return (
    <div className="container mx-auto space-y-8 px-4 py-8">
      <div>
        <h1 className="font-display text-3xl font-bold tracking-tight">Reward Points Activities</h1>
        <p className="mt-1 text-muted-foreground">
          Explore upcoming events and activities to earn reward points
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity, i) => (
          <Card
            key={activity.id}
            className="shadow-card transition-all hover:shadow-card-hover animate-fade-in flex flex-col cursor-pointer"
            style={{ animationDelay: `${i * 0.05}s` }}
            onClick={() => setSelected(activity)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="font-display text-lg leading-tight">{activity.name}</CardTitle>
                <Badge
                  variant="outline"
                  className={`shrink-0 text-xs ${categoryColors[activity.category] || ""}`}
                >
                  {activity.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-between space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(activity.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <RPDisplay points={activity.rewardPoints} size="sm" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Activity Detail Sheet */}
      <Sheet open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto">
          {selected && (
            <>
              <SheetHeader className="pb-4">
                <div className="flex items-center justify-between pr-6">
                  <SheetTitle className="font-display text-xl">{selected.name}</SheetTitle>
                  <Badge
                    variant="outline"
                    className={`shrink-0 text-xs ${categoryColors[selected.category] || ""}`}
                  >
                    {selected.category}
                  </Badge>
                </div>
                <SheetDescription className="sr-only">Details about {selected.name}</SheetDescription>
                <div className="rounded-lg bg-gold-muted p-3 mt-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Earn</span>
                  <RPDisplay points={selected.rewardPoints} size="md" />
                </div>
              </SheetHeader>

              <div className="space-y-5 mt-2">
                {/* Full description */}
                <div>
                  <h4 className="font-display text-sm font-semibold mb-1.5">About this Event</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {detail?.fullDescription ?? selected.description}
                  </p>
                </div>

                {/* Info grid */}
                {detail && (
                  <div className="grid grid-cols-2 gap-3">
                    <InfoItem icon={<MapPin className="h-4 w-4" />} label="Venue" value={detail.venue} />
                    <InfoItem icon={<Clock className="h-4 w-4" />} label="Time" value={detail.time} />
                    <InfoItem icon={<Building2 className="h-4 w-4" />} label="Organizer" value={detail.organizer} />
                    <InfoItem icon={<Users className="h-4 w-4" />} label="Eligibility" value={detail.eligibility} />
                    <InfoItem
                      icon={<CalendarCheck className="h-4 w-4" />}
                      label="Register by"
                      value={new Date(detail.registrationDeadline).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    />
                    <InfoItem icon={<Mail className="h-4 w-4" />} label="Contact" value={detail.contactEmail} />
                  </div>
                )}

                {/* Highlights */}
                {detail && detail.highlights.length > 0 && (
                  <div>
                    <h4 className="font-display text-sm font-semibold mb-2">Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {detail.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
                        >
                          <Sparkles className="h-3 w-3 text-gold" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground border-t pt-4">
                  <Calendar className="h-4 w-4" />
                  Event Date:{" "}
                  {new Date(selected.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

const InfoItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="rounded-lg border p-2.5 space-y-1">
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
      {icon}
      {label}
    </div>
    <p className="text-xs font-medium leading-snug">{value}</p>
  </div>
);

export default Activities;
