import { T } from "gt-next";
import { getGT } from "gt-next/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function Contact() {
  const gt = await getGT();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-6 py-10 w-full">
        <T>
          <h1 className="text-3xl font-bold text-zinc-100 mb-2">
            Get in Touch
          </h1>
          <p className="text-zinc-400 mb-8">
            Interested in a property or have questions? Send us a message and
            our team will get back to you within 24 hours.
          </p>
        </T>

        <form className="space-y-6">
          <T>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 text-sm focus:outline-none focus:border-zinc-600 transition placeholder-zinc-600"
                  placeholder={gt("John")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 text-sm focus:outline-none focus:border-zinc-600 transition placeholder-zinc-600"
                  placeholder={gt("Doe")}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 text-sm focus:outline-none focus:border-zinc-600 transition placeholder-zinc-600"
                placeholder={gt("john@example.com")}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Subject
              </label>
              <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 text-sm focus:outline-none focus:border-zinc-600 transition">
                <option>Property Inquiry</option>
                <option>Schedule a Viewing</option>
                <option>General Question</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 text-sm focus:outline-none focus:border-zinc-600 transition placeholder-zinc-600 resize-none"
                placeholder={gt("Tell us what you're looking for...")}
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-zinc-100 text-zinc-900 rounded-lg font-medium text-sm hover:bg-zinc-200 transition"
            >
              Send Message
            </button>
          </T>
        </form>
      </main>

      <Footer />
    </div>
  );
}
