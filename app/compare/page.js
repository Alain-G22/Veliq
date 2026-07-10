'use client'

import { useState } from 'react'
import Link from 'next/link'
import { carsData } from '@/lib/carData'

export default function ComparePage() {
  const [selectedCars, setSelectedCars] = useState([])

  const toggleCarSelection = (car) => {
    if (selectedCars.find(c => c.id === car.id)) {
      setSelectedCars(selectedCars.filter(c => c.id !== car.id))
    } else if (selectedCars.length < 4) {
      setSelectedCars([...selectedCars, car])
    }
  }

  const specCategories = [
    { label: 'Engine', key: 'engine_cc', unit: 'cc' },
    { label: 'Power', key: 'horsepower', unit: 'hp' },
    { label: 'Torque', key: 'torque', unit: 'Nm' },
    { label: 'Transmission', key: 'transmission', unit: '' },
    { label: 'Fuel Type', key: 'fuel_type', unit: '' },
    { label: 'Fuel Economy', key: 'fuel_economy', unit: 'km/L' },
    { label: 'Seating', key: 'seating', unit: '' },
    { label: 'Ground Clearance', key: 'ground_clearance', unit: 'mm' },
  ]

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-12">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Compare Cars</h1>
          <p className="text-lg text-red-100">
            Select up to 4 cars to compare side-by-side
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-max">
          {/* Car Selection */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-secondary mb-6">Select Cars to Compare</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {carsData.map((car) => (
                <button
                  key={car.id}
                  onClick={() => toggleCarSelection(car)}
                  className={`p-4 rounded-lg border-2 transition-all text-center ${
                    selectedCars.find(c => c.id === car.id)
                      ? 'border-primary bg-red-50'
                      : 'border-gray-200 hover:border-primary'
                  }`}
                  disabled={selectedCars.length === 4 && !selectedCars.find(c => c.id === car.id)}
                >
                  <p className="font-bold text-secondary">{car.brand}</p>
                  <p className="text-sm text-gray-600">{car.model}</p>
                  <p className="text-xs text-gray-500 mt-2">{car.year}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          {selectedCars.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-secondary text-white font-bold border border-gray-300">
                      Specification
                    </th>
                    {selectedCars.map((car) => (
                      <th
                        key={car.id}
                        className="text-center p-4 bg-gray-50 border border-gray-300 min-w-xs"
                      >
                        <div className="font-bold text-secondary">{car.brand}</div>
                        <div className="text-sm text-gray-600">{car.model}</div>
                        <button
                          onClick={() => toggleCarSelection(car)}
                          className="mt-2 text-xs text-primary hover:underline"
                        >
                          Remove
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Price Range */}
                  <tr>
                    <td className="p-4 bg-gray-50 font-semibold text-secondary border border-gray-300">
                      Price Range
                    </td>
                    {selectedCars.map((car) => (
                      <td key={car.id} className="p-4 text-center border border-gray-300">
                        <div className="text-sm font-semibold text-primary">
                          {new Intl.NumberFormat('en-NG', {
                            style: 'currency',
                            currency: 'NGN',
                            minimumFractionDigits: 0,
                          }).format(car.price_min)}
                        </div>
                        <div className="text-xs text-gray-600">
                          to{' '}
                          {new Intl.NumberFormat('en-NG', {
                            style: 'currency',
                            currency: 'NGN',
                            minimumFractionDigits: 0,
                          }).format(car.price_max)}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Body Type */}
                  <tr>
                    <td className="p-4 bg-gray-50 font-semibold text-secondary border border-gray-300">
                      Body Type
                    </td>
                    {selectedCars.map((car) => (
                      <td key={car.id} className="p-4 text-center border border-gray-300">
                        {car.body_type}
                      </td>
                    ))}
                  </tr>

                  {/* Specifications */}
                  {specCategories.map((category) => (
                    <tr key={category.key}>
                      <td className="p-4 bg-gray-50 font-semibold text-secondary border border-gray-300">
                        {category.label}
                      </td>
                      {selectedCars.map((car) => (
                        <td key={car.id} className="p-4 text-center border border-gray-300">
                          {car[category.key]} {category.unit}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedCars.length === 0 && (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4v16m7-16v16" />
              </svg>
              <h3 className="text-2xl font-bold text-secondary mb-2">No cars selected</h3>
              <p className="text-gray-600 mb-6">Select cars from above to start comparing</p>
            </div>
          )}

          {/* CTA */}
          {selectedCars.length > 0 && (
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Not finding what you need? Browse all cars or read our guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/cars" className="btn-secondary">
                  Browse All Cars
                </Link>
                <Link href="/blog" className="btn-outline">
                  Read Our Guides
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
