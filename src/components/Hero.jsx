import { ArrowRightIcon, PlayIcon, ZapIcon, CheckIcon } from "lucide-react";
import { PrimaryButton, GhostButton } from "./Buttons";

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
        <header className="relative z-10">
            <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 pt-32 max-md:w-screen md:pt-26 mb-5 md:mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
                    <div className="text-left">
                        <a href="/" className="bg-white/10 rounded-2xl px-2 py-1 inline-flex justify-start items-center gap-3 pr-3 mb-6 ">
                            <div className="flex -space-x-3">
                                {trustedUserImages.map((src, index) => (
                                    <img
                                        key={index} src={src}
                                        alt={`User ${index + 1}`}
                                        className="h-8 w-8 rounded-full border border-black/90" />
                                ))}
                            </div>
                            <p className="text-sm font-light text-gery-200/90">Trusted by brands & founders worldwide</p>
                        </a>
                        <h1 className="font-bold text-4xl md:text-5xl mb-6 leading-tight max-w-xl ">We design & build <br />
                            <span className=" bg-linear-to-br from-violet-200 to-violet-300 bg-clip-text text-transparent">high-impact digital experiences</span></h1>
                        <p className="text-white/80 mb-6 max-w-lg">A creative digital agency helping startups and businesses grow through thoughtful design, scalable development and performance-driven strategy.</p>




                        <div className="rounded-xl flex flex-col md:flex-row flex-wrap gap-4 mb-8 text-sm">
                            <PrimaryButton className="px-5 py-3 max-sm:w-full max-sm:justify-center">
                                Get Started
                                <ArrowRightIcon className="size-5" />
                            </PrimaryButton>
                            <GhostButton className="px-5 py-3 max-sm:w-full max-sm:justify-center">
                                <PlayIcon className="size-5" />
                                Watch Demo
                            </GhostButton>
                        </div>



                        <div className="flex items-center overflow-hidden rounded bg-white/10 text-sm text-gray-200 max-sm:justify-center sm:inline-flex ">

                            <div className="flex items-center gap-2 p-2 px-3 transition-colors hover:bg-white/3 sm:px-6.5 ">
                                <ZapIcon className="size-4 text-sky-500 " />
                                <div className="ml-2">
                                    <p>Fastest delivery</p>
                                    <p className="text-xs text-gray-400">48 hours turnaround time</p>
                                </div>
                            </div>
                            <div className="block h-4 w-[0.5px]  bg-white"></div>

                            <div className="flex items-center gap-2 p-2 px-3 transition-colors hover:bg-white/3 sm:px-6.5 ">
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



                    <div className="mx-auto w-full max-w-lg">
                        <div className="relative aspect-16/10 ">
                            <img
                                src={mainImageUrl}
                                alt="Main Hero"
                                className="rounded-3xl shadow-2xl object-cover w-full h-auto  "
                            />
                            <p className="bg-gray-600/20 backdrop-blur text-white rounded-2xl absolute top-3 left-3 px-2 py-1  text-xs">Branding • Web • Growth</p>

                            <GhostButton className="absolute bottom-3 right-3 px-3 py-2 text-xs">
                                <PlayIcon className="size-4" />
                                <span className="text-xs">See case study</span>
                            </GhostButton>
                        </div>
                        <div className="flex justify-start items-center gap-2 mt-4">
                            {galleryStripImages.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Gallery ${index + 1}`}
                                    className=" w-15 rounded-lg object-cover shadow-lg"
                                />
                            ))}

                            <div className="ml-3 flex items-center gap-2" >
                                <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 duration-300" />

                                    <span className="relative inline-flex size-2 rounded-full bg-green-600" />
                                </div>
                                <p className="text-sm text-white/60">  20+ completed projects</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-gray-300/6 mt-10  border-y border-gray-400/10 mb-20 " >
                <div className="mx-auto max-w-6xl px-6">
                    <div className="w-full overflow-hidden py-6">
                        <div className="animate-marquee flex items-center justify-center gap-14 whitespace-nowrap">
                            {trustedLogosText.concat(trustedLogosText).map((logo, i) => (
                                <span
                                    key={i}
                                    className="mx-2 md:mx-6 text-sm font-semibold tracking-wide text-gray-400 transition-colors hover:text-gray-300 md:text-base"
                                >
                                    {logo}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </header >
    );
}
