import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
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
            <DropdownMenuContent align="end" className="w-48 bg-white">
              <DropdownMenuItem>
                <a href="#blog" className="w-full">Blog</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#documentation" className="w-full">Documentation</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#privacy" className="w-full">Privacy Policy</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#terms" className="w-full">Terms of Service</a>
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