import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Mail } from "lucide-react";
import { cn } from "../lib/utils";


interface TeamMember {
  name: string;
  role: string;
  image: string;
  email: string;
}

  const teamMembers: TeamMember[] = [
    {
      name: "Spătăcean Giorgiana",
      role: "BC Responsible",
      image: "src/assets/echipa/gio.png",
      email: "sgiorgiana02@gmail.com",
    },
    {
      name: "Mozacu Ștefania",
      role: "Coordinator",
      image: "src/assets/echipa/stefi.png",
      email: "stefaniamozacu1@gmail.com",
    },
    {
      name: "Bereky Andra",
      role: "PR Responsible",
      image: "src/assets/echipa/andra.png",
      email: "andraberecky4@gmail.com",
    },
    {
      name: "Radu Andrei",
      role: "Tehnic Responsible",
      image: "src/assets/echipa/andrei.png",
      email: "raduandreidaniel05@gmail.com",
    },
    {
      name: "Ari Andrada",
      role: "Co-coordinator",
      image: "src/assets/echipa/ari.png",
      email: "ari.andrada37@gmail.com",
    },
    {
      name: "Privigyei Ana",
      role: "Co-coordinator",
      image: "src/assets/echipa/ana.png",
      email: "privigyeialexandra@gmail.com",
    },
    {
      name: "Florean Rareș",
      role: "Co-coordinator",
      image: "src/assets/echipa/rares.png",
      email: "rares.gabiflorean@gmail.com",
    },
    {
      name: "Popan Andreea",
      role: "Secretary",
      image: "src/assets/echipa/andreea.png",
      email: "popanandreea0@gmail.com ",
    },
  ];

export default function TeamMemberCards() {
  return (
    <div id="team" className="container py-12 mx-auto pl-3 pr-3 z-3">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
        Our Team
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={cn(
        "relative overflow-hidden bg-gray-900/40 backdrop-blur-xl border-0 rounded-xl transition-all duration-300 p-0",
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
      <CardHeader className="relative z-20 backdrop-blur-md pb-5">
        <CardTitle className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300">
          {member.name}
        </CardTitle>
        <CardDescription className="text-gray-300 font-medium">
          {member.role}
        </CardDescription>
        <a
          href={`mailto:${member.email}`}
          className="inline-flex items-center mt-2 text-purple-400 hover:text-purple-300 transition-colors"
          onMouseEnter={(e) => {
            e.currentTarget.classList.add("animate-pulse");
            setTimeout(
              () => e.currentTarget.classList.remove("animate-pulse"),
              1000
            );
          }}
        >
          <Mail className="w-4 h-4 mr-2" />
          Contact
        </a>
      </CardHeader>
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-purple-500/20 pointer-events-none" />
      {isHovered && (
        <div className="absolute inset-0 rounded-xl bg-purple-600/5 pointer-events-none" />
      )}
    </Card>
  );
}
