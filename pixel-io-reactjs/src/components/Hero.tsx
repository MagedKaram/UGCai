import { ArrowRightIcon, PlayIcon, ZapIcon, CheckIcon } from "lucide-react";
import { PrimaryButton, GhostButton } from "./Buttons";
import { motion } from "framer-motion";

export default function Hero() {
  const trustedUserImages = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
  ];

  const mainImageUrl =
    "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1600&auto=format&fit=crop";

  const galleryStripImages = [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=100",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=100",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=100",
  ];

  const trustedLogosText = [
    "Startups",
    "Scale-ups",
    "Founders",
    "Global teams",
    "Creative brands",
  ];

  return (
    <>
      <section id="home" className="relative z-10">
        <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 pt-32 max-md:w-screen md:pt-26">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="text-left">
              <motion.a
                href="https://prebuiltui.com/tailwind-templates?ref=pixel-forge"
                className="mb-6 inline-flex items-center justify-start gap-3 rounded-full bg-white/10 py-1.5 pr-4 pl-3"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                }}
              >
                <div className="flex -space-x-2">
                  {trustedUserImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Client ${i + 1}`}
                      className="size-6 rounded-full border border-black/50"
                      width={40}
                      height={40}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-200/90">
                  Trusted by brands & founders worldwide
                </span>
              </motion.a>

              <motion.h1
                className="mb-6 max-w-xl text-4xl leading-tight font-bold md:text-5xl"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.1,
                }}
              >
                We design & build <br />
                <span className="bg-linear-to-r from-indigo-300 to-indigo-400 bg-clip-text text-transparent">
                  high-impact digital experiences
                </span>
              </motion.h1>

              <motion.p
                className="mb-8 max-w-lg text-gray-300"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.2,
                }}
              >
                A creative digital agency helping startups and businesses grow
                through thoughtful design, scalable development and
                performance-driven strategy.
              </motion.p>

              <motion.div
                className="mb-8 flex flex-col items-center gap-4 sm:flex-row"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.3,
                }}
              >
                <a href="/" className="w-full sm:w-auto">
                  <PrimaryButton className="px-7 py-3 max-sm:w-full">
                    Start your project
                    <ArrowRightIcon className="size-4" />
                  </PrimaryButton>
                </a>

                <GhostButton className="px-5 py-3 max-sm:w-full max-sm:justify-center">
                  <PlayIcon className="size-4" />
                  View our work
                </GhostButton>
              </motion.div>

              <div className="flex items-center overflow-hidden rounded bg-white/10 text-sm text-gray-200 max-sm:justify-center sm:inline-flex">
                <div className="flex items-center gap-2 p-2 px-3 transition-colors hover:bg-white/3 sm:px-6.5">
                  <ZapIcon className="size-4 text-sky-500" />
                  <div>
                    <div>Strategy-led execution</div>
                    <div className="text-xs text-gray-400">
                      Focused on growth & results
                    </div>
                  </div>
                </div>

                <div className="hidden h-6 w-px bg-white/6 sm:block" />

                <div className="flex items-center gap-2 p-2 px-3 transition-colors hover:bg-white/3 sm:px-6.5">
                  <CheckIcon className="size-4 text-cyan-500" />
                  <div>
                    <div>Full-service delivery</div>
                    <div className="text-xs text-gray-400">
                      Design, dev & marketing
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: modern mockup card */}
            <motion.div
              className="mx-auto w-full max-w-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.5,
              }}
            >
              <motion.div className="overflow-hidden rounded-3xl border border-white/6 bg-linear-to-b from-black/50 to-transparent shadow-2xl">
                <div className="relative aspect-16/10 bg-gray-900">
                  <img
                    src={mainImageUrl}
                    alt="agency-work-preview"
                    className="h-full w-full object-cover object-center"
                  />

                  <div className="absolute top-4 left-4 rounded-full bg-black/15 px-3 py-1 text-xs backdrop-blur-sm">
                    Branding • Web • Growth
                  </div>

                  <div className="absolute right-4 bottom-4">
                    <button className="inline-flex items-center gap-2 rounded-full bg-white/6 px-4 py-2 backdrop-blur-sm transition hover:bg-white/10 focus:outline-none">
                      <PlayIcon className="size-4" />
                      <span className="text-xs">See case study</span>
                    </button>
                  </div>
                </div>
              </motion.div>

              <div className="mt-4 flex items-center justify-start gap-3">
                {galleryStripImages.map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 70,
                      mass: 1,
                      delay: 0.1 + i * 0.1,
                    }}
                    className="h-10 w-14 overflow-hidden rounded-lg border border-white/6"
                  >
                    <img
                      src={src}
                      alt="project-thumbnail"
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                ))}
                <motion.div
                  className="ml-2 flex items-center gap-2 text-sm text-gray-400"
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 70,
                    mass: 1,
                    delay: 0.2,
                  }}
                >
                  <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 duration-300" />

                    <span className="relative inline-flex size-2 rounded-full bg-green-600" />
                  </div>
                  20+ completed projects
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <motion.section
        className="border-y border-white/6 bg-white/1 max-md:mt-10"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="w-full overflow-hidden py-6">
            <div className="animate-marquee flex items-center justify-center gap-14 whitespace-nowrap">
              {trustedLogosText.concat(trustedLogosText).map((logo, i) => (
                <span
                  key={i}
                  className="mx-6 text-sm font-semibold tracking-wide text-gray-400 transition-colors hover:text-gray-300 md:text-base"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
