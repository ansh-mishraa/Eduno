"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter, useSearchParams } from "next/navigation";

const branches = ["Information Technology", ];
const semesters = [1, 2, 3, 4, 5];

export default function BranchSemesterSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize state from URL parameters or set to empty/default
  const [branch, setBranch] = useState<string>(searchParams.get("branch") || "");
  const [semester, setSemester] = useState<number>(
    parseInt(searchParams.get("semester") || "0")
  );

  const handleSubmit = () => {
    // Update URL with selected values
    const params = new URLSearchParams();
    params.set("branch", branch);
    params.set("semester", semester.toString());

    // Use replace to avoid adding to history stack when just selecting options
    router.push(`/features?${params.toString()}`);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6 space-y-4">
        {/* Branch Selector */}
        <Select
          value={branch || ""}
          onValueChange={(value) => setBranch(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Branch" />
          </SelectTrigger>
          <SelectContent>
            {branches.map((b) => (
              <SelectItem key={b} value={b}>
                {b}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Semester Selector */}
        <Select
          value={semester ? semester.toString() : ""}
          onValueChange={(value) => setSemester(parseInt(value))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Semester" />
          </SelectTrigger>
          <SelectContent>
            {semesters.map((s) => (
              <SelectItem key={s} value={s.toString()}>
                Semester {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Submit Button */}
        <Button
          className="w-full"
          onClick={handleSubmit}
          disabled={!branch || !semester}
        >
          View Resources
        </Button>
      </CardContent>
    </Card>
  );
}
