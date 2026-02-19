import { motion } from "framer-motion";
import { useEffect } from "react";

const RefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Cancellation & Refunds | DG Jewellers";
    }, []);

    return (
        <div className="min-h-screen pt-20">
            <section className="bg-secondary/10 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Cancellation & Refunds</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Our commitment to your satisfaction and our policy on returns.
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
                    <p>
                        At DG Jewellers, we take great pride in the quality and craftsmanship of our jewelry.
                        We want you to be completely satisfied with your purchase.
                    </p>

                    <h3>Cancellation Policy</h3>
                    <p>
                        Orders can be cancelled within 24 hours of placement without any penalty.
                        If the order has already been processed or shipped, cancellation may not be possible.
                        For custom or bespoke orders, cancellations are only accepted within 24 hours
                        of the initial deposit, after which the deposit may be non-refundable due to the
                        commencement of work.
                    </p>

                    <h3>Refunds & Returns</h3>
                    <p>
                        We accept returns for eligible items within 7 days of delivery.
                        To be eligible for a return, your item must be unused, in the same condition that you received it,
                        and in its original packaging with all tags and certificates intact.
                    </p>
                    <p>
                        Once your return is received and inspected, we will notify you of the approval or rejection of your refund.
                        If approved, your refund will be processed, and a credit will automatically be applied to your
                        original method of payment within 7-10 business days.
                    </p>

                    <h3>Non-Returnable Items</h3>
                    <ul>
                        <li>Custom-made or personalized jewelry</li>
                        <li>Items that have been resized or modified</li>
                        <li>Items showing signs of wear or damage</li>
                    </ul>

                    <h3>Contact Us</h3>
                    <p>
                        If you have any questions related to refunds and returns, please contact us at <a href="mailto:concierge@dgjewellers.com" className="text-primary hover:underline">concierge@dgjewellers.com</a>.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default RefundPolicy;
