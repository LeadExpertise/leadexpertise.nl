"use client"

import React from "react"

import { useState } from "react"
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function AIAutomatiseringForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    bottleneck: "",
    teamSize: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const benefits = [
    "Concreet plan van aanpak",
    "Inzicht in besparing (in € en uren)",
    "Geen technisch jargon, heldere taal",
  ]

  return (
    <section id="contact" className="bg-[#0071eb] py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Side: Copy */}
          <div className="flex flex-col">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wide border border-white/20 w-fit mb-6 shadow-sm">
              Start de transformatie
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Ontdek waar jij tijd en geld laat liggen
            </h2>
            <p className="leading-relaxed text-lg text-white/90 mb-10 max-w-xl">
              Vul het formulier in voor een gratis AI Potentie Scan. Wij analyseren je huidige processen en laten zien waar je direct kunt automatiseren.
            </p>

            <ul className="space-y-5 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex bg-white/10 w-6 h-6 border-white/20 border rounded-full mt-0.5 items-center justify-center shadow-sm">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium text-[16px] leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
                alt="Expert"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <div>
                <p className="text-white font-bold text-sm">Spreek met een AI Specialist</p>
                <p className="text-blue-100 text-xs">Vrijblijvend adviesgesprek</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-slate-900">Naam</Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Je naam"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-50 border-slate-200 rounded-lg px-4 py-3.5 text-[15px] focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-slate-900">Zakelijk E-mail</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="naam@bedrijf.nl"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-slate-50 border-slate-200 rounded-lg px-4 py-3.5 text-[15px] focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] shadow-sm"
                  />
                </div>
              </div>

              {/* Row 2: Website */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="website" className="text-sm font-semibold text-slate-900">Website URL</Label>
                <Input
                  type="url"
                  id="website"
                  placeholder="www.jouwbedrijf.nl"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="bg-slate-50 border-slate-200 rounded-lg px-4 py-3.5 text-[15px] focus:ring-2 focus:ring-[#0071eb]/20 focus:border-[#0071eb] shadow-sm"
                />
              </div>

              {/* Process Pain Point Dropdown */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="bottleneck" className="text-sm font-semibold text-slate-900">Waar verlies je nu de meeste tijd?</Label>
                <Select value={formData.bottleneck} onValueChange={(value) => setFormData({ ...formData, bottleneck: value })}>
                  <SelectTrigger className="bg-slate-50 border-slate-200 rounded-lg px-4 py-3.5 text-[15px] h-auto shadow-sm">
                    <SelectValue placeholder="Maak een keuze..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administratie & Data invoer</SelectItem>
                    <SelectItem value="support">Klantenservice / E-mail</SelectItem>
                    <SelectItem value="leads">Lead opvolging & Sales</SelectItem>
                    <SelectItem value="content">Content creatie & Marketing</SelectItem>
                    <SelectItem value="other">Anders</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Team Size */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="team_size" className="text-sm font-semibold text-slate-900">Hoe groot is je team?</Label>
                <Select value={formData.teamSize} onValueChange={(value) => setFormData({ ...formData, teamSize: value })}>
                  <SelectTrigger className="bg-slate-50 border-slate-200 rounded-lg px-4 py-3.5 text-[15px] h-auto shadow-sm">
                    <SelectValue placeholder="Maak een keuze..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1 - 5 medewerkers</SelectItem>
                    <SelectItem value="6-20">6 - 20 medewerkers</SelectItem>
                    <SelectItem value="21-50">21 - 50 medewerkers</SelectItem>
                    <SelectItem value="50+">50+ medewerkers</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0071eb] hover:bg-[#0060c9] text-white rounded-lg mt-2 py-4 font-bold text-[16px] shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Vraag Gratis Scan Aan</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-center text-xs text-slate-400 mt-2">100% vrijblijvend advies op maat.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
