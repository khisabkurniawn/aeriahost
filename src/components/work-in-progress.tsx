import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Shield,
  Zap,
  Globe,
  Server,
  HardDrive,
  Cpu,
  Database,
} from "lucide-react";
import Image from "next/image";

export default function WorkInProgress() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
              <span className="text-sm font-bold text-black">H</span>
            </div>
            <span className="text-xl font-bold">Aeria Host</span>
          </div>
          <nav className="hidden items-center space-x-8 md:flex">
            <a href="#" className="transition-colors hover:text-green-400">
              Game Servers
            </a>
            <a href="#" className="transition-colors hover:text-green-400">
              Web Hosting
            </a>
            <a href="#" className="transition-colors hover:text-green-400">
              VPS Hosting
            </a>
            <a href="#" className="transition-colors hover:text-green-400">
              Dedicated Servers
            </a>
            <a href="#" className="transition-colors hover:text-green-400">
              More
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-green-400">
              Login
            </Button>
            <Button className="bg-green-500 text-black hover:bg-green-600">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Best Premium Gaming
            <br />
            Server Hosting
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-400">
            Experience unparalleled gaming performance with our premium server
            hosting solutions designed for gamers by gamers.
          </p>
          <Button className="mb-12 bg-green-500 px-8 py-3 text-lg text-black hover:bg-green-600">
            Order Now
          </Button>

          {/* Game Thumbnails */}
          <div className="mb-8 flex justify-center space-x-4">
            <div className="h-20 w-32 overflow-hidden rounded-lg bg-gray-800">
              <Image
                src="/placeholder.svg?height=80&width=128"
                alt="Call of Duty"
                width={128}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-20 w-32 overflow-hidden rounded-lg bg-gray-800">
              <Image
                src="/placeholder.svg?height=80&width=128"
                alt="7 Days to Die"
                width={128}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-20 w-32 overflow-hidden rounded-lg bg-gray-800">
              <Image
                src="/placeholder.svg?height=80&width=128"
                alt="Game 3"
                width={128}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900/50 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Reliable Server Hosting for all
              <br />
              of your Favorite games
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-gray-700 bg-gray-800">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                  <Zap className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-green-400">
                  Top-Notch Performance
                </h3>
                <p className="text-gray-400">
                  Experience lightning-fast performance with our high-end
                  hardware and optimized configurations for maximum gaming
                  performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-700 bg-gray-800">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                  <Shield className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-green-400">
                  Advanced Security
                </h3>
                <p className="text-gray-400">
                  Keep your servers secure with our advanced DDoS protection and
                  comprehensive security measures to protect your gaming
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-700 bg-gray-800">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                  <Globe className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-green-400">
                  Unlimited Scaling
                </h3>
                <p className="text-gray-400">
                  Scale your server resources on-demand to accommodate growing
                  player bases and ensure smooth gameplay at all times.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Control Panel Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Experience The New Hostingard
              <br />
              Control Panel
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Manage your servers with ease using our intuitive and powerful
              control panel designed for both beginners and advanced users.
            </p>
          </div>

          <div className="rounded-lg bg-gray-900 p-8">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500">
                      <Server className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold">Plugin Manager</h3>
                      <p className="text-sm text-gray-400">
                        Install and manage plugins with one click
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700">
                      <Database className="h-6 w-6 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-bold">Real-Time Monitoring</h3>
                      <p className="text-sm text-gray-400">
                        Monitor server performance in real-time
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700">
                      <HardDrive className="h-6 w-6 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-bold">Backup Management</h3>
                      <p className="text-sm text-gray-400">
                        Automated backups and easy restoration
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700">
                      <Cpu className="h-6 w-6 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-bold">Console Access</h3>
                      <p className="text-sm text-gray-400">
                        Direct console access for advanced management
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-800 p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Server Status</span>
                    <Badge className="bg-green-500 text-black">Online</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">CPU Usage</span>
                      <span className="text-sm">45%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-700">
                      <div className="h-2 w-[45%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Memory Usage</span>
                      <span className="text-sm">67%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-700">
                      <div className="h-2 w-[67%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Players Online</span>
                      <span className="text-sm">24/100</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-700">
                      <div className="h-2 w-[24%] rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Servers Section */}
      <section className="bg-gray-900/50 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Experience The New
              <br />
              Hostingard Control Panel
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Call of Duty",
                price: "$15.99",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "7 Days to Die",
                price: "$12.99",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Rust",
                price: "$18.99",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Minecraft",
                price: "$9.99",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "ARK",
                price: "$16.99",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                name: "Counter-Strike",
                price: "$14.99",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((game, index) => (
              <Card
                key={index}
                className="overflow-hidden border-gray-700 bg-gray-800"
              >
                <div className="aspect-video">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold">{game.name}</h3>
                  <p className="mb-4 text-sm text-gray-400">
                    High-performance server hosting
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400">
                      {game.price}
                    </span>
                    <Button className="bg-green-500 text-black hover:bg-green-600">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Locations globally Located
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-gray-400">
            Choose from our global network of data centers to ensure the lowest
            latency for your players worldwide.
          </p>

          <div className="relative h-96 rounded-lg bg-gray-900 p-8">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
            <div className="relative flex h-full items-center justify-center">
              <div className="text-center">
                <Globe className="mx-auto mb-4 h-24 w-24 text-green-400" />
                <p className="text-gray-400">Global Network Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-900/50 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Our Clients&apos;
              <br />
              Experience Speak
              <br />
              Volumes
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Johnson",
                rating: 5,
                text: "Incredible performance and support. My Minecraft server has never run smoother!",
              },
              {
                name: "Sarah Chen",
                rating: 5,
                text: "The control panel is intuitive and the server uptime is outstanding. Highly recommended!",
              },
              {
                name: "Mike Rodriguez",
                rating: 5,
                text: "Best hosting service I've used. Great value for money and excellent customer support.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-gray-700 bg-gray-800">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-300">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <p className="font-bold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DDoS Protection Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Our Hosting Services
            <br />
            Include DDoS Protection
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-400">
            Advanced DDoS protection keeps your servers online and your players
            happy, no matter what threats come your way.
          </p>
          <Button className="bg-green-500 px-8 py-3 text-lg text-black hover:bg-green-600">
            Learn More
          </Button>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-gray-900/50 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Server Hosting Resources
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Server className="h-8 w-8" />,
                title: "Knowledge Base",
                description: "Comprehensive guides and tutorials",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "DDoS Protection",
                description: "Advanced security measures",
              },
              {
                icon: <Cpu className="h-8 w-8" />,
                title: "Premium Support",
                description: "24/7 expert assistance",
              },
              {
                icon: <HardDrive className="h-8 w-8" />,
                title: "Hardware Specs",
                description: "High-performance infrastructure",
              },
            ].map((resource, index) => (
              <Card key={index} className="border-gray-700 bg-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                    <div className="text-green-400">{resource.icon}</div>
                  </div>
                  <h3 className="mb-2 font-bold">{resource.title}</h3>
                  <p className="text-sm text-gray-400">
                    {resource.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-16">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-6 flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                  <span className="text-sm font-bold text-black">H</span>
                </div>
                <span className="text-xl font-bold">Hostingard</span>
              </div>
              <p className="text-sm text-gray-400">
                Premium gaming server hosting solutions for the modern gamer.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Products & Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-green-400">
                    Game Servers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Web Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    VPS Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Dedicated Servers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-green-400">
                    Knowledge Base
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Server Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-green-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Aeria Host. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
