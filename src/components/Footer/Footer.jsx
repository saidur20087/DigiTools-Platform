
const Footer = () => {
  return (
    <div className="bg-gray-900  text-gray-300 py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 text-center md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold text-white">DigiTools</span>
            </div>
            <p className="text-sm">Making digital productivity simple and powerful with AI.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>Features</li>
              <li>Pricing</li>
              <li>Tools</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>Help Center</li>
              <li>Contact</li>
              <li>Community</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm">
          © 2026 DigiTools. All rights reserved. Made with in Bangladesh
        </div>
      </div>
    </div>
  );
};

export default Footer;