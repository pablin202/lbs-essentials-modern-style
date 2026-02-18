import { Truck, ShieldCheck, RotateCcw, Mail } from "lucide-react";

const trustItems = [
  { icon: Truck, title: "Tracked Shipping", desc: "All orders ship with tracking from Melbourne, AU." },
  { icon: ShieldCheck, title: "Secure Checkout", desc: "SSL-encrypted payments via Shopify." },
  { icon: RotateCcw, title: "30-Day Returns", desc: "Easy returns — no questions asked." },
  { icon: Mail, title: "Real Support", desc: "hello@lbsessentials.com — we reply within 24h." },
];

const WhySection = () => {
  return (
    <section className="py-16 md:py-20 border-y border-border">
      <div className="section-padding max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-3">
                <item.icon size={18} className="text-foreground" />
              </div>
              <p className="text-sm font-medium text-foreground mb-1">{item.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
