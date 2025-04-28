
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Check if email contains @grietcollege.com domain
    if (!email.toLowerCase().endsWith("@grietcollege.com")) {
      toast({
        variant: "destructive",
        title: "Authentication Failed",
        description: "Please use your GRIET college email (@grietcollege.com)",
      });
      setIsLoading(false);
      return;
    }

    // Simulate authentication delay
    setTimeout(() => {
      // Store user email in session storage
      sessionStorage.setItem("user", JSON.stringify({ email }));
      toast({
        title: "Authentication Successful",
        description: "Welcome to GRIET Resources Hub",
      });
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">GRIET Resources Hub</CardTitle>
        <CardDescription className="text-center">
          Enter your college email to access academic resources
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Input
                id="email"
                type="email"
                placeholder="your.name@grietcollege.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="focus:ring-primary"
                autoComplete="email"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full gradient-bg"
            disabled={isLoading}
          >
            {isLoading ? "Authenticating..." : "Authenticate"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default AuthForm;
