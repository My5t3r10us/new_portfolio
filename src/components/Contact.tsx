import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { supabase, type ContactSubmission } from '../lib/supabase';
import { useInView } from '../hooks/useInView';

export const Contact = () => {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { ref, isInView } = useInView();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase
      .from('contact_submissions')
      .insert([formData]);

    if (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log('isInView contact:', isInView);

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-dark-900/30">
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-dark-400 text-sm uppercase tracking-wider font-medium"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mt-4 text-gradient"
          >
            Contact Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-dark-400 mt-4 max-w-2xl mx-auto"
          >
            Have a project in mind? Let's discuss how we can work together
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <motion.div
              className="glass glass-hover rounded-2xl p-6"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-12 h-12 glass rounded-lg flex items-center justify-center mb-4">
                <Mail size={24} className="text-dark-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-dark-400">contact@example.com</p>
            </motion.div>

            <motion.div
              className="glass glass-hover rounded-2xl p-6"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-12 h-12 glass rounded-lg flex items-center justify-center mb-4">
                <Phone size={24} className="text-dark-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-dark-400">+1 (555) 123-4567</p>
            </motion.div>

            <motion.div
              className="glass glass-hover rounded-2xl p-6"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-12 h-12 glass rounded-lg flex items-center justify-center mb-4">
                <MapPin size={24} className="text-dark-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-dark-400">San Francisco, CA</p>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 glass rounded-2xl p-8"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <motion.label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'name' || formData.name
                        ? 'top-2 text-xs text-dark-400'
                        : 'top-4 text-base text-dark-500'
                    }`}
                  >
                    Your Name
                  </motion.label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 pt-6 pb-2 bg-dark-800 border border-dark-700 rounded-lg text-white focus:border-dark-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <motion.label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'email' || formData.email
                        ? 'top-2 text-xs text-dark-400'
                        : 'top-4 text-base text-dark-500'
                    }`}
                  >
                    Your Email
                  </motion.label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 pt-6 pb-2 bg-dark-800 border border-dark-700 rounded-lg text-white focus:border-dark-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="relative">
                <motion.label
                  htmlFor="subject"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'subject' || formData.subject
                      ? 'top-2 text-xs text-dark-400'
                      : 'top-4 text-base text-dark-500'
                  }`}
                >
                  Subject
                </motion.label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 pt-6 pb-2 bg-dark-800 border border-dark-700 rounded-lg text-white focus:border-dark-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="relative">
                <motion.label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? 'top-2 text-xs text-dark-400'
                      : 'top-4 text-base text-dark-500'
                  }`}
                >
                  Message
                </motion.label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className="w-full px-4 pt-6 pb-2 bg-dark-800 border border-dark-700 rounded-lg text-white focus:border-dark-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark-950 rounded-lg font-semibold hover:shadow-glow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={status === 'idle' ? { scale: 1.02, y: -2 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              >
                {status === 'loading' ? (
                  <span>Sending...</span>
                ) : status === 'success' ? (
                  <span>Message Sent!</span>
                ) : status === 'error' ? (
                  <span>Error. Try Again.</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
