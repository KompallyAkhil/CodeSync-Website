"use client";


import { 
  Zap, 
  Layout, 
  Shield, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />

      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-24 flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 rounded-full text-sm font-normal border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            🎉 Version 1.0.0 is now available
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-linear-to-b from-foreground to-foreground/50 bg-clip-text text-transparent max-w-4xl">
            Sync Your Coding Progress <br className="hidden md:block" />
            <span className="text-primary">Instantly & Seamlessly</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Automatically sync your coding submissions to GitHub. 
            Track your progress, build your portfolio, and never lose a solution again.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Button size="lg" className="cursor-pointer h-12 px-8 text-base">
              <Link href="https://github.com/KompallyAkhil/CodeSync" target="_blank">
              Get Extension
              </Link>
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <HeroVideoDialog animationStyle="from-center" videoSrc="/video.mp4">
              <Button size="lg" variant="outline" className="cursor-pointer h-12 px-8 text-base">
                View Demo
              </Button>
            </HeroVideoDialog>
          </div>

          <div className="relative w-full max-w-5xl mx-auto mb-24">
            <div className="absolute -inset-1 from-primary to-purple-600 rounded-2xl blur opacity-20" />
            <div className="relative rounded-2xl border border-white/10 bg-black/50 overflow-hidden shadow-2xl">
              <HeroVideoDialog
                className="w-full"
                animationStyle="from-center"
                videoSrc="/video.mp4"
                thumbnailSrc="/thumbnail.png"
                thumbnailAlt="CodeSync Demo"
              />
            </div>
          </div>
        </section>

        <Separator className="bg-white/5" />

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything you need to <br />
              <span className="text-primary">master your workflow</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              CodeSync works silently in the background, ensuring every line of code you write is safely stored and organized.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="p-8 bg-card/50 border-white/5 hover:border-primary/20 transition-all duration-300 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">One-Click Sync</h3>
              <p className="text-muted-foreground leading-relaxed">
                Extract your solution and problem details with a single click.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 border-white/5 hover:border-primary/20 transition-all duration-300 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layout className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Auto-Detection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatically detects the coding platform you are using (LeetCode, GFG, etc).
              </p>
            </Card>

            <Card className="p-8 bg-card/50 border-white/5 hover:border-primary/20 transition-all duration-300 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">GitHub Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pushes code directly to your configured GitHub repository, supports for multiple languages.
              </p>
            </Card>

             <Card className="p-8 bg-card/50 border-white/5 hover:border-primary/20 transition-all duration-300 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Status Updates</h3>
              <p className="text-muted-foreground leading-relaxed">
                Real-time feedback on extraction and upload status.
              </p>
            </Card>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="container mx-auto px-4 py-24 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">How it Works</h2>
              <p className="text-muted-foreground text-lg">
                Simple setup, powerful workflow.
              </p>
            </div>

            <div className="grid gap-8">
              {[
                { 
                  title: "Installation", 
                  desc: "Load the extension into Chrome (Developer Mode -> Load Unpacked)." 
                },
                { 
                  title: "Configuration", 
                  desc: "Click the extension icon, enter your GitHub Token, Username, and Repository Name." 
                },
                { 
                  title: "Select Platform", 
                  desc: "Supported platforms: LeetCode, GeeksforGeeks, Codeforces, HackerRank."
                },
                { 
                  title: "Sync", 
                  desc: "Click 'Sync' on any problem page to push your solution to GitHub." 
                }
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-6 p-6 rounded-2xl bg-background/50 border border-white/5">
                  <div className="flex-none size-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/5 to-transparent px-4 py-24 text-center">
             <div className="absolute inset-0 bg-primary/5 blur-3xl" />
             <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                Ready to automate your <br />
                <span className="text-primary">coding portfolio?</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-14 px-10 cursor-pointer text-lg w-full sm:w-auto shadow-lg shadow-primary/20" asChild>
                   <Link href="https://github.com/KompallyAkhil/CodeSync" target="_blank">
                      View Source Code
                   </Link>
                </Button>
                {/* <Button size="lg" variant="outline" className="cursor-pointer h-14 px-10 text-lg w-full sm:w-auto bg-transparent border-white/10 hover:bg-white/5">
                   View Source Code
                </Button> */}
              </div>
              <p className="mt-8 text-sm text-muted-foreground flex items-center justify-center gap-6">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-500" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-500" />
                  Open Source
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
             <Image 
                src="/image.png" 
                alt="CodeSync Logo" 
                width={32} 
                height={32} 
                className="rounded-lg object-contain"
            />
            <span className="font-bold text-lg">CodeSync</span>
          </div>

          <div className="text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} CodeSync. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground/60">
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-foreground transition-colors">How it work's</Link>
            <Link href="https://github.com/KompallyAkhil/CodeSync"  target="_blank" className="hover:text-foreground transition-colors">Github</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
