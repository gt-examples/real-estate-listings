import { T, Var, Currency, Num, DateTime, Branch, Plural } from "gt-next";
import Header from "@/components/Header";

const listings = [
  {
    id: 1,
    type: "house" as const,
    price: 749000,
    sqft: 2400,
    beds: 4,
    baths: 3,
    address: "1423 Maple Drive",
    city: "Austin, TX",
    listed: new Date("2026-01-15"),
  },
  {
    id: 2,
    type: "apartment" as const,
    price: 385000,
    sqft: 1100,
    beds: 2,
    baths: 1,
    address: "88 Harbor View, Unit 12C",
    city: "San Francisco, CA",
    listed: new Date("2026-02-03"),
  },
  {
    id: 3,
    type: "condo" as const,
    price: 520000,
    sqft: 1650,
    beds: 3,
    baths: 2,
    address: "310 Park Avenue, Suite 7B",
    city: "New York, NY",
    listed: new Date("2026-02-10"),
  },
  {
    id: 4,
    type: "house" as const,
    price: 1250000,
    sqft: 3800,
    beds: 5,
    baths: 4,
    address: "9 Cliffside Lane",
    city: "Malibu, CA",
    listed: new Date("2025-12-20"),
  },
  {
    id: 5,
    type: "apartment" as const,
    price: 295000,
    sqft: 850,
    beds: 1,
    baths: 1,
    address: "455 Elm Street, Unit 3A",
    city: "Portland, OR",
    listed: new Date("2026-02-14"),
  },
  {
    id: 6,
    type: "condo" as const,
    price: 675000,
    sqft: 2000,
    beds: 3,
    baths: 2,
    address: "22 Lakeshore Boulevard, Unit 5D",
    city: "Chicago, IL",
    listed: new Date("2026-01-28"),
  },
];

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
            <article
              key={listing.id}
              className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition"
            >
              {/* Photo placeholder */}
              <div className="h-48 bg-zinc-800 flex items-center justify-center">
                <span className="text-zinc-600 text-sm">
                  <T>Photo</T>
                </span>
              </div>

              <div className="p-5">
                <T>
                  {/* Price & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-zinc-100">
                      <Currency currency="USD">
                        {listing.price}
                      </Currency>
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded bg-zinc-800 text-zinc-400 border border-zinc-700 uppercase tracking-wide">
                      <Branch
                        branch={listing.type}
                        house="House"
                        apartment="Apartment"
                        condo="Condo"
                      />
                    </span>
                  </div>

                  {/* Address */}
                  <p className="text-zinc-300 font-medium">
                    <Var>{listing.address}</Var>
                  </p>
                  <p className="text-zinc-500 text-sm mb-4">
                    <Var>{listing.city}</Var>
                  </p>

                  {/* Details */}
                  <div className="flex items-center gap-4 text-sm text-zinc-400 mb-3">
                    <span>
                      <Plural
                        n={listing.beds}
                        singular={<><Num>{listing.beds}</Num>{" bedroom"}</>}
                        plural={<><Num>{listing.beds}</Num>{" bedrooms"}</>}
                      />
                    </span>
                    <span className="text-zinc-700">|</span>
                    <span>
                      <Plural
                        n={listing.baths}
                        singular={<><Num>{listing.baths}</Num>{" bathroom"}</>}
                        plural={<><Num>{listing.baths}</Num>{" bathrooms"}</>}
                      />
                    </span>
                    <span className="text-zinc-700">|</span>
                    <span>
                      <Num>{listing.sqft}</Num>{" sq ft"}
                    </span>
                  </div>

                  {/* Listed date */}
                  <p className="text-xs text-zinc-500">
                    {"Listed "}
                    <DateTime>{listing.listed}</DateTime>
                  </p>
                </T>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-zinc-500">
          <T>
            Built with General Translation
          </T>
        </div>
      </footer>
    </div>
  );
}
