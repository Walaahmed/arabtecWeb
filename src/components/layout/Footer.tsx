
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import saudiVision from '@/assets/newl.png';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const isRTL = i18n.language === 'ar';
  const quickLinks = [
    { name: t('footer.home'), path: '/' },
    { name: t('footer.about'), path: '/about' },
    { name: t('footer.services'), path: '/services' },
    { name: t('footer.contact'), path: '/contact' },
  ];
  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://m.facebook.com/profile.php?id=100051080120986', 
      icon: <Facebook className="w-5 h-5" />
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/Arabtec_sa', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/arabtec_sa/', 
      icon: <Instagram className="w-5 h-5" />
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/atc-consulting-training', 
      icon: <Linkedin className="w-5 h-5" />
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <footer className="bg-[#27565E] text-white relative overflow-hidden border-b-[5px] border-[#BF9F00] pt-24 pb-8">
      {/* Top Shape Divider (Tilt) */}
      {/* <div className="absolute top-0 left-0 right-0 overflow-hidden w-full h-[30px] z-10 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1000 100" 
          preserveAspectRatio="none" 
          className="w-full h-full fill-[#BF9F00] rotate-180 animate-fade-in"
        >
          <path d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div> */}
      {/* Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 right-0 w-96 h-96 bg-white/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#BF9F00]/5 rounded-full blur-[120px]" />
      </div>
      <div className="container-custom relative z-20">
        {/* Upper Brand Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16"
        >
          {/* Saudi Vision 2030 Logo */}
          <div className="mb-6">
            <img 
              src={saudiVision}
              alt="Saudi Vision 2030" 
              className="w-[180px] sm:w-[220px] md:w-[240px] h-auto object-contain transition-transform duration-300 hover:scale-105" 
            />
          </div>
          
          {/* Vision Statement */}
          <p className="text-[#B9B6BC] text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-3xl">
            {t('footer.companyDescription')}
          </p>
        </motion.div>
        {/* Middle Columns Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12 pb-12"
        >
          {/* Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-display font-bold mb-6 relative inline-block text-[#B9B6BC]">
              {t('footer.quickLinks')}
              <span className={`absolute -bottom-2 ${isRTL ? 'right-0' : 'left-0'} w-12 h-1 bg-[#BF9F00] rounded-full`} />
            </h4>
            <ul className="space-y-4 text-center md:text-start w-full">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#B9B6BC] hover:text-[#BF9F00] transition-colors duration-300 flex items-center justify-center md:justify-start gap-2 group text-sm sm:text-base font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BF9F00]/50 group-hover:bg-[#BF9F00] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Services */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-display font-bold mb-6 relative inline-block text-[#B9B6BC]">
              {t('footer.ourServices')}
              <span className={`absolute -bottom-2 ${isRTL ? 'right-0' : 'left-0'} w-12 h-1 bg-[#BF9F00] rounded-full`} />
            </h4>
            <ul className="space-y-4 text-center md:text-start w-full">
              {[t('footer.service1'), t('footer.service2'), t('footer.service3'), t('footer.service4')].map((service) => (
                <li key={service} className="text-[#B9B6BC] flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BF9F00]/50" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Contact Info & Socials */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-display font-bold mb-6 relative inline-block text-[#B9B6BC]">
              {t('footer.contactUs')}
              <span className={`absolute -bottom-2 ${isRTL ? 'right-0' : 'left-0'} w-12 h-1 bg-[#BF9F00] rounded-full`} />
            </h4>
            <ul className="space-y-5 text-center md:text-start w-full">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 justify-center md:justify-start">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#BF9F00]" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+966532891000" className="text-[#B9B6BC] hover:text-[#BF9F00] transition-colors text-sm sm:text-base font-semibold" dir="ltr">
                    +966 53 289 1000 
                  </a>
                  {/* <a href="tel:+966533092640" className="text-white/85 hover:text-[#BF9F00] transition-colors text-sm sm:text-base font-semibold" dir="ltr">
                    +966 533 092 640 (KSA)
                  </a> */}
                </div>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 justify-center md:justify-start">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#BF9F00]" />
                </div>
                <a href="mailto:Contact@arabtec.com" className="text-[#B9B6BC] hover:text-[#BF9F00] transition-colors text-sm sm:text-base font-semibold">
                  Contact@arabtec.com
                </a>
              </li>
            </ul>
            {/* Social Media Icons */}
            {/* <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#BF9F00] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div> */}
          </motion.div>
        </motion.div>
      </div>
      {/* Copyright Bar */}
      <div className="border-t border-white/10 relative z-20 mt-8 pt-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start">
            <p className="text-[#B9B6BC] text-xs sm:text-sm font-semibold">
              {isRTL ? `© ${currentYear} ARABTEC جميع الحقوق محفوظة.` : `© ${currentYear} ARABTEC.SA. All Rights Reserved.`}
            </p>
            <div className="flex items-center gap-6 text-xs sm:text-sm text-[#B9B6BC] font-semibold">
              <Link to="/privacy" className="hover:text-[#BF9F00] transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" className="hover:text-[#BF9F00] transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

