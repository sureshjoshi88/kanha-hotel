import React from 'react'

const Foter = () => {
  return (
    <div>
      <div>
   <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Rooms &amp; Suites</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Modern Luxury Rooms</li>
              <li>Best Cozy Comfort Rooms</li>
              <li>Deluxe Rooms</li>
              <li>Deluxe Suites</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Dining</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">More</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
            <p className="text-sm text-gray-300">
              Monthly digest of what's new and exciting from us.
            </p>
            <form className="mt-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="px-4 py-2 rounded-md border focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-3 mt-2">
              <a href="#">
                <img src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook" />
              </a>
              <a href="#">
                <img src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram" />
              </a>
              <a href="#">
                <img src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter" />
              </a>
              <a href="#">
                <img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp" />
              </a>
              <a href="#">
                <img src="https://img.icons8.com/color/48/pinterest--v1.png" alt="pinterest" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex items-end">
          <p className="text-sm text-gray-400">
            © 2023-24 <span className="text-white">Kanha Hotel</span> (D&M by{' '}
            <span className="text-blue-400">AHIT</span>). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>

      </div>
    </div>
  )
}

export default Foter
