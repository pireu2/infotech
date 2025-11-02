import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Mail } from "lucide-react";
import { cn } from "../lib/utils";
import { useTranslation } from "../hooks/useTranslation";

import teamMembersData from "../data/teamMembers.json";
import { Role } from "../types/Role";
import { TeamMember } from "../types/TeamMember";

const teamMembers: TeamMember[] = teamMembersData.map((member: any) => ({
  ...member,
  role: member.role as Role,
}));

export default function TeamMemberCards() {
  const { translations } = useTranslation();

  return (
    <div id="team" className="container py-12 mx-auto pl-3 pr-3 z-3">
      <div className="relative">
        <h2 className="text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-display">
          {translations.team.title}
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="max-w-7xl w-full">
          {/* First row: 3 members */}
          <div className="flex flex-wrap justify-center gap-10 mb-10">
            {teamMembers.slice(0, 3).map((member) => (
              <div
                key={member.name}
                className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(25%-30px)]"
              >
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
          {/* Second row: 4 members */}
          <div className="flex flex-wrap justify-center gap-10">
            {teamMembers.slice(3, 7).map((member) => (
              <div
                key={member.name}
                className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(25%-30px)]"
              >
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [isHovered, setIsHovered] = useState(false);
  const { translations } = useTranslation();

  return (
    <Card
      className={cn(
        "relative overflow-hidden bg-gray-900/40 backdrop-blur-xl border-0 rounded-xl transition-all duration-300 p-0 gap-0",
        "before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-b before:from-purple-500/40 before:to-transparent before:pointer-events-none",
        "after:absolute after:inset-0 after:rounded-xl after:p-[1px] after:bg-gradient-to-t after:from-purple-600/20 after:to-transparent after:pointer-events-none",
        "shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(147,51,234,0.2)]",
        isHovered ? "transform scale-[1.02]" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 transition-opacity duration-300 z-10 rounded-t-xl"
          style={{ opacity: isHovered ? 0.8 : 0 }}
        />
        <img
          src={member.image || "/placeholder.svg"}
          className="block w-full h-100 object-cover rounded-t-xl"
          alt={member.name}
        />
      </div>
      <CardHeader className="relative z-20 backdrop-blur-md pb-3 pt-2 px-3">
        <CardTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300 flex flex-row items-center justify-between">
          {member.name}
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </CardTitle>
        <CardDescription className="text-gray-300 font-medium">
          <div> {translations.roles[member.role]}</div>
        </CardDescription>
      </CardHeader>
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-purple-500/20 pointer-events-none" />
      {isHovered && (
        <div className="absolute inset-0 rounded-xl bg-purple-600/5 pointer-events-none" />
      )}
    </Card>
  );
}
