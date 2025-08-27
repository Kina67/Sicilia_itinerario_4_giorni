'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { MapPin, Clock, Utensils, Car, Bed, Euro } from 'lucide-react'

export default function SiciliaTravelPage() {
  const [activeTab, setActiveTab] = useState('day1')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-zinc-100">
      {/* Header */}
      <header className="bg-slate-800/90 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-amber-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-amber-400 mb-1">
              Viaggio in Sicilia - Siracusa e Dintorni
            </h1>
            <p className="text-sm md:text-lg text-amber-200">
              Un itinerario indimenticabile di 4 giorni per 4 persone tra le meraviglie della Sicilia orientale
            </p>
          </div>
        </div>
      </header>

      {/* Navigation Buttons */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
          <Button 
            onClick={() => setActiveTab('day1')}
            className="bg-blue-600 hover:bg-blue-700 border-blue-500 text-white"
          >Giorno 1</Button>
          <Button 
            onClick={() => setActiveTab('day2')}
            className="bg-blue-600 hover:bg-blue-700 border-blue-500 text-white"
          >Giorno 2</Button>
          <Button 
            onClick={() => setActiveTab('day3')}
            className="bg-blue-600 hover:bg-blue-700 border-blue-500 text-white"
          >Giorno 3</Button>
          <Button 
            onClick={() => setActiveTab('day4')}
            className="bg-blue-600 hover:bg-blue-700 border-blue-500 text-white"
          >Giorno 4</Button>
          <Button 
            onClick={() => setActiveTab('food')}
            className="bg-amber-600 hover:bg-amber-700 border-amber-500 text-white"
          >Cibo</Button>
          <Button 
            onClick={() => setActiveTab('accommodations')}
            className="bg-emerald-600 hover:bg-emerald-700 border-emerald-500 text-white"
          >Hotel</Button>
          <Button 
            onClick={() => setActiveTab('budget')}
            className="bg-purple-600 hover:bg-purple-700 border-purple-500 text-white"
          >Budget</Button>
        </div>

        {/* Tabs contenuti */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Giorno 1 */}
          <TabsContent value="day1">
            <img src="giorno1-mattina.jpg" alt="Piazza Duomo Ortigia" />
            <img src="giorno1-pomeriggio.jpg" alt="Parco Archeologico Neapolis" />
            <img src="giorno1-sera.jpg" alt="Ristorante Ortigia" />
          </TabsContent>

          {/* Giorno 2 */}
          <TabsContent value="day2">
            <img src="giorno2-mattina.jpg" alt="Noto" />
            <img src="giorno2-pomeriggio.jpg" alt="Spiaggia Fontane Bianche" />
            <img src="giorno2-sera.jpg" alt="Cena Siracusa" />
          </TabsContent>

          {/* Giorno 3 */}
          <TabsContent value="day3">
            <img src="giorno3-mattina.jpg" alt="Taormina" />
            <img src="giorno3-pomeriggio.jpg" alt="Isola Bella" />
            <img src="giorno3-sera.jpg" alt="Cena Taormina" />
          </TabsContent>

          {/* Giorno 4 */}
          <TabsContent value="day4">
            <img src="giorno4-mattina.jpg" alt="Marzamemi" />
            <img src="giorno4-pomeriggio.jpg" alt="Riserva Vendicari" />
            <img src="giorno4-sera.jpg" alt="Cena Marzamemi" />
          </TabsContent>

          {/* Sezione Cibo */}
          <TabsContent value="food">
            <img src="pasta-sarde.jpg" alt="Pasta con le Sarde" />
            <img src="pasta-norma.jpg" alt="Pasta alla Norma" />
            <img src="cannoli-siciliani.jpg" alt="Cannoli Siciliani" />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-zinc-100 py-6 md:py-8 mt-8 border-t border-amber-500/20 text-center">
        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-amber-400">
          Viaggio in Sicilia - Siracusa e Dintorni
        </h3>
        <p className="text-sm text-zinc-200">
          Un'esperienza indimenticabile tra sto
