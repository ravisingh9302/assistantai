"use client";

import { useState } from "react";
import { useAppDispatch } from "@/store/reduxhook";
import { uploadResumeForAnalysis } from "@/actions/interviewAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const companies = ["Google", "Amazon", "Microsoft", "Facebook", "Tesla"];
const roles = ["Software Engineer", "Data Scientist", "Product Manager", "Backend Developer"];

export default function FieldForm() {
  const dispatch = useAppDispatch();
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!company || !role || !file) {
      alert("Please fill in all fields!");
      return;
    }

  
    setLoading(true);
    const formData = new FormData();
    formData.append("company", company);
    formData.append("role", role);
    formData.append("resume", file);
   
    await dispatch(uploadResumeForAnalysis(formData));
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-[400px] shadow-xl p-6 bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Upload Resume</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Company Selection */}
            <div>
              <Label>Select Company</Label>
              <Select onValueChange={setCompany}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Choose a company" />
                </SelectTrigger>
                <SelectContent>
                  {companies.map((company) => (
                    <SelectItem key={company} value={company}>
                      {company}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Role Selection */}
            <div>
              <Label>Select Job Role</Label>
              <Select onValueChange={setRole}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Choose a role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* File Upload */}
            <div>
              <Label>Upload Resume (PDF)</Label>
              <Input type="file" accept=".pdf" onChange={handleFileChange} className="mt-1" />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Uploading..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
