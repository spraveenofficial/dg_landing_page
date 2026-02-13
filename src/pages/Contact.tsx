import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormData = {
    name: string;
    phone: string;
    interest: string;
    message: string;
};

const Contact = () => {
    const { register, handleSubmit, reset } = useForm<FormData>();

    useEffect(() => {
        document.title = "Contact DG Jewellers | Visit Our Showroom in Bhadaura";
    }, []);

    const onSubmit = (data: FormData) => {
        console.log("Form Submitted:", data);
        alert("Thank you for your inquiry. We will contact you shortly.");
        reset();
    };

    return (
        <div className="min-h-screen pt-20">
            <section className="bg-secondary/10 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Contact Us</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Begin your journey to owning a masterpiece. Reach out to us for appointments and inquiries.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-2xl font-serif text-primary mb-6">Get in Touch</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We invite you to visit our boutique to experience our collection in person.
                                For bespoke commissions, please book an appointment.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground mb-1">Our Boutique</h3>
                                    <p className="text-muted-foreground">Satramganj Bazar, Bhadaura<br />Masjid Road, Ghazipur</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground mb-1">Call Us</h3>
                                    <p className="text-muted-foreground">+91 98765 43210</p>
                                    <p className="text-sm text-muted-foreground mt-1">Mon - Sat: 11:00 AM - 8:00 PM</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                                    <p className="text-muted-foreground">concierge@dgjewellers.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card p-8 md:p-10 rounded-lg border border-border/40 shadow-sm"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" {...register("name", { required: true })} placeholder="Your Name" className="bg-background" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" {...register("phone", { required: true })} placeholder="+91 98765 00000" className="bg-background" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="interest">Type of Jewelry Interest</Label>
                                <Input id="interest" {...register("interest")} placeholder="e.g. Bridal Set, Ring, Custom" className="bg-background" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" {...register("message")} placeholder="Tell us about your requirements..." className="bg-background min-h-30" />
                            </div>

                            <Button type="submit" size="lg" className="w-full text-lg">
                                Send Inquiry
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
