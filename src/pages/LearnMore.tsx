import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </Button>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About MultiSacco Management System
          </h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Comprehensive SACCO Management</h2>
            <p className="text-gray-600">
              Our platform provides a complete solution for managing multiple SACCOs efficiently. 
              From member management to financial tracking, we've got everything covered in one 
              integrated system.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Centralized member management across multiple SACCOs</li>
              <li>Automated loan processing and tracking</li>
              <li>Real-time financial reporting and analytics</li>
              <li>Secure transaction processing</li>
              <li>Customizable dividend calculation</li>
              <li>Mobile-friendly interface for members</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
            <p className="text-gray-600">
              With years of experience in SACCO management, our platform is designed to address 
              the unique challenges faced by SACCO administrators. We prioritize security, 
              efficiency, and user experience to ensure smooth operations for your organization.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;