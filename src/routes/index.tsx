import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg.asset.json";
import logo3d from "@/assets/logo-3d.png";
import { Stethoscope, Hospital, Pill, Microscope, Mail, Phone, Plus } from "lucide-react";

const PLAY = "https://play.google.com/store/apps/details?id=com.nalber.doctoriakrd&hl=en";
const APPLE = "https://apps.apple.com/us/app/doctoria-krd/id6775965163";
const EMAIL = "doctoriakrd@gmail.com";
const PHONE = "+9647510480605";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "دکتۆریا KRD — دۆزینەوەی پزیشک لە کوردستان" },
      { name: "description", content: "ئەپی Doctoria KRD: گەڕان و دۆزینەوەی پزیشک، نەخۆشخانە، کلینیک و سەنتەرە تەندروستییەکان لە کوردستان." },
      { property: "og:title", content: "دکتۆریا KRD — دۆزینەوەی پزیشک لە کوردستان" },
      { property: "og:description", content: "پزیشک، نەخۆشخانە، کلینیک و سەنتەرەکان لە یەک ئەپدا. ئێستا دایبگرە بۆ ئایفۆن و ئەندرۆید." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sections = [
  { icon: Stethoscope, title: "پزیشکەکان", text: "بە پێی پسپۆڕی و شار، باشترین پزیشک بدۆزەرەوە و زانیاری تەواوی ببینە." },
  { icon: Hospital, title: "نەخۆشخانەکان", text: "لیستی نەخۆشخانە گشتی و تایبەتەکان، ناونیشان و ژمارەی پەیوەندی." },
  { icon: Pill, title: "کلینیکەکان", text: "کلینیکە نزیکەکانی خۆت بدۆزەرەوە و ڕاستەوخۆ پەیوەندییان پێوە بکە." },
  { icon: Microscope, title: "سەنتەرەکان", text: "سەنتەری تاقیگە، تیشک و چارەسەری سروشتی، هەموو لە یەک شوێن." },
];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function StoreButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <a href={APPLE} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl bg-navy px-6 py-3 text-primary-foreground shadow-glow transition hover:-translate-y-1">
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current"><path d="M16.4 12.6c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.3.8c1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.8-1-2.8-4.1zM14 5.1c.7-.8 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4z"/></svg>
        <span className="text-start leading-tight"><small className="block text-xs opacity-75">دایبگرە لە</small><b dir="ltr">App Store</b></span>
      </a>
      <a href={PLAY} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl bg-brand px-6 py-3 text-primary-foreground shadow-glow transition hover:-translate-y-1">
        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current"><path d="M3.6 1.8 13.4 12l-9.8 10.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1zm11 11.4 2.5 2.6-11 6.3 8.5-8.9zm3.8-4 2.8 1.6c.8.5.8 1.8 0 2.3l-2.8 1.6-2.7-2.7 2.7-2.8zM6.1 1.9l11 6.3-2.5 2.6-8.5-8.9z"/></svg>
        <span className="text-start leading-tight"><small className="block text-xs opacity-75">دایبگرە لە</small><b dir="ltr">Google Play</b></span>
      </a>
    </div>
  );
}

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-background/80 shadow-sm backdrop-blur-lg" : ""}`}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo3d} alt="Doctoria KRD" className="h-10 w-10 object-contain" />
            <b className="font-display text-lg text-navy" dir="ltr">Doctoria KRD</b>
          </a>
          <div className="hidden gap-8 text-sm font-semibold md:flex">
            <a href="#services" className="hover:text-primary">خزمەتگوزارییەکان</a>
            <a href="#download" className="hover:text-primary">داگرتن</a>
            <a href="#contact" className="hover:text-primary">پەیوەندی</a>
          </div>
          <a href="#download" className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow">داگرتنی ئەپ</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-center pt-24">
        <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 animate-blob rounded-full bg-sky/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] animate-blob rounded-full bg-royal/25 blur-3xl [animation-delay:-5s]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <div className="reveal">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">یەکەم ئەپی دۆزینەوەی پزیشک لە کوردستان</span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.4] md:text-6xl md:leading-[1.35]">
              پزیشکەکەت <span className="text-brand">بدۆزەرەوە</span>،<br />بە چەند چرکەیەک
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              دکتۆریا KRD هەموو پزیشک، نەخۆشخانە، کلینیک و سەنتەرە تەندروستییەکانی کوردستانی لە یەک ئەپدا کۆکردۆتەوە.
            </p>
            <div className="mt-8"><StoreButtons /></div>
          </div>
          <div className="relative mx-auto flex h-80 w-80 items-center justify-center md:h-[26rem] md:w-[26rem]">
            <div className="absolute inset-0 animate-ring rounded-full border-2 border-primary/40" />
            <div className="absolute inset-0 animate-ring rounded-full border-2 border-primary/30 [animation-delay:1.2s]" />
            <div className="absolute inset-8 rounded-full bg-brand opacity-10" />
            <img src={logo3d} alt="Doctoria logo" className="logo-3d relative w-3/4 animate-float" />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden bg-brand py-4 text-primary-foreground">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-lg">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["پزیشکەکان", "نەخۆشخانەکان", "کلینیکەکان", "سەنتەرەکان", "هەولێر", "سلێمانی", "دهۆک", "هەڵەبجە"].map((t) => <span key={k + t} className="flex items-center gap-2"><Plus className="h-4 w-4" /> {t}</span>),
          )}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-28">
        <div className="reveal text-center">
          <h2 className="text-3xl font-extrabold md:text-5xl">هەموو شتێک <span className="text-brand">لە یەک ئەپدا</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">چوار بەشی سەرەکی بۆ ئەوەی بە ئاسانی چاودێری تەندروستی خۆت و خێزانەکەت بکەیت.</p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((s, i) => (
            <div key={s.title} className="reveal group relative overflow-hidden rounded-3xl border bg-card p-8 transition duration-500 hover:-translate-y-3 hover:shadow-glow" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="absolute inset-0 bg-brand opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:scale-110 group-hover:rotate-6 group-hover:bg-card"><s.icon className="h-8 w-8" /></div>
                <h3 className="mt-6 text-xl font-bold transition group-hover:text-primary-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground transition group-hover:text-primary-foreground/85">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="bg-navy py-28 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="reveal text-center text-3xl font-extrabold md:text-5xl">چۆن کار دەکات؟</h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[["١", "ئەپەکە دابگرە", "بە خۆڕایی لە App Store و Google Play."], ["٢", "بگەڕێ", "بە پێی پسپۆڕی، شار یان ناو بگەڕێ."], ["٣", "پەیوەندی بکە", "ڕاستەوخۆ پەیوەندی بە پزیشک یان شوێنەکەوە بکە."]].map(([n, t, d], i) => (
              <div key={n} className="reveal text-center" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand font-display text-3xl font-extrabold shadow-glow">{n}</div>
                <h3 className="mt-6 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-primary-foreground/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="mx-auto max-w-6xl px-5 py-28">
        <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-brand p-10 text-primary-foreground md:p-16">
          <div className="absolute -left-16 -top-16 h-64 w-64 animate-blob rounded-full bg-primary-foreground/10" />
          <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-extrabold md:text-5xl">ئێستا دکتۆریا دابگرە</h2>
              <p className="mt-4 text-primary-foreground/80">بۆ ئایفۆن و ئەندرۆید بەردەستە — بە خۆڕایی.</p>
              <div className="mt-8 [&_a]:bg-navy"><StoreButtons /></div>
            </div>
            <img src={logo3d} alt="" className="logo-3d hidden h-48 w-48 animate-float object-contain md:block" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 pb-28">
        <h2 className="reveal text-center text-3xl font-extrabold md:text-5xl">پەیوەندیمان <span className="text-brand">پێوە بکە</span></h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <a href={`mailto:${EMAIL}`} className="reveal flex items-center gap-5 rounded-3xl border bg-card p-8 transition hover:-translate-y-2 hover:shadow-glow">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-primary-foreground"><Mail className="h-6 w-6" /></span>
            <span><small className="block text-muted-foreground">ئیمەیڵ</small><b dir="ltr" className="text-lg">{EMAIL}</b></span>
          </a>
          <a href={`tel:${PHONE}`} className="reveal flex items-center gap-5 rounded-3xl border bg-card p-8 transition hover:-translate-y-2 hover:shadow-glow">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-primary-foreground"><Phone className="h-6 w-6" /></span>
            <span><small className="block text-muted-foreground">ژمارەی تەلەفۆن</small><b dir="ltr" className="text-lg">{PHONE}</b></span>
          </a>
        </div>
      </section>

      <footer className="bg-navy text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <img src={logo.url} alt="Doctoria KRD" className="h-16 w-16 rounded-2xl bg-card object-contain" />
            <div className="max-w-2xl rounded-2xl border border-primary-foreground/20 p-6 text-sm leading-8">
              <p className="font-bold">© {new Date().getFullYear()} Doctoria KRD — هەموو مافەکان پارێزراون.</p>
              <p className="mt-2 text-primary-foreground/80">ئەم ئەپڵیکەیشنە و ناوەڕۆکەکەی خاوەنی مافی کۆپی ڕایتی فەرمییە لەلایەن حکومەتەوە. هەر کەسێک یان لایەنێک هاوشێوەی دروست بکات یان کۆپی بکات، ڕێکاری یاسایی لەگەڵیدا دەگیرێتە بەر.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
