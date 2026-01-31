import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (218) 639-3166',
      link: 'tel:+12186393166',
      description: 'Call us anytime'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Chat with us',
      link: 'https://wa.me/12186393166',
      description: 'Quick response guaranteed'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@birchconstruction.com',
      link: 'mailto:info@birchconstruction.com',
      description: 'Send us a message'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Deer Creek, MN 56527',
      link: 'https://www.google.com/maps/search/?api=1&query=57472+MN-29,+Deer+Creek,+MN+56527,+United+States',
      description: '57472 MN-29'
    }
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: 'Facebook',
      link: 'https://facebook.com',
      color: 'hover:text-blue-600'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      link: 'https://instagram.com',
      color: 'hover:text-pink-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      link: 'https://twitter.com',
      color: 'hover:text-blue-400'
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/12186393166', '_blank');
  };

  const handleLocationClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=57472+MN-29,+Deer+Creek,+MN+56527,+United+States', '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-semibold text-sm tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Ready to start your construction project? Contact us today for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.title === 'WhatsApp' || info.title === 'Location' ? '_blank' : undefined}
                rel={info.title === 'WhatsApp' || info.title === 'Location' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="bg-[#D4AF37] p-4 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{info.title}</h3>
                  <p className="text-[#D4AF37] font-medium mb-1">{info.value}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              </motion.a>
            ))}

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#D4AF37] p-4 rounded-lg">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Business Hours</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                    <p>Saturday: 8:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-2xl h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.123456789!2d-95.123456!3d46.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDA3JzI0LjQiTiA5NcKwMDcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Birch Construction Location"
              />
            </div>

            {/* Quick Contact CTA */}
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-black/80 mb-6">
                Contact us on WhatsApp for instant support and quick quotes!
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </button>
            </div>

            {/* Social Media */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4 text-center">
                Follow Us
              </h3>
              <div className="flex justify-center space-x-6">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white/10 p-4 rounded-full hover:bg-[#D4AF37] transition-all duration-300 group ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-gray-300 text-lg mb-4">
              🏗️ <strong className="text-[#D4AF37]">Free Consultation</strong> • 
              📋 <strong className="text-[#D4AF37]">Detailed Quotes</strong> • 
              ⭐ <strong className="text-[#D4AF37]">Quality Guaranteed</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              >
                Request a Quote
              </button>
              <button
                onClick={handleLocationClick}
                className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              >
                Get Directions
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
