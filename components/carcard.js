import Link from 'next/link'

export default function CarCard({ car }) {
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
    <div className="card overflow-hidden">
      {/* Image */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
          {car.body_type}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-secondary mb-1">
          {car.brand} {car.model}
        </h3>
        <p className="text-gray-500 text-sm mb-3">{car.year}</p>

        {/* Price */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Price Range</p>
          <p className="text-lg font-bold text-primary">
            {formattedMinPrice} - {formattedMaxPrice}
          </p>
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4 py-4 border-t border-b border-gray-200">
          <div className="text-center">
            <p className="text-xs text-gray-500">Engine</p>
            <p className="text-sm font-semibold text-secondary">{car.engine_cc}cc</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500">Fuel</p>
            <p className="text-sm font-semibold text-secondary">{car.fuel_economy} km/L</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500">Power</p>
            <p className="text-sm font-semibold text-secondary">{car.horsepower}hp</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500">Transmission</p>
            <p className="text-sm font-semibold text-secondary">{car.transmission}</p>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/cars/${car.brand.toLowerCase()}-${car.model.toLowerCase().replace(/\s+/g, '-')}`}
          className="btn-primary w-full text-center block mt-4"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
