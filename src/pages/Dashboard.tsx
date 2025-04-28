
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import YearSemSelector from "@/components/YearSemSelector";
import ResourceCard from "@/components/ResourceCard";
import { academicData } from "@/lib/mockData";
import { Semester, Subject } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [selectedYear, setSelectedYear] = useState(1);
  const [selectedSem, setSelectedSem] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const storedUser = sessionStorage.getItem("user");
    if (!storedUser) {
      navigate("/");
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  const handleYearSemSelect = (year: number, sem: number) => {
    setSelectedYear(year);
    setSelectedSem(sem);
  };

  // Filter the data based on selected year and semester
  const currentSemester = academicData.find(
    (sem) => sem.year === selectedYear && sem.semester === selectedSem
  ) as Semester;

  // Filter subjects and resources based on search query
  const filteredSubjects = currentSemester ? currentSemester.subjects.map(subject => {
    if (searchQuery.trim() === "") return subject;
    
    const matchingResources = subject.resources.filter(resource => 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return { ...subject, resources: matchingResources };
  }).filter(subject => subject.resources.length > 0 || 
    subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.code.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">GRIET Resources Hub</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 hidden md:inline-block">
                Logged in as: {user.email}
              </span>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut size={16} className="mr-2" /> Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {/* Search Bar */}
          <div className="w-full max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search resources..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Year-Semester Selector */}
          <YearSemSelector
            semesters={academicData}
            selectedYear={selectedYear}
            selectedSem={selectedSem}
            onSelect={handleYearSemSelect}
          />

          {/* Subject Cards */}
          <div className="grid gap-8">
            {filteredSubjects.length > 0 ? (
              filteredSubjects.map((subject) => (
                <Card key={subject.id} className="overflow-hidden">
                  <CardHeader className="bg-slate-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{subject.name}</CardTitle>
                        <p className="text-sm text-gray-600">{subject.code}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {subject.resources.length > 0 ? (
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {subject.resources.map((resource) => (
                          <ResourceCard key={resource.id} resource={resource} />
                        ))}
                      </div>
                    ) : (
                      <p className="text-center text-gray-500 py-8">
                        No resources available for this subject yet.
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No resources found</h3>
                <p className="text-gray-500">
                  {searchQuery.trim() !== ""
                    ? "Try a different search term."
                    : "No resources have been added for this semester yet."}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
