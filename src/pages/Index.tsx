
import AuthForm from "@/components/AuthForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already authenticated
    const user = sessionStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Header */}
      <header className="py-6 w-full">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold text-primary">GRIET Resources Hub</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Access College Resources Anytime, Anywhere</h2>
            <p className="text-lg text-gray-600">
              A centralized platform for GRIET students to access academic materials organized by year and semester.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">✓</div>
                <span>Organized course materials</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">✓</div>
                <span>Lecture notes and presentations</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">✓</div>
                <span>Previous year question papers</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">✓</div>
                <span>Assignment resources</span>
              </li>
            </ul>
          </div>

          <div className="mx-auto w-full">
            <AuthForm />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        <div className="container mx-auto px-4">
          <p>© 2023 GRIET Resources Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
