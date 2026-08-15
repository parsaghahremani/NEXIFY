// مسیر فایل: app/contact/page.tsx

import Contact from "../components/ContactSection/Contact";

export default function ContactPage() {
  return (
       <div className="min-h-screen bg-[#D4E0EB] flex flex-col">
      <main className="flex-1 w-full">
        <Contact />
      </main>
    </div>
  );
}