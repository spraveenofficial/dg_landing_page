import { motion } from "framer-motion";
import { useEffect } from "react";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Privacy Policy | DG Jewellers";
    }, []);

    return (
        <div className="min-h-screen pt-20">
            <section className="bg-secondary/10 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Privacy Policy</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        How we handle and protect your personal information.
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
                    <h3>Information Collection</h3>
                    <p>
                        We collect information when you visit our site, place an order, subscribe to our newsletter,
                        or fill out a form. This may include your name, email address, mailing address,
                        phone number, and payment information.
                    </p>

                    <h3>Use of Information</h3>
                    <p>
                        Any of the information we collect from you may be used to:
                    </p>
                    <ul className="list-disc pl-5">
                        <li>Personalize your experience</li>
                        <li>Improve our website</li>
                        <li>Process transactions</li>
                        <li>Send periodic emails regarding your order or other products and services</li>
                    </ul>

                    <h3>Information Protection</h3>
                    <p>
                        We implement a variety of security measures to maintain the safety of your personal information.
                        Your personal information is contained behind secured networks and is only accessible by a limited number
                        of persons who have special access rights to such systems, and are required to keep the information confidential.
                    </p>

                    <h3>Cookies</h3>
                    <p>
                        We use cookies to help us remember and process the items in your shopping cart, understand and save your
                        preferences for future visits, and compile aggregate data about site traffic and site interaction.
                    </p>

                    <h3>Third-Party Disclosure</h3>
                    <p>
                        We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.
                        This does not include website hosting partners and other parties who assist us in operating our website,
                        conducting our business, or serving you, so long as those parties agree to keep this information confidential.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
