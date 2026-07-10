'use client'

import { useState } from 'react'
import Link from 'next/link'
import { carsData } from '@/lib/carData'

export default function CarDetailPage({ params }) {
  const [compareMode, setCompareMode] = useState(false)

  // Parse slug to find car
  const slug = params.slug
  const [brand, ...modelParts] = slug.split('-')
  const model = modelParts.join('-')

  const car = carsData.find(
    c => c.brand.toLowerCase() === brand && c.model.toLowerCase().replace(/\s+/g, '-') === model
  )

  if (!car) {
    return (
      <main>
        <section className="py-16">
          <div className="container-max text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">Car Not Found</h1>
            <p className="text-gray-600 mb-8">Sorry, we couldn't find this car.</p>
            <Link href="/cars" className="btn-primary">Back to Cars</Link>
          </div>
        </section>
      </main>
    )
  }

  const formattedMinPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(car.price_min)

  const formattedMaxPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(car.price_max)

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-max py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="text-primary hover:underline">Home</Link>
            <span>/</span>
            <Link href="/cars" className="text-primary hover:underline">Cars</Link>
            <span>/</span>
            <span>{car.brand} {car.model}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-spacing">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Image & Details */}
            <div className="lg:col-span-2">
              {/* Image */}
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-8 h-96">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Basic Info */}
              <h1 className="text-4xl font-display font-bold text-secondary mb-2">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-600 text-lg mb-6">{car.year}</p>

              {/* Price Section */}
              <div className="bg-gradient-to-r from-primary to-red-700 text-white p-8 rounded-lg mb-8">
                <p className="text-sm uppercase tracking-wide mb-2 text-red-100">Price Range</p>
                <h2 className="text-4xl font-bold mb-2">{formattedMinPrice}</h2>
                <p className="text-red-100">Starting from this price. Actual price depends on model year and condition.</p>
                <p className="text-red-100 mt-2">Up to {formattedMaxPrice} for newer models</p>
              </div>

              {/* Specs Grid */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Specifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="card p-6">
                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Engine</p>
                    <p className="text-2xl font-bold text-secondary">{car.engine_cc}cc</p>
                  </div>

                  <div className="card p-6">
                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Power</p>
                    <p className="text-2xl font-bold text-secondary">{car.horsepower}hp</p>
                  </div>

                  <div className="card p-6">
                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Torque</p>
                    <p className="text-2xl font-bold text-secondary">{car.torque}Nm</p>
                  </div>

                  <div className="card p-6">
                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Fuel Type</p>
                    <p className="text-xl font-bold text-secondary">{car.fuel_type}</p>
                  </div>

                  <div className="card p-6">
                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Transmission</p>
                    <p className="text-xl font-bold text-secondary">{car.transmission}</p>
                  </div>

                  <div className="card p-6">
                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Fuel Economy</p>
                    <p className="text-xl font-bold text-secondary">{car.fuel_economy} km/L</p>
                  </div>

                  <div className="card p-6">
                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Seating</p>
                    <p className="text-2xl font-bold text-secondary">{car.seating}</p>
                  </div>

                  <div className="card p-6">
                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Body Type</p>
                    <p className="text-xl font-bold text-secondary">{car.body_type}</p>
                  </div>

                  <div className="card p-6">
                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Ground Clearance</p>
                    <p className="text-xl font-bold text-secondary">{car.ground_clearance}mm</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-secondary mb-4">About This Car</h3>
                <p className="text-gray-600 mb-4">
                  The {car.brand} {car.model} is one of Nigeria's most popular used car choices. Known for its reliability, affordability, and strong resale value, this vehicle is an excellent investment for buyers looking for a dependable daily driver.
                </p>
                <p className="text-gray-600 mb-4">
                  With a {car.fuel_type} engine producing {car.horsepower} horsepower and {car.torque}Nm of torque, the {car.model} offers a good balance of performance and efficiency. The {car.transmission} transmission ensures smooth gear shifts both in city traffic and highway driving.
                </p>
                <p className="text-gray-600">
                  Fuel economy averages around {car.fuel_economy} km/L, making it economical for daily use. The {car.body_type} configuration with {car.seating} seats provides comfortable accommodation for small to medium families.
                </p>
              </div>
            </div>

            {/* Right - Sidebar */}
            <div>
              {/* CTA Box */}
              <div className="card p-6 sticky top-24 mb-6">
                <h3 className="text-xl font-bold text-secondary mb-4">Interested?</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Get in touch with dealers and sellers to find the perfect {car.brand} {car.model} for you.
                </p>
                <button className="btn-primary w-full mb-3">
                  Find Similar Cars
                </button>
                <button className="btn-outline w-full text-center">
                  Enquire Now
                </button>
              </div>

              {/* Quick Facts */}
              <div className="card p-6 mb-6">
                <h3 className="font-bold text-secondary mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm text-gray-600">{car.body_type}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm text-gray-600">{car.seating}-seater</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm text-gray-600">{car.fuel_type} powered</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm text-gray-600">{car.transmission} gearbox</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm text-gray-600">{car.fuel_economy} km/L economy</span>
                  </li>
                </ul>
              </div>

              {/* Related Cars */}
              <div className="card p-6">
                <h3 className="font-bold text-secondary mb-4">Similar Models</h3>
                <div className="space-y-3">
                  {carsData
                    .filter(c => c.brand === car.brand && c.id !== car.id)
                    .slice(0, 3)
                    .map(relatedCar => (
                      <Link
                        key={relatedCar.id}
                        href={`/cars/${relatedCar.brand.toLowerCase()}-${relatedCar.model.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-sm text-primary hover:underline p-2 border-l-2 border-gray-200 hover:border-primary transition-colors"
                      >
                        {relatedCar.model} ({relatedCar.year})
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="bg-gray-50 py-12">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Want to Compare?
            </h2>
            <p className="text-gray-600 mb-6">
              Compare the {car.brand} {car.model} with other cars to make a better buying decision.
            </p>
            <Link href="/compare" className="btn-primary">
              Go to Comparison Tool
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
