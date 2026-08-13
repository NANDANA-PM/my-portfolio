import { Mail, Phone, MapPin } from "lucide-react";
import Button from "../common/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mt-4"></div>
        </div>

        <p className="mb-12 text-lg text-muted-foreground">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="flex flex-col items-center rounded-2xl bg-card p-8 border border-border shadow-sm">
            <div className="rounded-full bg-primary/10 p-4 mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nandanaa642@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
            >
              nandanaa642@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center rounded-2xl bg-card p-8 border border-border shadow-sm">
            <div className="rounded-full bg-primary/10 p-4 mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <a
              href="tel:+917994927982"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              +91 7994927982
            </a>
          </div>

          <div className="flex flex-col items-center rounded-2xl bg-card p-8 border border-border shadow-sm">
            <div className="rounded-full bg-primary/10 p-4 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">
              Malappuram, Kerala, India
            </p>
          </div>
        </div>

        <Button
          href="https://mail.google.com/mail/?view=cm&fs=1&to=nandanaa642@gmail.com"
          variant="primary"
        >
          Send Me an Email
        </Button>
      </div>
    </section>
  );
}
