import { T } from "gt-next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-6 py-10 w-full">
        <T>
          <h1 className="text-3xl font-bold text-zinc-100 mb-6">
            About This Project
          </h1>

          <div className="space-y-6 text-zinc-400 leading-relaxed">
            <p>
              This is a demonstration application built to showcase how
              internationalization works with General Translation and Next.js.
              The property listings shown here are entirely fictional and are not
              intended to represent real properties or prices.
            </p>

            <h2 className="text-xl font-semibold text-zinc-200">
              What This Demonstrates
            </h2>
            <p>
              This example app highlights several key internationalization
              features, including translated UI text, locale-aware currency
              formatting, localized date display, pluralization rules that adapt
              to each language, and automatic locale detection with URL-based
              routing.
            </p>

            <h2 className="text-xl font-semibold text-zinc-200">
              Technology
            </h2>
            <p>
              Built with Next.js and styled with Tailwind CSS, this application
              uses the gt-next library by General Translation for all
              internationalization. Translations are generated at build time
              using the GT CLI and stored as static JSON files, ensuring fast
              page loads without runtime API calls.
            </p>

            <h2 className="text-xl font-semibold text-zinc-200">
              How It Works
            </h2>
            <p>
              Every piece of visible text on this site is wrapped in translation
              components. Currency values automatically format according to the
              selected locale. Dates follow regional conventions. Plural forms
              adapt to the grammatical rules of each language. The middleware
              detects the visitor's preferred language and routes them to the
              appropriate locale prefix.
            </p>

            <h2 className="text-xl font-semibold text-zinc-200">
              Open Source
            </h2>
            <p>
              The full source code for this project is available on GitHub. Feel
              free to explore the code, fork the repository, and use it as a
              starting point for your own internationalized applications.
            </p>
          </div>
        </T>
      </main>

      <Footer />
    </div>
  );
}
