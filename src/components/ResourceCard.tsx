
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Resource } from "@/lib/types";
import { FileDown } from "lucide-react";

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const getIconColor = (type: string) => {
    switch (type) {
      case 'PDF':
        return 'text-red-500';
      case 'DOC':
        return 'text-blue-500';
      case 'PPT':
        return 'text-orange-500';
      case 'ZIP':
        return 'text-purple-500';
      default:
        return 'text-gray-500';
    }
  };

  const handleDownload = () => {
    // In a real app, this would trigger an actual download
    // For now, we'll show an alert
    alert(`Downloading ${resource.title}`);
    
    // You would typically implement a real download like this:
    // const link = document.createElement('a');
    // link.href = resource.fileUrl;
    // link.download = resource.title;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold">{resource.title}</CardTitle>
            <CardDescription>{resource.description}</CardDescription>
          </div>
          <div className={`font-bold ${getIconColor(resource.type)}`}>
            {resource.type}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          <p>Size: {resource.size}</p>
          <p>Uploaded: {new Date(resource.uploadDate).toLocaleDateString()}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full flex items-center gap-2 hover:bg-secondary"
          onClick={handleDownload}
        >
          <FileDown size={16} />
          Download
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
