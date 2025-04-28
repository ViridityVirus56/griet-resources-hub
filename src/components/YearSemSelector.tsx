
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Semester } from "@/lib/types";

interface YearSemSelectorProps {
  semesters: Semester[];
  selectedYear: number;
  selectedSem: number;
  onSelect: (year: number, sem: number) => void;
}

const YearSemSelector = ({ semesters, selectedYear, selectedSem, onSelect }: YearSemSelectorProps) => {
  // Get unique years
  const years = Array.from(new Set(semesters.map((sem) => sem.year))).sort();

  return (
    <div className="w-full">
      <Tabs defaultValue={selectedYear.toString()} className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          {years.map((year) => (
            <TabsTrigger 
              key={year} 
              value={year.toString()}
              onClick={() => {
                // Find first semester for this year
                const firstSem = semesters.find(s => s.year === year)?.semester || 1;
                onSelect(year, firstSem);
              }}
              className="text-center py-2"
            >
              Year {year}
            </TabsTrigger>
          ))}
        </TabsList>

        {years.map((year) => (
          <TabsContent key={year} value={year.toString()}>
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4 justify-center">
                  {[1, 2].map((sem) => (
                    <button
                      key={sem}
                      className={`px-6 py-3 rounded-md ${
                        selectedYear === year && selectedSem === sem
                          ? "bg-primary text-white"
                          : "bg-secondary hover:bg-secondary/80"
                      }`}
                      onClick={() => onSelect(year, sem)}
                    >
                      Semester {sem}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default YearSemSelector;
