import { motion } from "framer-motion";

const PhilosophySection = () => {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <div className="flex flex-col items-center gap-4">
                        <span className="w-12 h-[1px] bg-primary/60"></span>
                        <span className="uppercase tracking-[0.2em] text-xs text-primary font-medium">Our Philosophy</span>
                        <span className="w-12 h-[1px] bg-primary/60"></span>
                    </div>

                    <p className="text-xl md:text-2xl font-serif leading-relaxed text-foreground/90">
                        "True luxury lies not just in the rarity of the gem, but in the patience of the hand that sets it."
                    </p>

                    <p className="text-muted-foreground leading-loose">
                        At DG Jewellers, we believe that jewelry is more than ornamentation—it is a legacy.
                        Every curve, every polish, and every setting is executed with an obsession for perfection,
                        honoring age-old techniques passed down through generations of master artisans.
                    </p>
                </motion.div>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        </section>
    );
};

export default PhilosophySection;
