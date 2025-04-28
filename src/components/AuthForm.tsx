
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { signInWithGoogle } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Mail } from "lucide-react";

const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Authentication Failed",
        description: error.message || "Please use your GRIET college email (@grietcollege.com)",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">GRIET Resources Hub</CardTitle>
        <CardDescription className="text-center">
          Sign in with your college Google account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={handleGoogleSignIn}
          disabled={isLoading}
        >
          <Mail className="mr-2 h-4 w-4" />
          {isLoading ? "Signing in..." : "Sign in with Google"}
        </Button>
      </CardContent>
      <CardFooter className="text-xs text-center text-gray-500 flex justify-center">
        <p>You'll need to configure Supabase credentials to enable authentication</p>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
