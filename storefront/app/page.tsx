'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Truck, Shield, RotateCcw, Sparkles, Star, Zap } from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { trackMetaEvent } from '@/lib/meta-pixel'
import { HERO_PLACEHOLDER, LIFESTYLE_PLACEHOLDER } from '@/lib/utils/placeholder-images'

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    trackMetaEvent('Lead', {
      content_name: 'newsletter_signup',
      status: 'submitted',
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-[3px] border-foreground">
        {/* funky blob backgrounds */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-funky-pink/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-funky-blue/40 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-72 rounded-full bg-funky-yellow/40 blur-3xl" />

        <div className="container-custom relative grid lg:grid-cols-2 gap-8 items-center py-section lg:py-32">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 funky-border funky-shadow-sm -rotate-2 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5 text-funky-yellow" /> New Collection Dropped
            </span>

            <h1 className="text-display font-heading uppercase text-balance leading-[0.9]">
              <span className="block">Get</span>
              <span className="block text-rainbow">Funky</span>
              <span className="block">Or Go Home</span>
            </h1>

            <p className="text-lg max-w-md leading-relaxed font-medium">
              Loud prints, louder colors, and zero apologies. Drops that hit different — fits that make people stare.
            </p>

            <div className="flex flex-wrap gap-5 pt-2">
              <Link
                href="/products"
                className="funky-border funky-shadow funky-press inline-flex items-center gap-2 bg-funky-pink text-foreground px-8 py-4 text-sm font-black uppercase tracking-wider"
                prefetch={true}
              >
                Shop The Drop
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="funky-border funky-shadow funky-press inline-flex items-center gap-2 bg-funky-yellow text-foreground px-8 py-4 text-sm font-black uppercase tracking-wider"
                prefetch={true}
              >
                Our Story
              </Link>
            </div>

            {/* little sticker row */}
            <div className="flex items-center gap-4 pt-4 text-xs font-bold uppercase">
              <span className="inline-flex items-center gap-1.5 bg-funky-lime funky-border px-3 py-1.5 rotate-2">
                <Star className="h-3 w-3" /> 4.9 stars
              </span>
              <span className="inline-flex items-center gap-1.5 bg-funky-blue text-white funky-border px-3 py-1.5 -rotate-2">
                <Zap className="h-3 w-3" /> Ships fast
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            {/* decorative spinning sparkle */}
            <div className="absolute -top-6 -left-6 z-10 h-20 w-20 rounded-full bg-funky-yellow funky-border flex items-center justify-center animate-spin-slow">
              <span className="font-heading text-xs uppercase text-foreground text-center leading-tight">New<br/>Drop!</span>
            </div>
            <div className="absolute -bottom-4 -right-4 z-10 bg-funky-pink text-white funky-border px-4 py-2 rotate-6 font-black uppercase text-sm">
              ★ Hot ★
            </div>

            <div className="relative aspect-[4/5] lg:aspect-[3/4] bg-muted funky-border funky-shadow-lg overflow-hidden animate-fade-in rotate-1">
              <Image
                src={HERO_PLACEHOLDER}
                alt="Hero - New Collection"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Funky "as seen in" stripe */}
      <section className="bg-foreground text-background border-b-[3px] border-foreground overflow-hidden">
        <div className="flex py-4 text-sm font-bold uppercase tracking-[0.3em]">
          <div className="flex animate-marquee whitespace-nowrap">
            {['Wear it loud', 'Stand out', 'No rules', 'Be funky', 'Ship worldwide', 'Made bold'].concat(['Wear it loud', 'Stand out', 'No rules', 'Be funky', 'Ship worldwide', 'Made bold']).map((w, i) => (
              <span key={i} className="mx-10 flex items-center gap-6">
                {w}
                <span className="text-funky-pink">✦</span>
              </span>
            ))}
          </div>
          <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
            {['Wear it loud', 'Stand out', 'No rules', 'Be funky', 'Ship worldwide', 'Made bold'].concat(['Wear it loud', 'Stand out', 'No rules', 'Be funky', 'Ship worldwide', 'Made bold']).map((w, i) => (
              <span key={`d-${i}`} className="mx-10 flex items-center gap-6">
                {w}
                <span className="text-funky-pink">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      {isLoading ? (
        <section className="py-section">
          <div className="container-custom">
            <div className="animate-pulse space-y-4 text-center">
              <div className="h-3 w-20 bg-muted rounded mx-auto" />
              <div className="h-8 w-64 bg-muted rounded mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] bg-muted rounded animate-pulse" />
              ))}
            </div>
          </div>
        </section>
      ) : collections && collections.length > 0 ? (
        <>
          {collections.map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              alternate={index % 2 === 1}
            />
          ))}
        </>
      ) : null}

      {/* Editorial / Brand Story Section */}
      <section className="py-section bg-funky-lime/40 border-y-[3px] border-foreground relative overflow-hidden">
        <div className="pointer-events-none absolute top-10 right-10 text-8xl animate-wiggle">🌈</div>
        <div className="pointer-events-none absolute bottom-10 left-10 text-7xl animate-spin-slow">✿</div>

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative -rotate-2">
              <div className="absolute -top-4 -right-4 z-10 bg-funky-violet text-white funky-border px-4 py-2 rotate-6 font-black uppercase text-xs">
                Our Vibe
              </div>
              <div className="aspect-[4/5] bg-muted funky-border funky-shadow-lg overflow-hidden relative">
                <Image
                  src={LIFESTYLE_PLACEHOLDER}
                  alt="Lifestyle - Our Philosophy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 lg:max-w-md">
              <span className="inline-block bg-funky-pink text-white funky-border px-3 py-1 -rotate-2 text-xs font-bold uppercase tracking-widest">
                Our Philosophy
              </span>
              <h2 className="text-h2 font-heading uppercase leading-[1.05]">
                More color. <span className="text-rainbow">More joy.</span> Zero beige.
              </h2>
              <p className="leading-relaxed font-medium">
                We make pieces for people who refuse to blend in. Everything here is loud on purpose,
                built to last, and designed to make Monday feel like Saturday.
              </p>
              <Link
                href="/about"
                className="funky-border funky-shadow-sm funky-press inline-flex items-center gap-2 bg-background px-6 py-3 text-sm font-black uppercase tracking-wider"
                prefetch={true}
              >
                Get the story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Features Bar */}
      <section className="py-section-sm border-b-[3px] border-foreground bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { Icon: Truck, title: 'Free Shipping', sub: 'On orders over $75', color: 'bg-funky-pink', rotate: '-rotate-1' },
              { Icon: RotateCcw, title: 'Easy Returns', sub: '30-day return policy', color: 'bg-funky-yellow', rotate: 'rotate-1' },
              { Icon: Shield, title: 'Secure Checkout', sub: '256-bit SSL encryption', color: 'bg-funky-blue text-white', rotate: '-rotate-1' },
            ].map(({ Icon, title, sub, color, rotate }) => (
              <div
                key={title}
                className={`${color} ${rotate} funky-border funky-shadow p-5 flex items-center gap-4`}
              >
                <Icon className="h-7 w-7 flex-shrink-0" strokeWidth={2.5} />
                <div>
                  <p className="text-base font-black uppercase tracking-wide">{title}</p>
                  <p className="text-xs font-semibold opacity-80">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-section relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-funky-gradient opacity-30" />
        <div className="container-custom relative">
          <div className="max-w-xl mx-auto bg-background funky-border funky-shadow-lg p-10 text-center -rotate-1">
            <div className="text-4xl mb-2">💌</div>
            <h2 className="text-h2 font-heading uppercase leading-[1.05]">Join The Club</h2>
            <p className="mt-3 font-medium">
              First dibs on drops, secret sales, and the occasional meme.
            </p>
            <form className="mt-8 flex gap-3 flex-col sm:flex-row" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="you@funky.com"
                className="flex-1 funky-border bg-background px-4 py-3 text-sm font-semibold placeholder:text-muted-foreground focus:outline-none focus:bg-funky-yellow/30"
              />
              <button
                type="submit"
                className="funky-border funky-shadow-sm funky-press bg-funky-pink text-foreground px-6 py-3 text-sm font-black uppercase tracking-wider whitespace-nowrap"
              >
                I'm In ✦
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
