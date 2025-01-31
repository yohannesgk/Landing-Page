import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-gray-600">
              By accessing or using MultiSacco's services, you agree to be bound by these terms and conditions.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="text-gray-600">
              MultiSacco grants you a limited, non-exclusive, non-transferable license to access and use our services for your SACCO management needs.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
            <p className="text-gray-600">
              You are specifically restricted from all of the following:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Publishing any website material in any other media</li>
              <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
              <li>Publicly performing and/or showing any website material</li>
              <li>Using this website in any way that is or may be damaging to this website</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;