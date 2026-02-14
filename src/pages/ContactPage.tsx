import { Mail, Instagram, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <section className="section-padding py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">Get in Touch</p>
              <h1 className="text-3xl md:text-5xl font-display font-medium text-foreground mb-4">
                Contact Us
              </h1>
              <p className="text-muted-foreground max-w-lg">
                Have a question about your order, our products, or anything else? We'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact info */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1">Email</h3>
                    <a href="mailto:hello@lbsessentials.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      hello@lbsessentials.com
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">We typically respond within 24–48 hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Instagram size={18} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1">Instagram</h3>
                    <a href="https://www.instagram.com/lbs.essentials/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      @lbs.essentials
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">DM us anytime for quick questions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-1">Based In</h3>
                    <p className="text-sm text-muted-foreground">Online worldwide — shipping globally.</p>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const email = formData.get("email");
                  const message = formData.get("message");
                  window.location.href = `mailto:hello@lbsessentials.com?subject=Customer Inquiry&body=${encodeURIComponent(String(message))}%0A%0AFrom: ${encodeURIComponent(String(email))}`;
                }}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 text-sm bg-secondary/50 border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 text-sm bg-secondary/50 border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 text-sm bg-secondary/50 border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
