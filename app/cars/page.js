'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import CarCard from '@/components/CarCard'
import FilterBar from '@/components/FilterBar'
import { carsData } from '@/lib/carData'

function CarsPageContent() {
  const searchParams = useSearchParams()
  const [filteredCars, setFilteredCars] = useState(carsData)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    let results = [...carsData]

    // Apply filters from URL params
    const brand = searchParams.get('brand')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const bodyType = searchParams.get('bodyType')
    const fuelType = searchParams.get('fuelType')

    if (brand) {
      results = results.filter(car => car.brand === brand)
    }

    if (minPrice) {
      results = results.filter(car => car.price_min >= parseInt(minPrice))
    }

    if (maxPrice) {
      results = results.filter(car => car.price_max <= parseInt(maxPrice))
    }

    if (bodyType) {
      results = results.filter(car => car.body_type === bodyType)
    }

    if (fuelType) {
      results = results.filter(car => car.fuel_type === fuelType)
    }

    // Apply search query
    if (searchQuery) {
      results = results.filter(car =>
        car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    setFilteredCars(results)
  }, [searchParams, searchQuery])

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-12">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Browse All Cars</h1>
          <p className="text-lg text-red-100">
            {filteredCars.length} cars found
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="container-max py-8">
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by brand or model..."
              className="w-full px-6 py-3 border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section-spacing">
        <div className="container-max">
          <FilterBar />

          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-secondary mb-2">No cars found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search query</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  window.location.href = '/cars'
                }}
                className="btn-primary"
              >
                View All Cars
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default function CarsPage() {
  return (
    <Suspense fallback={<div className="text-center py-16">Loading...</div>}>
      <CarsPageContent />
    </Suspense>
  )
}