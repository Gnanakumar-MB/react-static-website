import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies like React, Vue, and Node.js.",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized", "Mobile-First"],
      price: "Starting at $2,500"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing and inventory management.",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Analytics"],
      price: "Starting at $5,000"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, user-friendly designs that convert visitors into customers.",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
      price: "Starting at $1,500"
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive more organic traffic.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Content Strategy"],
      price: "Starting at $800/month"
    },
    {
      title: "Maintenance & Support",
      description: "Keep your website running smoothly with ongoing maintenance and updates.",
      features: ["Security Updates", "Performance Monitoring", "Backup Management", "24/7 Support"],
      price: "Starting at $200/month"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies to grow your online presence.",
      features: ["Social Media", "Content Marketing", "Email Campaigns", "Analytics"],
      price: "Starting at $1,200/month"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business grow and succeed in the online world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
                
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-4">
                  <p className="text-lg font-semibold text-primary-600 mb-4">{service.price}</p>
                  <Link
                    to="/contact"
                    className="btn btn-primary w-full"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">
                We learn about your business, goals, and target audience to create the perfect strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">
                Our designers create wireframes, mockups, and prototypes to bring your vision to life.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">
                Our developers build your project using the latest technologies and best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600">
                We deploy your project and provide ongoing support to ensure continued success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your needs and create a custom solution that drives results.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
