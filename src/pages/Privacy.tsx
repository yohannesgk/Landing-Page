import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-600">
              At MultiSacco, we take your privacy seriously. This privacy policy describes how we collect, use, and protect your personal information.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-600">
              We collect information that you provide directly to us, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Transaction data</li>
              <li>Usage information</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-600">
              We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you about updates and new features.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;