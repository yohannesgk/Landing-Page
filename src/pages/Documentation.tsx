import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Documentation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="text-gray-600 mb-4">
              Welcome to MultiSacco's documentation. Here you'll find everything you need to know about using our platform.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">User Guide</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account Setup</li>
              <li>Member Management</li>
              <li>Transaction Processing</li>
              <li>Reporting Tools</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
            <p className="text-gray-600">
              Detailed documentation for integrating with our API endpoints.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;