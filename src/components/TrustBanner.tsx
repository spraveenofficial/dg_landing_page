import { Award, Gem, ShieldCheck } from "lucide-react";

const TrustBanner = () => {
    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-primary" />,
            title: "Certified Authenticity",
            description: "Every piece comes with a certificate of purity.",
        },
        {
            icon: <Gem className="w-8 h-8 text-primary" />,
            title: "Handcrafted Perfection",
            description: "Intricate designs crafted by master artisans.",
        },
        {
            icon: <Award className="w-8 h-8 text-primary" />,
            title: "Legacy Designs",
            description: "Timeless styles that transcend generations.",
        },
    ];

    return (
        <section className="py-16 bg-background border-t border-border/40">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border/40">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center gap-4 p-4">
                            <div className="p-4 rounded-full bg-primary/5 mb-2">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-serif text-foreground">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm max-w-xs">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBanner;
