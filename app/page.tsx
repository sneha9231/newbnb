"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Heart, Star, MapPin, Mic, Shuffle, Eye, Zap, Sparkles } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function FuturisticAirbnb() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const [selectedMood, setSelectedMood] = useState("")
  const [isVoiceActive, setIsVoiceActive] = useState(false)
  const [currentCategory, setCurrentCategory] = useState(0)
  const [savedProperties, setSavedProperties] = useState<number[]>([])
  const [globeRotation, setGlobeRotation] = useState(0)
  const [showLiveTrends, setShowLiveTrends] = useState(false)
  const globeRef = useRef<HTMLDivElement>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const moods = ["Adventure", "Relax", "Romance", "Culture", "Thrill-Seeking", "Serenity"]

  const destinations = [
    { name: "Tokyo", x: "75%", y: "35%", video: "/placeholder.svg?height=200&width=300" },
    { name: "Iceland", x: "45%", y: "20%", video: "/placeholder.svg?height=200&width=300" },
    { name: "Cape Town", x: "52%", y: "70%", video: "/placeholder.svg?height=200&width=300" },
    { name: "Bali", x: "70%", y: "60%", video: "/placeholder.svg?height=200&width=300" },
    { name: "Dubai", x: "58%", y: "45%", video: "/placeholder.svg?height=200&width=300" },
    { name: "Santorini", x: "50%", y: "40%", video: "/placeholder.svg?height=200&width=300" },
  ]

  const categories = [
    { name: "Treehouses", video: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", color: "bg-gray-100" },
    { name: "Skyline Penthouses", video: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", color: "bg-gray-100" },
    { name: "Desert Oases", video: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80", color: "bg-gray-100" },
    { name: "Cultural Immersions", video: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", color: "bg-gray-100" },
    { name: "Ocean Retreats", video: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", color: "bg-gray-100" },
    { name: "Mountain Escapes", video: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80", color: "bg-gray-100" },
  ]

  const storyboardProperties = [
    {
      id: 1,
      title: "Seaside Villa in Bali",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      description: "Wake up to ocean waves",
    },
    {
      id: 2,
      title: "Tokyo Neon Loft",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      description: "City lights at your doorstep",
    },
    {
      id: 3,
      title: "Icelandic Aurora Cabin",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
      description: "Northern lights viewing deck",
    },
    {
      id: 4,
      title: "Sahara Desert Camp",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      description: "Stargazing under infinite skies",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setGlobeRotation((prev) => prev + 0.5)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSave = (id: number) => {
    setSavedProperties((prev) => (prev.includes(id) ? prev.filter((propId) => propId !== id) : [...prev, id]))
  }

  const handleVoiceSearch = () => {
    setIsVoiceActive(!isVoiceActive)
    setTimeout(() => setIsVoiceActive(false), 3000)
  }

  const randomizeStay = () => {
    setCurrentCategory(Math.floor(Math.random() * categories.length))
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      {/* Immersive Hero Experience */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Globe Simulation */}
        <div
          ref={globeRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `rotateY(${globeRotation}deg)` }}
        >
          <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#0A0A0A] border-2 border-[#FF5C5C]/30 shadow-2xl shadow-[#FF5C5C]/20">
            {/* Globe Grid Lines */}
            <div className="absolute inset-0 rounded-full border border-[#FF5C5C]/20"></div>
            <div className="absolute inset-4 rounded-full border border-[#FF5C5C]/10"></div>
            <div className="absolute inset-8 rounded-full border border-[#FF5C5C]/10"></div>

            {/* Destination Pins */}
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="absolute group cursor-pointer"
                style={{
                  left: destination.x,
                  top: destination.y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="relative">
                  <div className="w-4 h-4 bg-[#FF5C5C] rounded-full animate-pulse shadow-lg shadow-[#FF5C5C]/50 hover:scale-150 transition-all duration-300">
                    <div className="absolute inset-0 bg-[#FF9999] rounded-full animate-ping"></div>
                  </div>

                  {/* Destination Preview Popup */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 glassmorphism border border-[#FF5C5C] rounded-xl p-4 w-64 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <Image
                      src={destination.video || "/placeholder.svg"}
                      alt={destination.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                      width={300}
                      height={200}
                    />
                    <h3 className="text-white font-bold mb-2">{destination.name}</h3>
                    <Button className="w-full bg-[#FF5C5C] hover:bg-[#FF5C5C]/80 text-white">Dive In</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-white leading-tight tracking-wider">
            Travel the World Your Way
          </h1>
          <p className="text-[#FF5C5C] text-xl md:text-2xl lg:text-3xl mb-12 font-light">
            From hidden gems to iconic stays, unlock your next journey
          </p>

          {/* Floating Search Panel */}
          <div
            className={`glassmorphism bg-[#0A0A0A]/80 backdrop-blur-md border-2 border-[#FF5C5C] rounded-2xl p-6 shadow-2xl shadow-[#FF5C5C]/20 transition-all duration-500 ${
              isSearchExpanded ? "scale-105" : "scale-100"
            }`}
            onClick={() => setIsSearchExpanded(true)}
          >
            {!isSearchExpanded ? (
              <div className="flex items-center justify-center gap-4 cursor-pointer">
                <Search className="w-6 h-6 text-[#FF5C5C]" />
                <span className="text-white text-lg">Where will you go next?</span>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#FF9999]">Destination</label>
                    <Input
                      placeholder="Anywhere"
                      className="bg-[#1a1a1a] border-[#FF5C5C] text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#FF9999]">Check in</label>
                    <Input type="date" className="bg-[#1a1a1a] border-[#FF5C5C] text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#FF9999]">Check out</label>
                    <Input type="date" className="bg-[#1a1a1a] border-[#FF5C5C] text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#FF9999]">Guests</label>
                    <Input
                      placeholder="Add guests"
                      className="bg-[#1a1a1a] border-[#FF5C5C] text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Mood Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#FF9999]">Mood Filter</label>
                  <div className="flex flex-wrap gap-2">
                    {moods.map((mood) => (
                      <Button
                        key={mood}
                        variant={selectedMood === mood ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedMood(mood)}
                        className={`${
                          selectedMood === mood
                            ? "bg-[#FF5C5C] text-white"
                            : "border-[#FF5C5C] text-[#FF5C5C] hover:bg-[#FF5C5C] hover:text-white"
                        }`}
                      >
                        {mood}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-[#FF5C5C] hover:bg-[#FF5C5C]/80 text-white font-bold py-3 rounded-xl shadow-lg shadow-[#FF5C5C]/30 hover:shadow-[#FF5C5C]/50 transition-all duration-300">
                    <Zap className="w-5 h-5 mr-2" />
                    Launch Journey
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleVoiceSearch}
                    className={`border-[#FF5C5C] text-[#FF5C5C] hover:bg-[#FF5C5C] hover:text-white ${
                      isVoiceActive ? "bg-[#FF5C5C] text-white animate-pulse" : ""
                    }`}
                  >
                    <Mic className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Exploration Hub */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF5C5C] mb-6 tracking-wider">Explore Your Vibe</h2>
            <Button
              onClick={randomizeStay}
              className="bg-gradient-to-r from-[#FF5C5C] to-[#FF9999] hover:from-[#FF9999] hover:to-[#FF5C5C] text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-[#FF5C5C]/30"
            >
              <Shuffle className="w-5 h-5 mr-2" />
              Randomize My Stay
            </Button>
          </div>

          {/* 3D Hexagonal Card Carousel */}
          <div className="relative h-96 flex items-center justify-center">
            <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group cursor-pointer flex-shrink-0 card-hover"
                  style={{
                    transform: `perspective(1000px) rotateY(${index * 10}deg) ${
                      currentCategory === index ? "scale(1.1)" : "scale(0.9)"
                    }`,
                    transition: "all 0.5s ease",
                  }}
                >
                  <div className="relative w-64 h-80 transform-gpu">
                    {/* Hexagonal Shape */}
                    <div
                      className={`w-full h-full bg-gradient-to-br ${category.color} rounded-3xl border-2 border-[#FF5C5C] shadow-2xl shadow-[#FF5C5C]/20 group-hover:shadow-[#FF5C5C]/40 transition-all duration-300 group-hover:border-[#FF9999] overflow-hidden`}
                    >
                      <Image
                        src={category.video || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                        width={400}
                        height={256}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FF9999] transition-colors duration-300">
                          {category.name}
                        </h3>
                        <div className="w-full h-1 bg-[#FF5C5C] rounded-full group-hover:animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Storyboard */}
      <section className="py-20 px-4 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your Travel Story Awaits</h2>
            <Button className="bg-gradient-to-r from-[#FF5C5C] to-[#FF9999] hover:from-[#FF9999] hover:to-[#FF5C5C] text-white font-bold px-8 py-3 rounded-full">
              <Sparkles className="w-5 h-5 mr-2" />
              Build My Itinerary
            </Button>
          </div>

          {/* Storyboard Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {storyboardProperties.map((property, index) => (
              <div
                key={property.id}
                className="group relative bg-[#1a1a1a] rounded-2xl border border-[#FF5C5C]/30 overflow-hidden hover:border-[#FF5C5C] transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width={400}
                    height={256}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Particle Effect Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF9999] rounded-full animate-ping"></div>
                    <div className="absolute top-8 right-8 w-1 h-1 bg-[#FF5C5C] rounded-full animate-pulse"></div>
                    <div className="absolute top-6 right-12 w-1.5 h-1.5 bg-[#FF9999] rounded-full animate-bounce"></div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#FF5C5C] mb-2 group-hover:text-[#FF9999] transition-colors duration-300">
                    {property.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 fill-[#FF5C5C] text-[#FF5C5C]" />
                    <span className="text-[#FF5C5C] font-medium">{property.rating}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{property.description}</p>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-[#FF5C5C] hover:bg-[#FF5C5C]/80 text-white">Add to Journey</Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => toggleSave(property.id)}
                      className="border-[#FF5C5C] text-[#FF5C5C] hover:bg-[#FF5C5C] hover:text-white"
                    >
                      <Heart className={`w-5 h-5 ${savedProperties.includes(property.id) ? "fill-[#FF5C5C]" : ""}`} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Augmented Discovery Map */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF5C5C] mb-6 tracking-wider">Where's Next?</h2>
            <Button
              onClick={() => setShowLiveTrends(!showLiveTrends)}
              className={`${
                showLiveTrends ? "bg-[#FF5C5C] text-white" : "border-[#FF5C5C] text-[#FF5C5C] bg-transparent"
              } border-2 hover:bg-[#FF5C5C] hover:text-white font-bold px-6 py-3 rounded-full transition-all duration-300`}
            >
              <Eye className="w-5 h-5 mr-2" />
              {showLiveTrends ? "Hide" : "Show"} Live Trends
            </Button>
          </div>

          {/* Sci-Fi Map */}
          <div className="relative bg-[#0f0f0f] rounded-3xl border-2 border-[#FF5C5C]/30 p-8 h-96 overflow-hidden">
            {/* World Map SVG Outline */}
            <svg className="absolute inset-0 w-full h-full opacity-30 z-0" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100,300 Q200,100 400,200 Q600,300 800,200 Q1000,100 1100,300 Q1000,500 800,400 Q600,300 400,400 Q200,500 100,300 Z" stroke="#FF5C5C" strokeWidth="2" fill="none"/>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#0A0A0A] z-10"></div>
            {/* Grid Lines */}
            <div className="absolute inset-0 opacity-20 z-20">
              <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
                {Array.from({ length: 96 }).map((_, i) => (
                  <div key={i} className="border border-[#FF5C5C]/20"></div>
                ))}
              </div>
            </div>
            {/* Live Trends Heatmap */}
            {showLiveTrends && (
              <div className="absolute inset-0 z-30">
                <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-[#FF5C5C]/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-[#FF9999]/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-[#FF5C5C]/40 rounded-full blur-lg animate-pulse"></div>
              </div>
            )}
            {/* Interactive Markers */}
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="absolute group cursor-pointer z-40"
                style={{ left: destination.x, top: destination.y }}
              >
                <div className="relative">
                  <MapPin className="w-8 h-8 text-[#FF5C5C] animate-bounce hover:scale-125 transition-transform duration-300" />
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-[#0A0A0A]/95 backdrop-blur-md border border-[#FF5C5C] rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                    <span className="text-white font-medium">{destination.name}</span>
                    <div className="text-[#FF9999] text-sm">360° Tour Available</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Footer */}
      <section className="py-20 px-4 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF5C5C] mb-12 text-center tracking-wider">
            Featured Inspirations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
                quote: "Adventure awaits in every corner of the world.",
              },
              {
                image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
                quote: "Find beauty in the unexpected places.",
              },
              {
                image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
                quote: "Let the journey change you forever.",
              },
              {
                image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
                quote: "Every destination has a story to tell.",
              },
              {
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
                quote: "The ocean is calling, and I must go.",
              },
              {
                image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
                quote: "Climb mountains not so the world can see you, but so you can see the world.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden shadow-md bg-[#1a1a1a] card-hover">
                <Image src={item.image} alt="Inspiration" width={400} height={256} className="w-full h-64 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-center text-base font-medium">
                  {item.quote}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#FF5C5C]/30 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-[#FF5C5C] mb-4">Host a Stay</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FF9999] transition-colors">
                    Become a Host
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FF9999] transition-colors">
                    Host Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FF9999] transition-colors">
                    Community Hub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#FF5C5C] mb-4">Support Hub</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FF9999] transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FF9999] transition-colors">
                    Safety First
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FF9999] transition-colors">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#FF5C5C] mb-4">Global Stories</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FF9999] transition-colors">
                    Travel Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FF9999] transition-colors">
                    Community Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#FF9999] transition-colors">
                    Local Experiences
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#FF5C5C] mb-4">Connect</h3>
              <div className="flex gap-4 mb-4">
                {["f", "t", "i", "y"].map((social, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-[#FF5C5C] text-white rounded-lg flex items-center justify-center hover:bg-[#FF9999] transition-colors cursor-pointer font-bold text-lg"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  >
                    {social}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[#FF5C5C]/30 pt-8 text-center">
            <p className="text-gray-400">© 2025 Future Airbnb. Redefining travel for tomorrow.</p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 bg-[#FF5C5C] text-white rounded-full p-3 shadow-lg hover:bg-[#FF9999] transition-colors"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}
