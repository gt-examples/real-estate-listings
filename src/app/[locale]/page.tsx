import { T } from "gt-next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { listings } from "@/data/listings";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Disclaimer */}
      <div className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <p className="text-sm text-zinc-400 text-center">
            <T>
              This is an example application built with General Translation to
              demonstrate internationalization. These are not real listings.
            </T>
          </p>
        </div>
      </div>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-10 w-full">
        {/* Hero */}
        <T>
          <section className="mb-10">
            <h1 className="text-3xl font-bold text-zinc-100 mb-2">
              Find Your Dream Home
            </h1>
            <p className="text-zinc-400 max-w-2xl">
              Browse our curated selection of properties across the United
              States. From modern city apartments to spacious family homes, find
              the perfect place to call your own.
            </p>
          </section>
        </T>

        {/* Filter Section */}
        <T>
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-zinc-300 mb-4">
              Filter Listings
            </h2>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded bg-zinc-800 text-zinc-300 text-sm hover:bg-zinc-700 transition border border-zinc-700">
                All Properties
              </button>
              <button className="px-4 py-2 rounded bg-zinc-800 text-zinc-300 text-sm hover:bg-zinc-700 transition border border-zinc-700">
                Houses
              </button>
              <button className="px-4 py-2 rounded bg-zinc-800 text-zinc-300 text-sm hover:bg-zinc-700 transition border border-zinc-700">
                Apartments
              </button>
              <button className="px-4 py-2 rounded bg-zinc-800 text-zinc-300 text-sm hover:bg-zinc-700 transition border border-zinc-700">
                Condos
              </button>
            </div>
          </section>
        </T>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
