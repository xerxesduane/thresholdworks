import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LAYERS } from "../data/content";
import { fadeUp, stagger, VIEWPORT } from "../lib/motion";
import SectionHeading from "./ui/SectionHeading";

export default function Layers() {
  return (
    <section id="layers" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-bl">
        <SectionHeading
          eyebrow="The system"
          title={
            <>
              Four layers, <span className="text-gradient-gold">built to work together.</span>
            </>
          }
          subtitle="Most agencies sell you Layer 3. I build all four, because the marketing doesn't work if the foundation is broken."
        />

        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {LAYERS.map((layer, i) => (
            <m.div
              key={layer.no}
              variants={fadeUp}
              className="glass glass-hover group relative overflow-visible rounded-2xl p-6"
            >
              {/* flow connector into the next layer (desktop) */}
              {i < LAYERS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-1/2 -right-[1.15rem] z-10 hidden -translate-y-1/2 text-gold/40 transition-colors duration-300 group-hover:text-gold/80 lg:block"
                >
                  <ArrowRight size={15} strokeWidth={2} />
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-5xl font-semibold text-cream/8 transition-colors duration-300 group-hover:text-gold/25">
                  {layer.no}
                </span>
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-gold/30 transition-all duration-300 group-hover:bg-gold group-hover:shadow-[0_0_12px_2px_rgba(218,164,66,0.45)]"
                />
              </div>
              <h3 className="mt-2 text-xl text-cream">{layer.name}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-gold/80">
                {layer.items}
              </p>
              <p className="mt-3 text-sm text-muted">{layer.blurb}</p>
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
              />
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
