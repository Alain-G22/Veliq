import Link from 'next/link'
import CarCard from '@/components/CarCard'
import { carsData, blogPostsData } from '@/lib/carData'

export default function Home() {
  const featuredCars = carsData.slice(0, 6)
  const latestPosts = blogPostsData.slice(0, 3)

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-16 md:py-24">
        <div className="container-max">
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Find Your Perfect Tokunbo Car
            </h1>
            <p className="text-lg md:text-xl text-red-100 mb-8">
              Browse prices, specs, and comparisons for the best used imported cars in Nigeria. Make an informed decision with real data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/cars" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Browse All Cars
              </Link>
              <Link href="/blog" className="btn-outline border-white text-white hover:bg-white hover:bg-opacity-10">
                Read Our Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="section-spacing">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-3">
              Popular Used Cars
            </h2>
            <p className="text-gray-600 text-lg">
              Our top 10 most searched vehicles in Nigeria. Updated prices based on current market rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/cars" className="btn-primary">
              View All Cars
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4 text-center">
            Search by Budget
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Can't find what you're looking for? Use our search and filters to find cars within your budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link
              href="/cars?maxPrice=15000000"
              className="card p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl font-bold text-primary mb-2">Under ₦15M</div>
              <p className="text-gray-600">Budget-friendly options</p>
            </Link>

            <Link
              href="/cars?minPrice=15000000&maxPrice=30000000"
              className="card p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl font-bold text-primary mb-2">₦15M - ₦30M</div>
              <p className="text-gray-600">Mid-range vehicles</p>
            </Link>

            <Link
              href="/cars?minPrice=30000000&maxPrice=50000000"
              className="card p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl font-bold text-primary mb-2">₦30M - ₦50M</div>
              <p className="text-gray-600">Premium options</p>
            </Link>

            <Link
              href="/cars?minPrice=50000000"
              className="card p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl font-bold text-primary mb-2">Above ₦50M</div>
              <p className="text-gray-600">Luxury imports</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-12 text-center">
            Why Choose AutoInsight
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Accurate Prices</h3>
              <p className="text-gray-600">
                Real-time price data from verified sources. Know exactly what you should pay.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Compare Instantly</h3>
              <p className="text-gray-600">
                Side-by-side specs and features. Make smarter decisions in seconds.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Expert Guides</h3>
              <p className="text-gray-600">
                In-depth articles and buying tips from experienced car enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-3">
              Latest Articles
            </h2>
            <p className="text-gray-600 text-lg">
              Expert guides to help you buy the right car.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {latestPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {new Date(post.created_at).toLocaleDateString('en-NG', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="text-primary font-semibold">Read Article →</span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog" className="btn-primary">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary text-white section-spacing">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Find Your Car?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Use our comparison tool to find the perfect used car that fits your budget and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cars" className="btn-primary bg-primary hover:bg-red-700">
              Search Cars
            </Link>
            <Link href="/compare" className="btn-outline border-white text-white hover:bg-white hover:bg-opacity-10">
              Compare Models
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
