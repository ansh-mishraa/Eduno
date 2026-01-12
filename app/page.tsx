import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, BookCheck, Quote, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const contributors = [
    {
      name: "Nandani Dubey",
      department: "Information Technology",
      year: "2023-2027",
      role: "Notes Provider"
    },
    {
      name: "Kourviky Shrivas",
      department: "Information Technology",
      year: "2023-2027",
      role: "Notes Provider"
    },
    {
      name: "Arya Rajput",
      department: "Information Technology",
      year: "2023-2027",
      role: "Notes Provider"
    },
    {
      name: "Arpita Khandelwal",
      department: "Information Technology",
      year: "2023-2027",
      role: "Notes Provider"
    }
    
  ];

  const testimonials = [
    {
      content: "This platform saves valuable time by providing all essential study resources in one place, making preparation more efficient. With high-quality, affordable materials, it ensures that students have everything they need to succeed.",
      author: "Bhanu Vyas",
      role: "Information Technology, Batch: 2023-2027"
    },
    {
      content: "This platform offers well-structured notes and comprehensive resources, making learning smarter and more efficient. It provides everything a student needs to excel academically.",
      author: "Khushi Pathariya",
      role: "Information Technology, Batch: 2023-2027"
    },
    {
      content: "All-in-one study companion that gathers notes and everything we need in one place.",
      author: "Nandani Dubey",
      role: "Information Technology, Batch: 2023-2027"
    },
    {
      content: "I've been using this website for my studies and it's been a informative source. The notes are concise, well-organized, and easy to understand.",
      author: "Pranjal kourav",
      role: "Information Technology, Batch: 2023-2027"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen dark:bg-black">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4 dark:bg-black">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 dark:text-white">
            Your Academic Success Starts Here
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto dark:text-gray-300 px-4">
            Access organized study materials, previous year questions, and comprehensive notes all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Link href="/features" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">Get Started</Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 dark:text-white">
            Why Choose Eduno
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon={<BookOpen className="h-6 w-6 md:h-8 md:w-8" />}
              title="Organized Notes"
              description="Access well-structured notes for all subjects, organized by semester and branch."
            />
            <FeatureCard
              icon={<FileText className="h-6 w-6 md:h-8 md:w-8" />}
              title="Previous Year Questions"
              description="Practice with a comprehensive collection of previous year questions."
            />
            <FeatureCard
              icon={<BookCheck className="h-6 w-6 md:h-8 md:w-8" />}
              title="Study Materials"
              description="Get access to curated study materials and resources."
            />
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-12 md:py-20 dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 dark:text-white">
            Our Contributors
          </h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {contributors.map((contributor, index) => (
              <div key={index} className="group perspective-1000 w-full sm:w-72">
                <div className="relative transform-style-3d transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
                  {/* Front of card */}
                  <div className="w-full sm:w-72 h-80 sm:h-96 backface-hidden">
                    <Card className="w-full h-full bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-black shadow-xl">
                      <CardContent className="p-6 text-center h-full flex flex-col items-center justify-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6 rounded-full bg-primary/10 dark:bg-gray-900 flex items-center justify-center">
                          <User className="h-8 w-8 md:h-10 md:w-10 text-primary dark:text-gray-300" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 dark:text-white">{contributor.name}</h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-300">{contributor.department}</p>
                        <p className="text-sm text-muted-foreground dark:text-gray-300">{contributor.year}</p>
                        <div className="mt-4 inline-flex items-center rounded-full bg-primary/10 dark:bg-gray-900 px-3 py-1.5 md:px-4 md:py-2">
                          <span className="text-sm font-medium text-primary dark:text-gray-300">{contributor.role}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  {/* Back of card */}
                  <div className="w-full sm:w-72 h-80 sm:h-96 absolute top-0 [transform:rotateY(180deg)] backface-hidden">
                    <Card className="w-full h-full bg-gradient-to-br from-primary/90 to-primary dark:from-black dark:to-black shadow-xl">
                      <CardContent className="p-6 text-center h-full flex flex-col items-center justify-center">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{contributor.name}</h3>
                        <p className="text-white/80 mb-6">Shared valuable resources to us. Special Thanks to all Contributors</p>
                        <div className="space-y-2">
                          <p className="text-sm text-white/90">{contributor.department}</p>
                          <p className="text-sm text-white/90">{contributor.year}</p>
                          <p className="text-sm text-white/90">{contributor.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 dark:bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 dark:text-white">
            What Students Say
          </h2>
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="px-4">
                    <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-black overflow-hidden relative">
                      <CardContent className="p-6 md:p-12">
                        <Quote className="absolute top-4 md:top-6 left-4 md:left-6 h-8 w-8 md:h-12 md:w-12 text-primary/10 dark:text-gray-800" />
                        <div className="relative">
                          <p className="text-lg md:text-xl mb-6 md:mb-8 leading-relaxed italic dark:text-gray-300">
                            "{testimonial.content}"
                          </p>
                          <div className="flex items-center">
                            <div className="flex-1">
                              <p className="font-semibold text-base md:text-lg dark:text-white">{testimonial.author}</p>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 md:mt-8 gap-4">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="dark:bg-black hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="mb-4 text-primary dark:text-white">{icon}</div>
        <h3 className="text-lg md:text-xl font-semibold mb-2 dark:text-white">{title}</h3>
        <p className="text-sm md:text-base text-muted-foreground dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
}