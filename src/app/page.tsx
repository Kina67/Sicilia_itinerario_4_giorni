'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { MapPin, Clock, Utensils, Car, Bed, Euro, Camera } from 'lucide-react'

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
<p className="text-base md:text-xl font-semibold text-fuchsia-500">
  Alfredo, Orietta, Luca, Elena
</p>
          </div>
        </div>
      </header>

      {/* Navigation Buttons - Mobile Optimized */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
          <Button 
            variant={activeTab === 'day1' ? 'default' : 'outline'}
            onClick={() => setActiveTab('day1')}
            className="flex items-center gap-1 md:gap-2 text-xs md:text-sm px-3 md:px-4 py-2 h-auto bg-blue-600 hover:bg-blue-700 border-blue-500 text-white"
            size="sm"
          >
            <Clock className="h-3 w-3 md:h-4 md:w-4" />
            <span>Giorno 1</span>
          </Button>
          <Button 
            variant={activeTab === 'day2' ? 'default' : 'outline'}
            onClick={() => setActiveTab('day2')}
            className="flex items-center gap-1 md:gap-2 text-xs md:text-sm px-3 md:px-4 py-2 h-auto bg-blue-600 hover:bg-blue-700 border-blue-500 text-white"
            size="sm"
          >
            <Clock className="h-3 w-3 md:h-4 md:w-4" />
            <span>Giorno 2</span>
          </Button>
          <Button 
            variant={activeTab === 'day3' ? 'default' : 'outline'}
            onClick={() => setActiveTab('day3')}
            className="flex items-center gap-1 md:gap-2 text-xs md:text-sm px-3 md:px-4 py-2 h-auto bg-blue-600 hover:bg-blue-700 border-blue-500 text-white"
            size="sm"
          >
            <Clock className="h-3 w-3 md:h-4 md:w-4" />
            <span>Giorno 3</span>
          </Button>
          <Button 
            variant={activeTab === 'day4' ? 'default' : 'outline'}
            onClick={() => setActiveTab('day4')}
            className="flex items-center gap-1 md:gap-2 text-xs md:text-sm px-3 md:px-4 py-2 h-auto bg-blue-600 hover:bg-blue-700 border-blue-500 text-white"
            size="sm"
          >
            <Clock className="h-3 w-3 md:h-4 md:w-4" />
            <span>Giorno 4</span>
          </Button>
          <Button 
            variant={activeTab === 'food' ? 'default' : 'outline'}
            onClick={() => setActiveTab('food')}
            className="flex items-center gap-1 md:gap-2 text-xs md:text-sm px-3 md:px-4 py-2 h-auto bg-amber-600 hover:bg-amber-700 border-amber-500 text-white"
            size="sm"
          >
            <Utensils className="h-3 w-3 md:h-4 md:w-4" />
            <span>Cibo</span>
          </Button>
          <Button 
            variant={activeTab === 'accommodations' ? 'default' : 'outline'}
            onClick={() => setActiveTab('accommodations')}
            className="flex items-center gap-1 md:gap-2 text-xs md:text-sm px-3 md:px-4 py-2 h-auto bg-emerald-600 hover:bg-emerald-700 border-emerald-500 text-white"
            size="sm"
          >
            <Bed className="h-3 w-3 md:h-4 md:w-4" />
            <span>Hotel</span>
          </Button>
          <Button 
            variant={activeTab === 'budget' ? 'default' : 'outline'}
            onClick={() => setActiveTab('budget')}
            className="flex items-center gap-1 md:gap-2 text-xs md:text-sm px-3 md:px-4 py-2 h-auto bg-purple-600 hover:bg-purple-700 border-purple-500 text-white"
            size="sm"
          >
            <Euro className="h-3 w-3 md:h-4 md:w-4" />
            <span>Budget</span>
          </Button>
        </div>

        {/* Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Giorno 1 - Ortigia e Siracusa */}
          <TabsContent value="day1" className="space-y-4">
            <Card className="bg-slate-800/80 backdrop-blur-sm shadow-xl border-amber-500/20">
              <CardHeader className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                  Giorno 1 - Ortigia e il Centro Storico di Siracusa
                </CardTitle>
                <CardDescription className="text-blue-200 text-sm md:text-base">
                  Esplorazione della splendida isola di Ortigia e del Parco Archeologico della Neapolis
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="space-y-6">
                  {/* Mattina */}
                  <Card className="border-l-4 border-amber-500 overflow-hidden bg-slate-700/50">
                    <div className="relative h-48 md:h-56">
                      <img 
                        src="giorno1-mattina.jpg" 
                        alt="Piazza Duomo Ortigia"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Mattina
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg mb-2 text-amber-300">Piazza Duomo e Tempio di Apollo</h4>
                      <p className="text-sm text-zinc-200 mb-3">
                        Visita alla splendida Piazza Duomo, cuore di Ortigia, con il suo Duomo barocco e il Tempio di Apollo, uno dei più antichi della Sicilia.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span className="text-zinc-200">9:00 - 12:00</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-emerald-400" />
                          <span className="text-zinc-200">Ortigia, Siracusa</span>
                        </div>
                        <Badge variant="secondary" className="mt-2 bg-emerald-600 text-white">Gratis</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Pomeriggio - NUOVO: Neapolis */}
                  <Card className="border-l-4 border-orange-500 overflow-hidden bg-slate-700/50">
                    <div className="relative h-48 md:h-56">
                      <img 
                        src="giorno1-pomeriggio.jpg" 
                        alt="Parco Archeologico Neapolis"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Pomeriggio
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg mb-2 text-orange-300">Neapolis - Parco Archeologico</h4>
                      <p className="text-sm text-zinc-200 mb-3">
                        Visita al Parco Archeologico della Neapolis con l'imponente Anfiteatro Romano e il magnifico Teatro Greco. Esplorazione dei luoghi d'arte più significativi.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span className="text-zinc-200">14:30 - 17:30</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-emerald-400" />
                          <span className="text-zinc-200">Neapolis, Siracusa</span>
                        </div>
                        <Badge variant="outline" className="mt-2 border-orange-500 text-orange-300">Ingresso €13 a persona</Badge>
                      </div>
                      
                      <div className="mt-4 p-3 bg-orange-900/20 rounded-lg">
                        <h5 className="font-semibold text-orange-300 mb-2 text-sm">Attività Principali:</h5>
                        <ul className="text-xs text-zinc-200 space-y-1">
                          <li>• <strong>Visita al Parco Archeologico della Neapolis</strong></li>
                          <li>• <strong>Anfiteatro Romano</strong></li>
                          <li>• <strong>Teatro Greco</strong></li>
                        </ul>
                        
                        <h5 className="font-semibold text-orange-300 mb-2 mt-3 text-sm">Luoghi d'Arte:</h5>
                        <ul className="text-xs text-zinc-200 space-y-1">
                          <li>• <strong>Orecchio di Dionisio</strong></li>
                          <li>• <strong>Grotta dei Cordari</strong></li>
                          <li>• <strong>Tomba di Archimede</strong></li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sera */}
                  <Card className="border-l-4 border-purple-500 overflow-hidden bg-slate-700/50">
                    <div className="relative h-48 md:h-56">
                      <img 
                        src="giorno1-sera.jpg" 
                        alt="Ristorante Ortigia"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Sera
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg mb-2 text-purple-300">Cena in Ristorante Tipico</h4>
                      <p className="text-sm text-zinc-200 mb-3">
                        Cena in un ristorante tradizionale di Ortigia per assaporare i piatti tipici della cucina siracusana.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span className="text-zinc-200">20:00 - 22:30</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Utensils className="h-4 w-4 text-red-400" />
                          <span className="text-zinc-200">Ristorante di Ortigia</span>
                        </div>
                        <Badge variant="outline" className="mt-2 border-purple-500 text-purple-300">€25-35 a persona</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
                  <h4 className="font-semibold text-blue-300 mb-2">Dove Mangiare a Giorno 1:</h4>
                  <ul className="text-sm text-zinc-200 space-y-1">
                    <li>• <strong className="text-amber-300">Trattoria La Foglia</strong> - Cucina tradizionale siracusana - <span className="text-orange-300">€20-30 a persona</span></li>
                    <li>• <strong className="text-amber-300">Osteria da Sebastiano</strong> - Via Roma, 54 - Piatti tradizionali siciliani</li>
                    <li>• <strong className="text-amber-300">Ristorante Don Camillo</strong> - Via Cavour, 28 - Specialità di pesce fresco</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Giorno 2 - Noto e Spiaggia Fontane Bianche */}
          <TabsContent value="day2" className="space-y-4">
            <Card className="bg-slate-800/80 backdrop-blur-sm shadow-xl border-amber-500/20">
              <CardHeader className="bg-gradient-to-r from-amber-700 to-amber-900 text-white">
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                  Giorno 2 - Noto e Spiaggia Fontane Bianche
                </CardTitle>
                <CardDescription className="text-amber-200 text-sm md:text-base">
                  Scoperta del barocco siciliano a Noto e relax sulla splendida spiaggia di Fontane Bianche
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="space-y-6">
                  {/* Mattina */}
                  <Card className="border-l-4 border-amber-500 overflow-hidden bg-slate-700/50">
                    <div className="relative h-48 md:h-56">
                      <img 
                        src="giorno2-mattina.jpg" 
                        alt="Noto Barocca"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Mattina
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg mb-2 text-amber-300">Noto Barocca</h4>
                      <p className="text-sm text-zinc-200 mb-3">
                        Visita della splendida città di Noto, capitale del barocco siciliano. Duomo, Palazzo Ducezio e le chiese monumentali.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span className="text-zinc-200">9:00 - 13:00</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-emerald-400" />
                          <span className="text-zinc-200">45 min da Siracusa</span>
                        </div>
                        <Badge variant="secondary" className="mt-2 bg-emerald-600 text-white">Gratis</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Pomeriggio */}
                  <Card className="border-l-4 border-orange-500 overflow-hidden bg-slate-700/50">
                    <div className="relative h-48 md:h-56">
                      <img 
                        src="giorno2-pomeriggio.jpg" 
                        alt="Spiaggia Fontane Bianche"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Pomeriggio
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg mb-2 text-orange-300">Spiaggia Fontane Bianche</h4>
                      <p className="text-sm text-zinc-200 mb-3">
                        Relax sulla spiaggia di Fontane Bianche, con acque cristalline e sabbia bianca. Perfetta per nuotare e prendere il sole.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span className="text-zinc-200">14:00 - 18:00</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-emerald-400" />
                          <span className="text-zinc-200">20 min da Noto</span>
                        </div>
                        <Badge variant="secondary" className="mt-2 bg-emerald-600 text-white">Lido €15-20</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sera */}
                  <Card className="border-l-4 border-purple-500 overflow-hidden bg-slate-700/50">
                    <div className="relative h-48 md:h-56">
                      <img 
                        src="giorno2-sera.jpg" 
                        alt="Ristorante Porto"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Sera
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg mb-2 text-purple-300">Rientro e Cena</h4>
                      <p className="text-sm text-zinc-200 mb-3">
                        Rientro a Siracusa e cena in un ristorante di pesce nella zona del porto, assaporando le specialità locali.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span className="text-zinc-200">20:00 - 22:30</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Utensils className="h-4 w-4 text-red-400" />
                          <span className="text-zinc-200">Ristorante Porto</span>
                        </div>
                        <Badge variant="outline" className="mt-2 border-purple-500 text-purple-300">€30-40 a persona</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-4 bg-amber-900/30 rounded-lg border border-amber-500/30">
                  <h4 className="font-semibold text-amber-300 mb-2">Dove Mangiare a Giorno 2:</h4>
                  <ul className="text-sm text-zinc-200 space-y-1">
                    <li>• <strong className="text-amber-300">Caffe Sicilia</strong> - Corso Vittorio Emanuele, 125 - Pasticceria e gelateria artigianale a Noto</li>
                    <li>• <strong className="text-amber-300">Ristorante La Piazzetta</strong> - Via Rosario Livoli, 10 - Specialità di pesce a Fontane Bianche</li>
                    <li>• <strong className="text-amber-300">Osteria Il Baciccio</strong> - Via Giuseppe Garibaldi, 54 - Cucina tradizionale Siracusa</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Giorno 3 - Taormina e Isola Bella */}
          <TabsContent value="day3" className="space-y-4">
            <Card className="bg-slate-800/80 backdrop-blur-sm shadow-xl border-amber-500/20">
              <CardHeader className="bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                  Giorno 3 - Taormina e Isola Bella
                </CardTitle>
                <CardDescription className="text-emerald-200 text-sm md:text-base">
                  Giornata tra la perla della Sicilia e la splendida Isola Bella, con vista sull'Etna
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="space-y-6">
                  {/* Mattina */}
                  <Card className="border-l-4 border-amber-500 overflow-hidden bg-slate-700/50">
                    <div className="relative h-48 md:h-56">
                      <img 
                        src="giorno3-mattina.jpg" 
                        alt="Teatro Greco Taormina"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Mattina
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg mb-2 text-amber-300">Taormina e Teatro Greco</h4>
                      <p className="text-sm text-zinc-200 mb-3">
                        Visita del famoso Teatro Greco di Taormina, con vista spettacolare sull'Etna e sul mare. Passeggiata per Corso Umberto.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span className="text-zinc-200">9:00 - 13:00</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-emerald-400" />
                          <span className="text-zinc-200">1h 15min da Siracusa</span>
                        </div>
                        <Badge variant="outline" className="mt-2 border-amber-500 text-amber-300">Teatro €10 a persona</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Pomeriggio */}
                  <Card className="border-l-4 border-orange-500 overflow-hidden bg-slate-700/50">
                    <div className="relative h-48 md:h-56">
                      <img 
                        src="giorno3-pomeriggio.jpg" 
                        alt="Isola Bella"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Pomeriggio
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg mb-2 text-orange-300">Isola Bella e Mare</h4>
                      <p className="text-sm text-zinc-200 mb-3">
                        Discesa a Isola Bella, la splendida isola collegata alla terraferma, per una nuotata e relax sul mare cristallino.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span className="text-zinc-200">14:00 - 17:30</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-emerald-400" />
                          <span className="text-zinc-200">Sotto Taormina</span>
                        </div>
                        <Badge variant="secondary" className="mt-2 bg-emerald-600 text-white">Lido €10-15</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sera */}
                  <Card className="border-l-4 border-purple-500 overflow-hidden bg-slate-700/50">
                    <div className="relative h-48 md:h-56">
                      <img 
                        src="giorno3-sera.jpg" 
                        alt="Cena con Vista Taormina"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Sera
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg mb-2 text-purple-300">Cena con Vista</h4>
                      <p className="text-sm text-zinc-200 mb-3">
                        Cena in un ristorante con vista panoramica a Taormina, assaporando specialità locali con tramonto spettacolare.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span className="text-zinc-200">19:30 - 22:00</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Utensils className="h-4 w-4 text-red-400" />
                          <span className="text-zinc-200">Ristorante Taormina</span>
                        </div>
                        <Badge variant="outline" className="mt-2 border-purple-500 text-purple-300">€35-45 a persona</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-4 bg-emerald-900/30 rounded-lg border border-emerald-500/30">
                  <h4 className="font-semibold text-emerald-300 mb-2">Dove Mangiare a Giorno 3:</h4>
                  <ul className="text-sm text-zinc-200 space-y-1">
                    <li>• <strong className="text-emerald-300">Ristorante La Grotta Azzurra</strong> - Via Pirandello, 2 - Specialità di pesce con vista mare</li>
                    <li>• <strong className="text-emerald-300">Trattoria Tiramisu</strong> - Corso Umberto, 123 - Piatti tipici taorminesi</li>
                    <li>• <strong className="text-emerald-300">Bar Timeo</strong> - Via Teatro Greco, 13 - Aperitivo con vista sul teatro greco</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Giorno 4 - Marzamemi e Riserva Naturale */}
          <TabsContent value="day4" className="space-y-4">
            <Card className="bg-slate-800/80 backdrop-blur-sm shadow-xl border-amber-500/20">
              <CardHeader className="bg-gradient-to-r from-teal-700 to-teal-900 text-white">
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                  Giorno 4 - Marzamemi e Riserva Naturale
                </CardTitle>
                <CardDescription className="text-teal-200 text-sm md:text-base">
                  Ultimo giorno tra il borgo marinaro di Marzamemi e la riserva naturale di Vendicari
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="space-y-6">
                  {/* Mattina */}
                  <Card className="border-l-4 border-amber-500 overflow-hidden bg-slate-700/50">
                    <div className="relative h-48 md:h-56">
                      <img 
                        src="giorno4-mattina.jpg" 
                        alt="Marzamemi Borgo Marinaro"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Mattina
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg mb-2 text-amber-300">Marzamemi Borgo Marinaro</h4>
                      <p className="text-sm text-zinc-200 mb-3">
                        Visita del caratteristico borgo di pescatori di Marzamemi, con le sue case colorate e la tonnara storica.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span className="text-zinc-200">9:30 - 12:30</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-emerald-400" />
                          <span className="text-zinc-200">40 min da Siracusa</span>
                        </div>
                        <Badge variant="secondary" className="mt-2 bg-emerald-600 text-white">Gratis</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Pomeriggio */}
                  <Card className="border-l-4 border-orange-500 overflow-hidden bg-slate-700/50">
                    <div className="relative h-48 md:h-56">
                      <img 
                        src="giorno4-pomeriggio.jpg" 
                        alt="Riserva Vendicari"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Pomeriggio
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg mb-2 text-orange-300">Riserva Naturale Vendicari</h4>
                      <p className="text-sm text-zinc-200 mb-3">
                        Escursione nella Riserva Naturale di Vendicari, con le sue spiagge selvagge, saline e flora mediterranea protetta.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span className="text-zinc-200">13:30 - 17:00</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-emerald-400" />
                          <span className="text-zinc-200">Vicino Marzamemi</span>
                        </div>
                        <Badge variant="outline" className="mt-2 border-amber-500 text-amber-300">Ingresso €3,50 a persona</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sera */}
                  <Card className="border-l-4 border-purple-500 overflow-hidden bg-slate-700/50">
                    <div className="relative h-48 md:h-56">
                      <img 
                        src="giorno4-sera.jpg" 
                        alt="Cena Marzamemi"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Sera
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg mb-2 text-purple-300">Cena d'Addio</h4>
                      <p className="text-sm text-zinc-200 mb-3">
                        Cena d'addio in un ristorante di pesce a Marzamemi, assaporando le specialità del luogo in un'atmosfera romantica.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span className="text-zinc-200">19:30 - 22:00</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Utensils className="h-4 w-4 text-red-400" />
                          <span className="text-zinc-200">Ristorante Marzamemi</span>
                        </div>
                        <Badge variant="outline" className="mt-2 border-purple-500 text-purple-300">€30-40 a persona</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-4 bg-teal-900/30 rounded-lg border border-teal-500/30">
                  <h4 className="font-semibold text-teal-300 mb-2">Dove Mangiare a Giorno 4:</h4>
                  <ul className="text-sm text-zinc-200 space-y-1">
                    <li>• <strong className="text-teal-300">Ristorante La Piazzetta di Marzamemi</strong> - Piazza Regina Margherita - Pesce fresco spada</li>
                    <li>• <strong className="text-teal-300">Taverna La Tonnara</strong> - Via Tonnara, 5 - Specialità di pesce locale</li>
                    <li>• <strong className="text-teal-300">Bar del Porto</strong> - Lungomare - Aperitivo con vista sul borgo</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Piatti Tipici */}
          <TabsContent value="food" className="space-y-4">
            <Card className="bg-slate-800/80 backdrop-blur-sm shadow-xl border-amber-500/20">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-700 text-white">
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <Utensils className="h-5 w-5 md:h-6 md:w-6" />
                  Piatti Tipici della Sicilia - Zona di Siracusa
                </CardTitle>
                <CardDescription className="text-red-200 text-sm md:text-base">
                  Le specialità gastronomiche da non perdere durante il vostro viaggio
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Piatti di Pesce */}
                  <Card className="border-l-4 border-blue-500 overflow-hidden bg-slate-700/50">
                    <div className="relative h-40">
                      <img 
                        src="pasta-sarde.jpg" 
                        alt="Pasta con le Sarde"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-blue-300 mb-3">Piatti di Pesce</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-blue-200">Pasta con le Sarde</h5>
                          <p className="text-sm text-zinc-200">
                            Simbolo della cucina siciliana, con sardine fresche, finocchietto selvatico, pinoli e uva passa.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-200">Spada alla Siciliana</h5>
                          <p className="text-sm text-zinc-200">
                            Filetto di spada con pomodorini, olive, capperi e olive nere, tipico dello Stretto.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-200">Fritto Misto di Pesce</h5>
                          <p className="text-sm text-zinc-200">
                            Fritto di pesce fresco del giorno, calamari, gamberi e piccoli pesci locali.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-200">Couscous di Pesce</h5>
                          <p className="text-sm text-zinc-200">
                            Importato dalla tradizione araba, con brodetto di pesce misto e verdure.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Piatti di Terra */}
                  <Card className="border-l-4 border-emerald-500 overflow-hidden bg-slate-700/50">
                    <div className="relative h-40">
                      <img 
                        src="pasta-norma.jpg" 
                        alt="Pasta alla Norma"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-emerald-300 mb-3">Piatti di Terra</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-emerald-200">Pasta alla Norma</h5>
                          <p className="text-sm text-zinc-200">
                            Classica catanese con melanzane fritte, ricotta salata, basilico e pomodoro.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-emerald-200">Caponata</h5>
                          <p className="text-sm text-zinc-200">
                            Antipasto a base di melanzane, sedano, olive e capperi in agrodolce.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-emerald-200">Arancini</h5>
                          <p className="text-sm text-zinc-200">
                            Frittelle di riso ripiene di ragù, prosciutto cotto o spinaci, fritte e dorate.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-emerald-200">Involtini di Pesce Spada</h5>
                          <p className="text-sm text-zinc-200">
                            Rotolini di pesce spada con pan grattato, pinoli e uvette, tipici di Siracusa.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Dolci e Prodotti Tipici */}
                  <Card className="border-l-4 border-purple-500 overflow-hidden bg-slate-700/50">
                    <div className="relative h-40">
                      <img 
                        src="cannoli-siciliani.jpg" 
                        alt="Cannoli Siciliani"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-purple-300 mb-3">Dolci e Prodotti Tipici</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-purple-200">Cannoli Siciliani</h5>
                          <p className="text-sm text-zinc-200">
                            Cialde friabili ripiene di ricotta fresca, gocce di cioccolato o frutta candita.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-200">Cassata Siciliana</h5>
                          <p className="text-sm text-zinc-200">
                            Torta tradizionale con pan di spagna, ricotta, frutta candita e pasta reale.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-200">Granita</h5>
                          <p className="text-sm text-zinc-200">
                            Sorbetto siciliano, gusti classici: limone, mandorla, pistacchio, caffè.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-200">Olio d'Oliva DOP</h5>
                          <p className="text-sm text-zinc-200">
                            Olio extravergine d'oliva Dop Val di Mazara, prodotto locale di alta qualità.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <Card className="bg-amber-900/30 border-l-4 border-amber-500">
                    <CardHeader>
                      <CardTitle className="text-lg text-amber-300">Vini Locali</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-amber-200">Nero d'Avola</h5>
                          <p className="text-sm text-zinc-200">
                            Vino rosso corposo e fruttato, perfetto con piatti di carne e formaggi.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-amber-200">Etna Rosso</h5>
                          <p className="text-sm text-zinc-200">
                            Vino vulcanico con sentori minerali, ideale con pesce e carni bianche.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-amber-200">Inzolia</h5>
                          <p className="text-sm text-zinc-200">
                            Vino bianco fresco e aromatico, ottimo come aperitivo con antipasti.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-teal-900/30 border-l-4 border-teal-500">
                    <CardHeader>
                      <CardTitle className="text-lg text-teal-300">Prodotti da Portare a Casa</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-teal-200">Pistacchi di Bronte</h5>
                          <p className="text-sm text-zinc-200">
                            Pistacchi verdi DOP, ottimi per dolci, gelati e primi piatti.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-teal-200">Miele di Timo</h5>
                          <p className="text-sm text-zinc-200">
                            Miele aromatico raccolto sulle colline siciliane, perfetto con formaggi.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-teal-200">Olive Nocellara</h5>
                          <p className="text-sm text-zinc-200">
                            Olive verdi dolci e carnose, conservate in salamoia o olio.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Strutture Ricettive */}
          <TabsContent value="accommodations" className="space-y-4">
            <Card className="bg-slate-800/80 backdrop-blur-sm shadow-xl border-amber-500/20">
              <CardHeader className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white">
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <Bed className="h-5 w-5 md:h-6 md:w-6" />
                  Strutture Ricettive Consigliate
                </CardTitle>
                <CardDescription className="text-indigo-200 text-sm md:text-base">
                  3 alloggi nella zona periferica di Siracusa con parcheggio comodo e facile accesso
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border-l-4 border-blue-500 bg-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-300">Hotel Princile</CardTitle>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-500">★</span>
                        ))}
                        <span className="text-sm text-zinc-300 ml-2">8.5/10</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-zinc-200 mb-3">
                        Hotel moderno in zona periferica con ampio parcheggio gratuito, piscina e ottima colazione. A 10 minuti da Ortigia.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-emerald-400" />
                          <span className="text-zinc-200">Zona Cassibile</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-blue-400" />
                          <span className="text-zinc-200">Parcheggio gratuito</span>
                        </div>
                        <Badge variant="outline" className="mt-2 border-blue-500 text-blue-300">€80-100 a notte</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-emerald-500 bg-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-emerald-300">Villa Sofia</CardTitle>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-500">★</span>
                        ))}
                        <span className="text-sm text-zinc-300 ml-2">9.0/10</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-zinc-200 mb-3">
                        Villa indipendente con giardino e parcheggio privato. Ideale per coppie che cercano tranquillità e comfort.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-emerald-400" />
                          <span className="text-zinc-200">Zona Belvedere</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-blue-400" />
                          <span className="text-zinc-200">Parcheggio privato</span>
                        </div>
                        <Badge variant="outline" className="mt-2 border-emerald-500 text-emerald-300">€90-110 a notte</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-purple-500 bg-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-purple-300">B&B Archimede</CardTitle>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(4)].map((_, i) => (
                          <span key={i} className="text-yellow-500">★</span>
                        ))}
                        <span className="text-sm text-zinc-300 ml-2">8.2/10</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-zinc-200 mb-3">
                        Bed & Breakfast familiare con camere spaziose, parcheggio comodo e colazione abbondante. Ottimo rapporto qualità-prezzo.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-emerald-400" />
                          <span className="text-zinc-200">Zona Targia</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-blue-400" />
                          <span className="text-zinc-200">Parcheggio incluso</span>
                        </div>
                        <Badge variant="outline" className="mt-2 border-purple-500 text-purple-300">€70-85 a notte</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-4 bg-indigo-900/30 rounded-lg border border-indigo-500/30">
                  <h4 className="font-semibold text-indigo-300 mb-2">Perché scegliere la zona periferica:</h4>
                  <ul className="text-sm text-zinc-200 space-y-1">
                    <li>• <strong className="text-indigo-300">Parcheggio facile e gratuito</strong> - Niente stress per trovare posto auto</li>
                    <li>• <strong className="text-indigo-300">Accesso auto agevole</strong> - Perfetto per gli spostamenti giornalieri</li>
                    <li>• <strong className="text-indigo-300">Tranquillità</strong> - Lontano dal caos del centro storico e ZTL</li>
                    <li>• <strong className="text-indigo-300">Prezzi più convenienti</strong> - Rispetto alle strutture centrali</li>
                    <li>• <strong className="text-indigo-300">Ampi spazi</strong> - Camere più spaziose e servizi aggiuntivi</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Budget del Viaggio */}
          <TabsContent value="budget" className="space-y-4">
            <Card className="bg-slate-800/80 backdrop-blur-sm shadow-xl border-amber-500/20">
              <CardHeader className="bg-gradient-to-r from-purple-700 to-purple-900 text-white">
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  <Euro className="h-5 w-5 md:h-6 md:w-6" />
                  Budget del Viaggio - 4 Giorni per 4 Persone
                </CardTitle>
                <CardDescription className="text-purple-200 text-sm md:text-base">
                  Analisi dettagliata dei costi totali per il viaggio in Sicilia (4 notti di pernottamento)
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                  {/* Costi Pernottamento */}
                  <Card className="border-l-4 border-blue-500 bg-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-300">Pernottamento (4 notti)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-zinc-200">Hotel Princile (2 camere)</span>
                          <span className="text-sm font-semibold text-blue-300">€320-400/4 notti</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-zinc-200">Villa Sofia (2 camere)</span>
                          <span className="text-sm font-semibold text-blue-300">€360-440/4 notti</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-zinc-200">B&B Archimede (2 camere)</span>
                          <span className="text-sm font-semibold text-blue-300">€280-340/4 notti</span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between font-semibold">
                            <span className="text-zinc-200">Media pernottamento</span>
                            <span className="text-blue-300">€320-393 totali</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Costi Pasti */}
                  <Card className="border-l-4 border-orange-500 bg-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-orange-300">Pasti (4 giorni)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-zinc-200">Colazioni (incluse in B&B)</span>
                          <span className="text-sm font-semibold text-orange-300">€0</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-zinc-200">Pranzi (4 giorni x 4 persone)</span>
                          <span className="text-sm font-semibold text-orange-300">€240-320</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-zinc-200">Cene (4 giorni x 4 persone)</span>
                          <span className="text-sm font-semibold text-orange-300">€480-640</span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between font-semibold">
                            <span className="text-zinc-200">Totale pasti</span>
                            <span className="text-orange-300">€720-960 totali</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Costi Spostamenti */}
                  <Card className="border-l-4 border-emerald-500 bg-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-emerald-300">Spostamenti</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-zinc-200">Noleggio auto (4 giorni)</span>
                          <span className="text-sm font-semibold text-emerald-300">€180-220</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-zinc-200">Benzina (circa 300km)</span>
                          <span className="text-sm font-semibold text-emerald-300">€45-55</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-zinc-200">Pedaggi e parcheggi</span>
                          <span className="text-sm font-semibold text-emerald-300">€20-30</span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between font-semibold">
                            <span className="text-zinc-200">Totale spostamenti</span>
                            <span className="text-emerald-300">€245-305 totali</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Costi Attività */}
                  <Card className="border-l-4 border-purple-500 bg-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-purple-300">Attività e Intrattenimento</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-zinc-200">Teatro Greco Taormina</span>
                          <span className="text-sm font-semibold text-purple-300">€40</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-zinc-200">Parco Archeologico Neapolis</span>
                          <span className="text-sm font-semibold text-purple-300">€52</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-zinc-200">Lidi e spiagge</span>
                          <span className="text-sm font-semibold text-purple-300">€60-80</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-zinc-200">Riserva Vendicari</span>
                          <span className="text-sm font-semibold text-purple-300">€14</span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between font-semibold">
                            <span className="text-zinc-200">Totale attività</span>
                            <span className="text-purple-300">€166-186 totali</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Riepilogo Budget */}
                <Card className="mt-6 border-l-4 border-red-500 bg-red-900/30">
                  <CardHeader>
                    <CardTitle className="text-xl text-red-300">Riepilogo Budget Totale</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex justify-between text-lg">
                          <span className="text-zinc-200">Pernottamento (4 notti)</span>
                          <span className="font-semibold text-red-300">€320-393</span>
                        </div>
                        <div className="flex justify-between text-lg">
                          <span className="text-zinc-200">Pasti (4 giorni)</span>
                          <span className="font-semibold text-red-300">€720-960</span>
                        </div>
                        <div className="flex justify-between text-lg">
                          <span className="text-zinc-200">Spostamenti</span>
                          <span className="font-semibold text-red-300">€245-305</span>
                        </div>
                        <div className="flex justify-between text-lg">
                          <span className="text-zinc-200">Attività</span>
                          <span className="font-semibold text-red-300">€166-186</span>
                        </div>
                        <div className="border-t-2 border-red-500 pt-3">
                          <div className="flex justify-between text-xl font-bold text-red-300">
                            <span className="text-zinc-200">TOTALE 4 PERSONE</span>
                            <span>€1.451 - 1.844</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-300 mb-3">Costo pro capite:</h4>
                        <div className="text-2xl font-bold text-red-400">
                          €363 - 461 a persona
                        </div>
                        <p className="text-sm text-zinc-300 mt-2">
                          Per un viaggio di 4 giorni completo di alloggio, pasti, trasporti e attività
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-zinc-100 py-6 md:py-8 mt-8 border-t border-amber-500/20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-amber-400">Viaggio in Sicilia - Siracusa e Dintorni</h3>
          <p className="text-zinc-200 text-sm md:text-base mb-2">
            Un'esperienza indimenticabile tra storia, mare e sapori autentici
          </p>
          <p className="text-xs md:text-sm text-zinc-300">
            
          </p>
        </div>
      </footer>
    </div>
  )
}
