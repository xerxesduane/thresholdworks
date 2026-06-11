import { m } from "framer-motion";
import { ArrowUpRight, Cable, ChartNoAxesCombined, Layers3, UserRoundCheck } from "lucide-react";
import { fadeUp, stagger, VIEWPORT } from "../lib/motion";
import SectionHeading from "./ui/SectionHeading";

const fitSignals = [
  {
    icon: UserRoundCheck,
    title: "You are owner-led",
    body: "You want direct answers and one trusted person who understands the whole business, not another layer of account management.",
  },
  {
    icon: Cable,
    title: "Your tools do not talk",
    body: "Your website, CRM, spreadsheets, accounting, and daily workflows all work, but not together.",
  },
  {
    icon: Layers3,
    title: "You have outgrown the patchwork",
    body: "Manual work and duplicated data are slowing the team down, but enterprise consulting feels excessive.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "You are ready to grow properly",
    body: "You need systems that solve today's problems without becoming tomorrow's bottleneck.",
  },
];

export default function WhoFor() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-bl">
        <SectionHeading
          eyebrow="Who this is for"
          title={
            <>
              For businesses ready to stop{" "}
              <span className="text-gradient-gold">holding it all together manually.</span>
            </>
          }
          subtitle="We work best where the business is growing, the tools are multiplying, and someone needs to make the whole operation make sense."
        />

        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 sm:grid-cols-2"
        >
          {fitSignals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <m.article
                key={signal.title}
                variants={fadeUp}
                className="group relative bg-ink/95 p-6 transition-colors duration-300 hover:bg-cream/[0.04] sm:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition duration-300 group-hover:bg-gold group-hover:text-ink">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <span className="font-mono text-[10px] text-muted-dark">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 text-xl text-cream">{signal.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
                  {signal.body}
                </p>
              </m.article>
            );
          })}
        </m.div>

        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            data-cursor="link"
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-5 py-3 font-mono text-xs uppercase tracking-wider text-gold transition hover:border-gold hover:bg-gold hover:text-ink"
          >
            Talk through your setup
            <ArrowUpRight size={14} strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </section>
  );
}
