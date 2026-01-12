"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

// Get subjects based on semester
const getSubjects = (branch: string, semester: number) => {
  if(semester === 1){
    return [
      {
        id: "bce",
        name: "Basic Computer Engineering ",
        code: "BT-205",
        image: "https://images.unsplash.com/photo-1548393488-ae8f117cbc1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3MlMjBhbmQlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
      },
    ];
  }
  else if (semester === 2) {
    return [
      {
        id: "m2",
        name: "Mathematics-II",
        code: "BSC201",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop",
      },
      {
        id: "ep",
        name: "Engineering Physics",
        code: "BSC202",
        image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=500&h=300&fit=crop",
      },
    ];
  } else if (semester === 3) {
    return [
      {
        id: "eee",
        name: "Energy & Environmental Engineering",
        code: "ES301",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop",
      },
      {
        id: "dm",
        name: "Discrete Mathematics",
        code: "IT302",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&h=300&fit=crop",
      },
      {
        id: "ds",
        name: "Data Structures",
        code: "IT303",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=300&fit=crop",
      },
      {
        id: "oop",
        name: "Object Oriented Programming & Methodology",
        code: "IT304",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      },
      {
        id: "dcs",
        name: "Digital Circuit System",
        code: "IT305",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=300&fit=crop",
      },
    ];
  }
  else if(semester === 4){
    return [
      {
        id: "m3",
        name: "Mathematics-III",
        code: "BT401",
        image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "coa",
        name: "Computer Architecture",
        code: "IT402",
        image: "https://plus.unsplash.com/premium_vector-1734405737827-1374f9f89818?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "ada",
        name: "Analysis & Design of Algorithm",
        code: "IT403",
        image: "https://images.unsplash.com/photo-1642952469120-eed4b65104be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "dbms",
        name: "Database Management System",
        code: "IT404",
        image: "https://images.unsplash.com/photo-1741958193874-6ef299f6b053?w=500&h=300&fit=crop",
      },
      {
        id: "adc",
        name: "Analog & Digital Communications",
        code: "IT405",
        image: "https://plus.unsplash.com/premium_vector-1711987903052-36a37d18bb6b?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
      },
    ];
  }
  else if(semester === 5){
    return [
      {
        id: "os",
        name: "Operating System",
        code: "IT-501",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=500&h=300&fit=crop",
      },
    ];
  }
  return [];
};

export default function SubjectList({
  branch,
  semester,
}: {
  branch: string;
  semester: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const subjects = getSubjects(branch, semester);

  const handleChangeSelection = () => {
    // Clear the URL parameters and return to selection
    router.push("/features");
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl md:text-2xl font-semibold">
          {branch} - Semester {semester}
        </h2>
        <Button variant="outline" onClick={handleChangeSelection} className="w-full sm:w-auto">
          Change Selection
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {subjects.map((subject) => (
          <Link 
            key={subject.id} 
            href={`/subject/${subject.id}?branch=${encodeURIComponent(branch)}&semester=${semester}`}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <Image
                src={subject.image}
                alt={subject.name}
                width={500}
                height={300}
                className="w-full h-40 md:h-48 object-cover rounded-t-lg"
              />
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-base md:text-lg">{subject.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-xs md:text-sm text-muted-foreground">
                  Subject Code: {subject.code}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {branch} - Semester {semester}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}