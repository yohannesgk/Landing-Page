import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Latest SACCO Trends</h2>
            <p className="text-gray-600 mb-4">Discover the latest trends in SACCO management and financial technology...</p>
            <span className="text-primary">Read more →</span>
          </article>
          <article className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Digital Transformation</h2>
            <p className="text-gray-600 mb-4">How digital solutions are revolutionizing SACCO operations...</p>
            <span className="text-primary">Read more →</span>
          </article>
          <article className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Member Success Stories</h2>
            <p className="text-gray-600 mb-4">Real stories from SACCOs that have transformed their operations...</p>
            <span className="text-primary">Read more →</span>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;