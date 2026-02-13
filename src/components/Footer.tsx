import { Facebook, Gem, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border/40 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Gem className="w-5 h-5 text-primary" />
                            <span className="text-xl font-serif font-bold tracking-wider">
                                DG Jewellers
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Crafting timeless elegance since 1995. Each piece tells a story of heritage, artistry, and luxury.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-serif font-medium text-lg mb-6">Explore</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Collections</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Our Heritage</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Bespoke Services</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Care Guide</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-serif font-medium text-lg mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif font-medium text-lg mb-6">Visit Us</h4>
                        <address className="not-italic text-sm text-muted-foreground space-y-3">
                            <p>Satramganj Bazar,</p>
                            <p>Bhadaura Masjid Road, Ghazipur</p>
                            <p className="text-primary">+91 98765 43210</p>
                            <div className="flex gap-4 mt-6">
                                <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                                    <Twitter className="w-4 h-4" />
                                </a>
                            </div>
                        </address>
                    </div>
                </div>

                <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} DG Jewellers. All rights reserved.</p>
                    <p>Designed with elegance.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
