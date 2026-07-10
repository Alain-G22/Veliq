'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function FilterBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [brand, setBrand] = useState(searchParams.get('brand') || '')
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '')
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '')
  const [bodyType, setBodyType] = useState(searchParams.get('bodyType') || '')
  const [fuelType, setFuelType] = useState(searchParams.get('fuelType') || '')

  const handleFilter = () => {
    const params = new URLSearchParams()
    if (brand) params.append('brand', brand)
    if (minPrice) params.append('minPrice', minPrice)
    if (maxPrice) params.append('maxPrice', maxPrice)
    if (bodyType) params.append('bodyType', bodyType)
    if (fuelType) params.append('fuelType', fuelType)
    
    router.push(`/cars?${params.toString()}`)
  }

  const handleReset = () => {
    setBrand('')
    setMinPrice('')
    setMaxPrice('')
    setBodyType('')
    setFuelType('')
    router.push('/cars')
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-bold text-secondary mb-6">Filter Cars</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {/* Brand */}
        <div>
          <label className="block text-sm font-semibold text-secondary mb-2">Brand</label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All Brands</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Lexus">Lexus</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="BMW">BMW</option>
            <option value="Ford">Ford</option>
          </select>
        </div>

        {/* Min Price */}
        <div>
          <label className="block text-sm font-semibold text-secondary mb-2">Min Price (₦)</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Max Price */}
        <div>
          <label className="block text-sm font-semibold text-secondary mb-2">Max Price (₦)</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Body Type */}
        <div>
          <label className="block text-sm font-semibold text-secondary mb-2">Body Type</label>
          <select
            value={bodyType}
            onChange={(e) => setBodyType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All Types</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Pickup">Pickup</option>
            <option value="Luxury SUV">Luxury SUV</option>
          </select>
        </div>

        {/* Fuel Type */}
        <div>
          <label className="block text-sm font-semibold text-secondary mb-2">Fuel Type</label>
          <select
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All Fuels</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleFilter}
          className="btn-primary"
        >
          Apply Filters
        </button>
        <button
          onClick={handleReset}
          className="btn-outline"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
