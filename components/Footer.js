import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-sm">V</span>
              </div>
              <span className="font-display font-bold text-lg">Veliq</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted source for used car information, prices, and comparisons in Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Browse</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/cars" className="hover:text-white transition-colors">All Cars</Link></li>
              <li><Link href="/cars?brand=toyota" className="hover:text-white transition-colors">Toyota</Link></li>
              <li><Link href="/cars?brand=honda" className="hover:text-white transition-colors">Honda</Link></li>
              <li><Link href="/cars?type=suv" className="hover:text-white transition-colors">SUVs</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/compare" className="hover:text-white transition-colors">Compare Cars</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Price Guide</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@veliq.ng</li>
              <li>Lagos, Nigeria</li>
              <li className="pt-2">
                <span className="text-gray-500">Follow us</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Veliq Nigeria. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/" className="hover:text-white transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
