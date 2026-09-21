import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white mt-20 border-t">

      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-3xl font-serif mb-4">
              rhode
            </h2>

            <p className="text-gray-600">
              Luxury skincare experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Shop
            </h3>

            <ul className="space-y-2">
              <li>
                <Link to="/shop">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Company
            </h3>

            <ul className="space-y-2">
              <li>
                <Link to="/about">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Legal
            </h3>

            <ul className="space-y-2">
              <li>
                <Link to="/privacy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;