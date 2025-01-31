const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#8B5CF6]/5 to-[#0EAEDB]/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-primary">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-primary">Features</a></li>
              <li><a href="#benefits" className="text-gray-600 hover:text-primary">Benefits</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
              <li><a href="#blog" className="text-gray-600 hover:text-primary">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#documentation" className="text-gray-600 hover:text-primary">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-gray-600 hover:text-primary">Privacy</a></li>
              <li><a href="#terms" className="text-gray-600 hover:text-primary">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>&copy; 2024 MultiSacco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;