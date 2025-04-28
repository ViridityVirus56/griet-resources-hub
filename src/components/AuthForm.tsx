
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { signInWithGoogle } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { FcGoogle } from "lucide-react";

const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setDebugInfo(null);
      
      const origin = window.location.origin;
      setDebugInfo(`Attempting to sign in with Google...\nRedirect URL: ${origin}`);
      
      await signInWithGoogle();
      
      toast({
        title: "Authentication Initiated",
        description: "Please complete the sign-in process in the popup window.",
      });
    } catch (error: any) {
      console.error('Sign-in error:', error);
      
      // Create a detailed error message
      let errorDetails = '';
      if (error?.message) errorDetails += `Error: ${error.message}\n`;
      if (error?.error_description) errorDetails += `Description: ${error.error_description}\n`;
      if (error?.status) errorDetails += `Status: ${error.status}\n`;
      
      // Add this to debug info
      setDebugInfo(prev => (prev ? `${prev}\n\nError encountered:\n${errorDetails}` : `Error encountered:\n${errorDetails}`));
      
      toast({
        variant: "destructive",
        title: "Authentication Failed",
        description: error?.message || error?.error_description || 
          "Failed to sign in with Google. Please make sure Google authentication is enabled in Supabase.",
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
          Sign in with your Google account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2" 
          onClick={handleGoogleSignIn}
          disabled={isLoading}
        >
          <FcGoogle className="h-5 w-5" />
          {isLoading ? "Signing in..." : "Sign in with Google"}
        </Button>
        
        {debugInfo && (
          <div className="mt-4 p-2 bg-slate-100 rounded-md">
            <p className="text-xs font-mono text-slate-700 whitespace-pre-wrap">{debugInfo}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="text-xs text-center text-gray-500 flex justify-center">
        <p>Make sure Google provider is enabled in Supabase Auth settings</p>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
