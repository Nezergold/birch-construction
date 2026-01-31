import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { CheckCircle2, Hammer, Shield, Clock } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Hammer,
      title: 'Expert Craftsmanship',
      description: 'Skilled professionals dedicated to quality construction'
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully certified with comprehensive insurance coverage'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Committed to meeting deadlines without compromising quality'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Images */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="col-span-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1718209962486-4f91ce71886b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmclMjB0ZWFtfGVufDF8fHx8MTc2OTU5NDM4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Construction workers"
                  loading="lazy"
                  className="w-full h-80 object-cover rounded-lg shadow-xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581674662583-5e89b374fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBibHVlcHJpbnRzJTIwYXJjaGl0ZWN0fGVufDF8fHx8MTc2OTU5NDI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Construction plans"
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-lg shadow-xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1742070122889-1505dd7a93b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0b29scyUyMGVxdWlwbWVudCUyMHNpdGV8ZW58MXx8fHwxNzY5NTk0Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Construction equipment"
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-black p-6 rounded-lg shadow-2xl"
            >
              <div className="text-4xl font-bold">19+</div>
              <div className="text-sm font-semibold">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[#D4AF37] font-semibold text-sm tracking-wider uppercase">
                About Birch Construction
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
                Building Minnesota's Future Since 2007
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At Birch Construction, we bring decades of experience and unwavering commitment 
                to every project. From residential homes to commercial developments, we've earned 
                our reputation as Minnesota's trusted construction partner.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4 mb-8"
            >
              {[
                'Quality materials and expert craftsmanship',
                'Transparent pricing and timelines',
                'Dedicated project management',
                'Sustainable building practices'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-1 gap-6 mt-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-[#F4E5B2] transition-colors duration-300"
                >
                  <div className="bg-[#D4AF37] p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}