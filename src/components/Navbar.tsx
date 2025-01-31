import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { BookOpen, Shield, FileText, MessageSquare, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gradient-to-r from-[#8B5CF6] to-[#0EAEDB] backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">MultiSacco</Link>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-white/90 hover:text-white transition-colors">Features</a>
          <a href="#benefits" className="text-white/90 hover:text-white transition-colors">Benefits</a>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-white/90 hover:text-white bg-transparent border-none cursor-pointer">
                Resources <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/documentation" className="flex items-center">
                  <BookOpen className="mr-2 h-4 w-4" />
                  <span>Documentation</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/blog" className="flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Blog</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/privacy" className="flex items-center">
                  <Shield className="mr-2 h-4 w-4" />
                  <span>Privacy Policy</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/terms" className="flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Terms of Service</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="bg-white text-primary hover:bg-white/90">
            <a href="https://www.multi.com">Login</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;