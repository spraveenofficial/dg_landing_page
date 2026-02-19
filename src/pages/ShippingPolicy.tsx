import { motion } from "framer-motion";
import { useEffect } from "react";

const ShippingPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Shipping Policy | DG Jewellers";
    }, []);

    return (
        <div className="min-h-screen pt-20">
            <section className="bg-secondary/10 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Shipping Policy</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Information regarding delivery of your precious purchases.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="prose prose-lg prose-headings:font-serif prose-headings:text-primary text-muted-foreground"
                >
                    <h3>Shipping Areas</h3>
                    <p>
                        We currently ship to all major cities and towns across India.
                        For international shipping inquiries, please contact our concierge service directly.
                    </p>

                    <h3>Delivery Timelines</h3>
                    <p>
                        Ready-to-ship items are typically dispatched within 2-3 business days.
                        Delivery times vary between 3-7 business days depending on your location.
                        Made-to-order and bespoke items require additional time for crafting, which will be communicated
                        at the time of order confirmation.
                    </p>

                    <h3>Insurance</h3>
                    <p>
                        All our shipments are fully insured until they reach your doorstep.
                        We require a signature upon delivery for all packages to ensure the security of your purchase.
                        Please inspect the package for any tamper evident signs before accepting the delivery.
                    </p>

                    <h3>Shipping Charges</h3>
                    <p>
                        We offer complimentary shipping on all orders above ₹50,000 within India.
                        For orders below this amount, a standard shipping fee applies.
                        Expedited shipping options are available at an additional cost.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default ShippingPolicy;
