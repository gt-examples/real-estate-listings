import { T, Var, Currency, Num, DateTime, Branch, Plural } from "gt-next";
import Link from "next/link";
import type { Listing } from "@/data/listings";

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link href={`/listing/${listing.id}`}>
      <article className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition group">
        {/* Photo */}
        <div className="h-48 overflow-hidden">
          <img
            src={listing.image}
            alt={listing.address}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            loading="lazy"
          />
        </div>

        <div className="p-5">
          <T>
            {/* Price & Badge */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold text-zinc-100">
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
                  singular={
                    <>
                      <Num>{listing.beds}</Num>
                      {" bedroom"}
                    </>
                  }
                  plural={
                    <>
                      <Num>{listing.beds}</Num>
                      {" bedrooms"}
                    </>
                  }
                />
              </span>
              <span className="text-zinc-700">|</span>
              <span>
                <Plural
                  n={listing.baths}
                  singular={
                    <>
                      <Num>{listing.baths}</Num>
                      {" bathroom"}
                    </>
                  }
                  plural={
                    <>
                      <Num>{listing.baths}</Num>
                      {" bathrooms"}
                    </>
                  }
                />
              </span>
              <span className="text-zinc-700">|</span>
              <span>
                <Num>{listing.sqft}</Num>
                {" sq ft"}
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
    </Link>
  );
}
