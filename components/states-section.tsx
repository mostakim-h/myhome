import React from 'react';

function StatesSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl font-bold mb-4">Connect with Us Today</h2>
          <p className="text-gray-400">
            Ready to find the home of your dreams or sell/rent your property? We are here to help!
            Whether you&#39;re looking for your dream home, want guidance on the buying process,
            or have any other property-related inquiries.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-20">
          <div>
            <div className="text-5xl font-bold mb-2">100+</div>
            <div className="text-gray-400 text-nowrap">Happy Clients</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">50+</div>
            <div className="text-gray-400 text-nowrap">Sale Agents</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">200+</div>
            <div className="text-nowrap text-gray-400">Returned Clients</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">10+</div>
            <div className="text-gray-400 text-nowrap">Years of Expertise</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatesSection;