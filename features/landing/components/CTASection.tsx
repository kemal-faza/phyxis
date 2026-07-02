import { Button } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-heading text-headline-lg text-foreground">
          Ready to modernise your physics laboratory?
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="/login">Enter workspace</Button>
          <Button variant="outline" href="/login">Sign in</Button>
        </div>
      </div>
    </section>
  )
}
