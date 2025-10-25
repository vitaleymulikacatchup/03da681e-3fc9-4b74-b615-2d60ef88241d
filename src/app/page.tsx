"use client"

import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Code, Crown, Github, Dribbble, Instagram, Linkedin, MessageCircle, Rocket, Search, Smartphone, Sparkles, Star, Twitter, Zap } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="DialedWeb"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Transform Your Vision into Stunning Websites"
          description="At DialedWeb, we craft exceptional web experiences that drive results. From responsive design to conversion optimization, we turn your ideas into powerful digital solutions."
          tag="Web Design Agency"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Start Your Project",
              href: "contact"
            },
            {
              text: "View Our Work",
              href: "features"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern web design workspace"
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Why Choose DialedWeb"
          description="We deliver comprehensive web solutions that combine cutting-edge design with powerful functionality"
          tag="Our Services"
          tagIcon={Zap}
          features={[
            {
              title: "Responsive Design",
              description: "Mobile-first designs that look perfect on every device and screen size",
              icon: Smartphone
            },
            {
              title: "Performance Optimization",
              description: "Lightning-fast websites with optimized code and superior loading speeds",
              icon: Rocket
            },
            {
              title: "SEO Ready",
              description: "Built-in SEO optimization to help your website rank higher in search results",
              icon: Search
            },
            {
              title: "Custom Development",
              description: "Tailored solutions built specifically for your business needs and goals",
              icon: Code
            }
          ]}
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Trusted by Leading Companies"
          description="Join hundreds of satisfied clients who've transformed their digital presence with DialedWeb"
          logos={[
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Clients Say"
          description="Real feedback from businesses that have transformed their online presence with DialedWeb"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarahj_ceo",
              testimonial: "DialedWeb completely transformed our online presence. The new website increased our conversions by 300% in just 3 months.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@mchen_founder",
              testimonial: "Professional, responsive, and results-driven. DialedWeb delivered exactly what we needed to scale our business online.",
              imageSrc: "https://images.pexels.com/photos/12800926/pexels-photo-12800926.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              handle: "@emily_startup",
              testimonial: "The attention to detail and commitment to our success was incredible. Our website now perfectly represents our brand.",
              imageSrc: "https://images.pexels.com/photos/5716031/pexels-photo-5716031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@davidk_tech",
              testimonial: "Fast, modern, and conversion-focused. DialedWeb built us a website that actually grows our business.",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Expert Team"
          description="The creative minds behind DialedWeb's success"
          members={[
            {
              id: "1",
              name: "Alex Thompson",
              role: "Lead Developer",
              description: "Full-stack developer with 8+ years of experience building scalable web applications and leading development teams.",
              imageSrc: "https://images.pexels.com/photos/5926380/pexels-photo-5926380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                {
                  icon: Github,
                  url: "https://github.com"
                },
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                }
              ]
            },
            {
              id: "2",
              name: "Maya Patel",
              role: "Creative Director",
              description: "Award-winning designer specializing in user experience and brand identity with a passion for creating memorable digital experiences.",
              imageSrc: "https://images.pexels.com/photos/7652243/pexels-photo-7652243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com"
                },
                {
                  icon: Dribbble,
                  url: "https://dribbble.com"
                }
              ]
            },
            {
              id: "3",
              name: "James Wilson",
              role: "Project Manager",
              description: "Strategic project leader ensuring seamless delivery and client satisfaction across all DialedWeb projects.",
              imageSrc: "https://images.pexels.com/photos/5716031/pexels-photo-5716031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com"
                }
              ]
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="Choose the perfect package for your web design needs"
          plans={[
            {
              id: "starter",
              badge: "Perfect Start",
              badgeIcon: Star,
              price: "$2,499",
              subtitle: "Ideal for small businesses and startups",
              features: [
                "Responsive 5-page website",
                "Mobile-first design",
                "Basic SEO optimization",
                "Contact form integration",
                "30-day support"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$4,999",
              subtitle: "Best for growing businesses",
              features: [
                "Custom 10-page website",
                "Advanced animations",
                "E-commerce integration",
                "Analytics setup",
                "90-day support",
                "Performance optimization"
              ]
            },
            {
              id: "enterprise",
              badge: "Full Solution",
              badgeIcon: Crown,
              price: "$9,999",
              subtitle: "Complete solution for large businesses",
              features: [
                "Unlimited pages",
                "Custom CMS",
                "Advanced integrations",
                "Dedicated account manager",
                "1-year support",
                "Monthly performance reports"
              ]
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Get answers to common questions about our web design services"
          faqs={[
            {
              id: "1",
              title: "How long does a typical project take?",
              content: "Most projects are completed within 4-8 weeks, depending on complexity. We'll provide a detailed timeline during our initial consultation."
            },
            {
              id: "2",
              title: "Do you provide ongoing maintenance?",
              content: "Yes! All our packages include support periods, and we offer ongoing maintenance plans to keep your website secure and up-to-date."
            },
            {
              id: "3",
              title: "Can you redesign my existing website?",
              content: "Absolutely! We specialize in website redesigns and can modernize your current site while preserving your brand identity."
            },
            {
              id: "4",
              title: "Do you work with content management systems?",
              content: "Yes, we build custom CMS solutions and work with popular platforms like WordPress, ensuring you can easily manage your content."
            },
            {
              id: "5",
              title: "What's included in the price?",
              content: "Each package includes design, development, testing, SEO optimization, and the specified support period. No hidden fees."
            },
            {
              id: "6",
              title: "Do you offer e-commerce solutions?",
              content: "Yes! We build custom e-commerce websites with secure payment processing, inventory management, and conversion optimization."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Let's Talk"
          tagIcon={MessageCircle}
          title="Ready to Transform Your Digital Presence?"
          description="Get started with a free consultation. We'll discuss your goals and create a custom strategy for your business."
          inputPlaceholder="Enter your email address"
          buttonText="Get Started"
          termsText="By submitting, you agree to our privacy policy and terms of service."
          imageSrc="https://images.pexels.com/photos/17668052/pexels-photo-17668052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern web agency office space"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="DialedWeb"
          columns={[
            {
              items: [
                {
                  label: "Services",
                  href: "features"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "About Us",
                  href: "team"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Support",
                  href: "https://support.dialedweb.com"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}