import { Star } from "lucide-react";
import { TRUST } from "../data/trust";

/**
 * Google rating badge. Renders nothing until TRUST.enabled is true and a real
 * google rating is set (see src/data/trust.ts). Safe to mount anywhere.
 */
export default function GoogleRating({ className = "" }: { className?: string }) {
  if (!TRUST.enabled || !TRUST.google) return null;
  const { rating, reviewCount, url } = TRUST.google;
  const full = Math.round(rating);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Rated ${rating} out of 5 from ${reviewCount} Google reviews`}
      className={`inline-flex items-center gap-2.5 rounded-full border border-cream/10 bg-cream/5 px-4 py-2 text-sm transition-colors hover:border-gold/40 ${className}`}
    >
      <span className="font-semibold text-cream">{rating.toFixed(1)}</span>
      <span className="flex items-center gap-0.5 text-gold" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} size={14} fill={i < full ? "currentColor" : "none"} strokeWidth={i < full ? 0 : 1.5} />
        ))}
      </span>
      <span className="text-muted">{reviewCount} Google reviews</span>
    </a>
  );
}
