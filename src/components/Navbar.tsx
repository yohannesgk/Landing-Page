import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">MultiSacco</div>
        <div className="flex items-center gap-4">
          <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
          <a href="#benefits" className="text-gray-600 hover:text-primary transition-colors">Benefits</a>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="https://www.multi.com">Login</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;