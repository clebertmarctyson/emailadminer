import Image from "next/image";
import SignInButton from "@/components/SignInButton";
import FeatureCard from "@/components/FeatureCard";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      <section>
        <section className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Take Control of Your Inbox
          </h1>
          <p className="text-xl mb-8">
            Streamline your Gmail management with EmailAdminer. Delete emails in
            bulk, manage subscriptions, and boost your productivity.
          </p>
          <div className="mx-auto max-w-xs flex justify-center">
            <SignInButton />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Bulk Email Deletion"
                description="Easily remove hundreds of emails based on sender name, saving you time and keeping your inbox clutter-free."
                icon="🗑️"
              />
              <FeatureCard
                title="Subscription Management"
                description="Keep track of your email subscriptions and unsubscribe with ease, all from one central dashboard."
                icon="📊"
              />
              <FeatureCard
                title="Gmail Integration"
                description="Seamlessly connect with your Gmail account for efficient management and synchronized operations."
                icon="🔄"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              How It Works
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/dashboard-mockup.png"
                  alt="EmailAdminer Dashboard"
                  width={500}
                  height={300}
                  priority
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <ol className="list-decimal list-inside space-y-4">
                  <li className="text-lg">
                    Connect your Gmail account securely
                  </li>
                  <li className="text-lg">
                    Select emails to delete based on sender or other criteria
                  </li>
                  <li className="text-lg">
                    Review and manage your active subscriptions
                  </li>
                  <li className="text-lg">
                    Enjoy a cleaner, more organized inbox
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Streamline Your Inbox?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of users who have regained control of their email.
            </p>
            <div className="mx-auto max-w-xs flex justify-center">
              <SignInButton />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
