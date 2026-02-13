import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury Jewelry"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-secondary-foreground/80 uppercase tracking-[0.3em] text-sm mb-4">
                        Established 1995
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-foreground mb-6">
                        Timeless <span className="text-primary">Elegance</span>
                        <br />
                        by DG
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Discover a collection where heritage meets modern artistry.
                        Handcrafted for those who appreciate the finest details.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Button
                        size="lg"
                        className="text-lg px-8 py-6 rounded-none border border-primary bg-transparent hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300"
                        onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore Collection
                    </Button>
                </motion.div>
            </div>

            {/* Initial Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
