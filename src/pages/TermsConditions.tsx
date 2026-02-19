import { motion } from "framer-motion";
import { useEffect } from "react";

const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Terms & Conditions | DG Jewellers";
    }, []);

    return (
        <div className="min-h-screen pt-20">
            <section className="bg-secondary/10 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Terms and Conditions</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Please read these terms carefully before using our services.
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
                    <h3>1. Introduction</h3>
                    <p>
                        Welcome to DG Jewellers. These Terms and Conditions govern your use of our website and the purchase of our products.
                        By accessing our website, you agree to these terms.
                    </p>

                    <h3>2. Intellectual Property</h3>
                    <p>
                        All content on this website, including but not limited to text, graphics, logos, images, and software,
                        is the property of DG Jewellers and is protected by copyright laws. You may not use any content
                        without our express written permission.
                    </p>

                    <h3>3. Product Accuracy</h3>
                    <p>
                        We make every effort to display the colors and images of our products as accurately as possible.
                        However, we cannot guarantee that your monitor's display of any color will be accurate.
                        We reserve the right to limit the sales of our products to any person or region.
                    </p>

                    <h3>4. Pricing and Payment</h3>
                    <p>
                        Prices for our products are subject to change without notice. We reserve the right to modify or
                        discontinue the Service (or any part or content thereof) without notice at any time.
                        We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
                    </p>

                    <h3>5. Governing Law</h3>
                    <p>
                        These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
                        Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Ghazipur.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default TermsConditions;
