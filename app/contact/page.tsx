import ContactCard from "@/components/ContactCard";

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <section
        className="
          rounded-3xl
          border border-border
          bg-surface
          p-8
        "
      >
        <p className="font-semibold text-primary">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Get in Touch 📩
              </h1>
              
        <ContactCard />
      </section>
    </main>
  );
}