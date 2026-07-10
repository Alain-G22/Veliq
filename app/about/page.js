import Link from 'next/link'

export default function AboutPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-12">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About Veliq</h1>
          <p className="text-lg text-red-100">
            Your trusted source for used car data, prices, and expert advice
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-spacing">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold text-secondary mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Veliq exists to simplify car buying in Nigeria. We believe that every buyer deserves access to accurate, transparent information about used cars—from pricing and specifications to reliability ratings and comparisons.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            The used car market in Nigeria can be overwhelming. Prices vary wildly, sellers are sometimes unreliable, and buyers often don't know what they should be paying. We're here to change that by providing data-driven insights, honest comparisons, and expert guidance.
          </p>
        </div>
      </section>

      {/* Why We Started */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold text-secondary mb-6">Why We Started</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            The Veliq team noticed a gap in the Nigerian market. While there were classifieds sites and dealer listings, there was no single source for reliable, aggregated car data. Buyers had to:
          </p>
          <ul className="space-y-3 mb-6 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Search across multiple sites to compare prices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Manually look up vehicle specifications</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Rely on personal experience or friends' opinions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Have no way to verify if a deal was fair</span>
            </li>
          </ul>
          <p className="text-lg text-gray-600 leading-relaxed">
            We decided to fix this by building a platform that brings all this information together in one place.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-spacing">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold text-secondary mb-6">What We Offer</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Accurate Pricing Data
              </h3>
              <p className="text-gray-600">
                Real-time price ranges for popular used cars in Nigeria. We track prices across major selling platforms to give you current market rates.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Detailed Specifications
              </h3>
              <p className="text-gray-600">
                Complete technical specs for every car: engine size, power, torque, fuel economy, seating, ground clearance, and more. Everything you need to make an informed decision.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Comparison Tools
              </h3>
              <p className="text-gray-600">
                Compare up to 4 cars side-by-side. See how they stack up in price, performance, fuel economy, and comfort to find the best fit for your needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Expert Guides
              </h3>
              <p className="text-gray-600">
                In-depth articles about buying strategies, what to look for in a used car, negotiation tips, and detailed model comparisons. Learn from our experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold text-secondary mb-6">Our Team</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Veliq was founded by a group of car enthusiasts who were frustrated by the lack of reliable car buying information in Nigeria. We combine data expertise, automotive knowledge, and a passion for transparency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6 text-center">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-secondary mb-2">Founded</h3>
              <p className="text-gray-600">2024</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-secondary mb-2">Focus</h3>
              <p className="text-gray-600">Nigerian Used Car Market</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">Accuracy</h3>
              <p className="text-gray-600">We verify every piece of data. No speculation, no guessing.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">Transparency</h3>
              <p className="text-gray-600">We show you our sources and explain our methodology.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h-2V5h2v5zm0 9h-2v-2h2v2zM6 10H4v4h2v-4zm12-5h-2v4h2V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">Reliability</h3>
              <p className="text-gray-600">You can trust our information to help you make decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-secondary text-white section-spacing">
        <div className="container-max text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-300 mb-8">
            Have questions, suggestions, or want to partner with us? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@veliq.ng" className="btn-primary bg-primary hover:bg-red-700">
              Email Us
            </a>
            <Link href="/cars" className="btn-outline border-white text-white hover:bg-white hover:bg-opacity-10">
              Browse Cars
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
