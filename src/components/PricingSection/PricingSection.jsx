
const PricingSection = () => {
  return (
    <div id="pricing" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-600 mb-12">No hidden fees. Cancel anytime.</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="border border-gray-200 rounded-3xl p-8 hover:border-purple-400 transition-all">
            <h3 className="text-xl font-semibold">Starter</h3>
            <div className="text-5xl font-bold my-6">$0<span className="text-lg font-normal text-gray-500">/month</span></div>
            <ul className="space-y-3 text-left">
              <li>✓ 5 Tools Access</li>
              <li>✓ Basic Features</li>
              <li>✓ Community Support</li>
            </ul>
            <button className="btn btn-outline w-full mt-10">Get Started Free</button>
          </div>

          <div className="border-2 border-purple-600 rounded-3xl p-8 relative scale-105 shadow-xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-6 py-1 rounded-full text-sm font-medium">MOST POPULAR</div>
            <h3 className="text-xl font-semibold">Pro</h3>
            <div className="text-5xl font-bold my-6">$19<span className="text-lg font-normal text-gray-500">/month</span></div>
            <ul className="space-y-3 text-left">
              <li>✓ Unlimited Tools</li>
              <li>✓ All Premium Features</li>
              <li>✓ Priority Support</li>
              <li>✓ Early Access</li>
            </ul>
            <button className="btn btn-primary w-full mt-10">Go Pro</button>
          </div>

          <div className="border border-gray-200 rounded-3xl p-8 hover:border-purple-400 transition-all">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <div className="text-5xl font-bold my-6">$49<span className="text-lg font-normal text-gray-500">/month</span></div>
            <ul className="space-y-3 text-left">
              <li>✓ Everything in Pro</li>
              <li>✓ Team Accounts</li>
              <li>✓ Custom Tools</li>
              <li>✓ Dedicated Manager</li>
            </ul>
            <button className="btn btn-outline w-full mt-10">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;