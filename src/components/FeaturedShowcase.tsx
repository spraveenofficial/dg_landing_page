import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const products = [
    {
        id: 1,
        name: "Royal Heritage Kundan Set",
        image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Solitaire Diamond Ring",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "18k Gold Plated Bangles",
        image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 4,
        name: "Diamond Drop Earrings",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
    },
];

const FeaturedShowcase = () => {
    return (
        <section id="collections" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Curated Masterpieces</h2>
                    <p className="text-muted-foreground">Select pieces from our exclusive vault.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative overflow-hidden rounded-lg aspect-4/5"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-6 text-center">
                                <h3 className="text-2xl font-serif text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {product.name}
                                </h3>
                                <Button
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-black translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                                    onClick={() => window.open(`https://wa.me/919876543210?text=I'm interested in ${product.name}`, '_blank')}
                                >
                                    Inquire
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedShowcase;
