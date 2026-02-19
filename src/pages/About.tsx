import { motion } from "framer-motion";
import { Clock, Hammer, Heart, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => {
    const values = [
        {
            icon: <Hammer className="w-6 h-6 text-primary" />,
            title: "Master Craftsmanship",
            description: "Decades of expertise in every cut and setting.",
        },
        {
            icon: <Star className="w-6 h-6 text-primary" />,
            title: "Uncompromising Quality",
            description: "Only the finest gems and metals make the cut.",
        },
        {
            icon: <Heart className="w-6 h-6 text-primary" />,
            title: "Passion for Design",
            description: "Artistry that breathes life into metal and stone.",
        },
        {
            icon: <Clock className="w-6 h-6 text-primary" />,
            title: "Timeless Heritage",
            description: "Bridging the gap between tradition and modernity.",
        },
    ];

    return (
        <div className="min-h-screen pt-20">
            <Helmet>
                <title>About DG Jewellers | Trusted Jewelers in Ghazipur since 1995</title>
                <meta name="description" content="A legacy of gold and glory. DG Jewellers in Bhadaura, Ghazipur has been crafting exquisite jewelry for over 25 years. Learn about our heritage and values." />
            </Helmet>

            {/* Hero / Split Layout */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-125 md:h-150 rounded-lg overflow-hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1000&auto=format&fit=crop"
                            alt="Master Craftsman"
                            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-secondary-foreground/80 uppercase tracking-widest text-sm">
                                Our Story
                            </h2>
                            <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
                                A Legacy of <br /><span className="text-primary">Gold & Glory</span>
                            </h1>
                        </div>

                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Located in the heart of Bhadaura, Ghazipur, DG Jewellers has established itself as a beacon of trust and elegance.
                            We specialize in exquisite Gold, Diamond, and Silver jewelry, offering designs that blend traditional artistry with modern sophistication.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Known for our premium 18k gold-plated collections and customer-first approach, we take pride in being a part of your celebrations.
                            With a reputation built on quality and authenticity (Rated 4.1/5), every piece at DG Jewellers is a promise of purity.
                        </p>

                        <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                            Legal Business Name: <span className="text-primary font-serif">PRAVEEN KUMAR SINGH</span>
                        </p>

                        <div className="pt-8 border-t border-border/40 flex gap-8">
                            <div>
                                <span className="block text-3xl font-serif text-primary">25+</span>
                                <span className="text-sm text-muted-foreground uppercase tracking-wider">Years</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-serif text-primary">5k+</span>
                                <span className="text-sm text-muted-foreground uppercase tracking-wider">Clients</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-serif text-primary">100+</span>
                                <span className="text-sm text-muted-foreground uppercase tracking-wider">Awards</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-secondary/20 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif text-foreground">Our Values</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            The pillars that define our artistry and commitment to excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-background/40 backdrop-blur-sm p-8 rounded-lg border border-border/40 hover:border-primary/40 transition-colors group text-center"
                            >
                                <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-serif text-foreground mb-3">{value.title}</h3>
                                <p className="text-muted-foreground text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
