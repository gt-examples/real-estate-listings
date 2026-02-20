import { T, Var, Currency, Num, DateTime, Branch, Plural } from "gt-next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { listings } from "@/data/listings";

export default async function ListingDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = listings.find((l) => l.id === parseInt(id));

  if (!listing) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto px-6 py-10 w-full">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition mb-6"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <T>Back to listings</T>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src={listing.image}
              alt={listing.address}
              className="w-full h-80 lg:h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <T>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-zinc-100">
                  <Currency currency="USD">{listing.price}</Currency>
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

              <h1 className="text-xl font-semibold text-zinc-200 mb-1">
                <Var>{listing.address}</Var>
              </h1>
              <p className="text-zinc-500 mb-6">
                <Var>{listing.city}</Var>
              </p>
            </T>

            {/* Stats grid */}
            <T>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-zinc-100">
                    <Num>{listing.beds}</Num>
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    <Plural
                      n={listing.beds}
                      singular="Bedroom"
                      plural="Bedrooms"
                    />
                  </p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-zinc-100">
                    <Num>{listing.baths}</Num>
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    <Plural
                      n={listing.baths}
                      singular="Bathroom"
                      plural="Bathrooms"
                    />
                  </p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-zinc-100">
                    <Num>{listing.sqft}</Num>
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">sq ft</p>
                </div>
              </div>
            </T>

            {/* Description */}
            <T>
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-zinc-300 mb-3">
                  Description
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  <Var>{listing.description}</Var>
                </p>
              </div>
            </T>

            {/* Listed date */}
            <T>
              <div className="border-t border-zinc-800 pt-4">
                <p className="text-sm text-zinc-500">
                  {"Listed "}
                  <DateTime>{listing.listed}</DateTime>
                </p>
              </div>
            </T>

            {/* CTA */}
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-zinc-100 text-zinc-900 rounded-lg font-medium text-sm hover:bg-zinc-200 transition"
              >
                <T>Contact About This Property</T>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
