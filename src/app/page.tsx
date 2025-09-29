"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Server, 
  Shield, 
  Database, 
  Cloud, 
  Zap, 
  Lock, 
  Cpu, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

export default function Home() {
  const servicesRef = useScrollAnimation({ threshold: 0.2 });
  const featuresRef = useScrollAnimation({ threshold: 0.2 });
  const aboutRef = useScrollAnimation({ threshold: 0.2 });
  const contactRef = useScrollAnimation({ threshold: 0.2 });
  const testimonialsRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Digital Animations */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5"></div>
        <div className="absolute inset-0">
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full float-animation"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-blue-500/20 rounded-full float-animation" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/40 rounded-full float-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-10 w-5 h-5 bg-blue-400/30 rounded-full float-animation" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="slide-in-left">
                <h1 className="text-6xl md:text-8xl font-bold text-gradient leading-none">
                  Your IT
                </h1>
              </div>
              <div className="slide-in-right" style={{animationDelay: '0.2s'}}>
                <h1 className="text-6xl md:text-8xl font-bold text-gradient leading-none">
                  Managed
                </h1>
              </div>
              <div className="slide-in-left" style={{animationDelay: '0.4s'}}>
                <h1 className="text-6xl md:text-8xl font-bold text-gradient leading-none">
                  Service
                </h1>
              </div>
              <div className="slide-in-right" style={{animationDelay: '0.6s'}}>
                <h1 className="text-5xl md:text-7xl font-bold text-primary leading-none glitch-effect">
                  Provider
                </h1>
              </div>
            </div>
            <div className="fade-in-up" style={{animationDelay: '0.8s'}}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Future proofing your business technologies and keeping<br />
                your workflow <strong className="text-primary">smarter, secure and business efficient</strong>
              </p>
            </div>
            <div className="fade-in-up" style={{animationDelay: '1s'}}>
              <Button size="lg" className="pulse-glow text-lg px-8 py-6">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef.ref} id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${servicesRef.isVisible ? 'animate-slide-up' : 'scroll-hidden'}`}>
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT solutions designed to transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* IT Data Solutions */}
            <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background ${servicesRef.isVisible ? 'animate-stagger-1' : 'scroll-hidden'}`}>
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center pulse-glow">
                  <Server className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  IT DATA<br />SOLUTIONS
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Comprehensive data center and infrastructure virtualization solutions for your business growth.
                </p>
              </CardContent>
            </Card>

            {/* Business Continuity */}
            <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background ${servicesRef.isVisible ? 'animate-stagger-2' : 'scroll-hidden'}`}>
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center pulse-glow">
                  <Shield className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  BUSINESS<br />CONTINUITY
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Ensuring your business operations continue seamlessly with our comprehensive continuity solutions.
                </p>
              </CardContent>
            </Card>

            {/* Business Data Security */}
            <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background ${servicesRef.isVisible ? 'animate-stagger-3' : 'scroll-hidden'}`}>
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center pulse-glow">
                  <Lock className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  BUSINESS<br />DATA SECURITY
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Advanced security solutions to protect your valuable business data and digital assets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Features</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Et-IT Consultancy</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced technology solutions with proven expertise and 24/7 support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Cloud Solutions</h3>
              <p className="text-muted-foreground text-sm">Scalable cloud infrastructure for modern businesses</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-muted-foreground text-sm">Round-the-clock technical support and monitoring</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">AI Integration</h3>
              <p className="text-muted-foreground text-sm">Cutting-edge AI solutions for business automation</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Global Reach</h3>
              <p className="text-muted-foreground text-sm">Serving clients across the CARICOM region and beyond</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">About Us</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">Et-IT Consultancy</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Provides evidence-based advice to assist clients to grow their businesses, manage risks and make better business growth decisions. We create a secure guaranteed business environment to serve our clients the best solutions in automation.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Et-IT Consultancy gives value to information technology (IT) in your daily workflow:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Quality experience & results guaranteed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Think outside of this world</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Distinctive thinking of IT business consultancy advisory</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Taking care of your IT complexity, digitalization and automation of workflow</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-2xl pulse-glow">
                <Database className="w-40 h-40 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Contact us today for a free consultation and discover how we can help your business grow.
          </p>
          
          {/* Form Container - Ready for automation workflow Integration */}
          <div className="bg-card rounded-lg border border-border p-8 shadow-lg">
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Form</h3>
              <p className="text-muted-foreground mb-6">
                This space is ready for your automation workflow form integration.
              </p>
              <div className="bg-muted/50 rounded-lg p-6 border-2 border-dashed border-border">
                <p className="text-sm text-muted-foreground">
                  Embed your automation workflow form here by replacing this placeholder content
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">What people are saying</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              The profiles of our clients vary in different branches: small businesses, large businesses, enterprise entities, local government organizations and in countries of the CARICOM region.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &ldquo;Et-IT Consultancy is a top company that provides good services, very solution-oriented and super friendly staff who is very involved. I can always count on Et-IT, even if they cannot be physically present, help is offered within a short time. I am very grateful to them for their commitment and expertise.&rdquo;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Shanice Zeegelaar</p>
                    <p className="text-sm text-muted-foreground">Secretary, CEVIHAS NV</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &ldquo;Et-IT Consultancy is an excellent Managed IT Service Provider that we have been using for over 3 years now. The team is always on hand when needed and the work they produce is of a high standard. I would recommend this service to anyone looking for a reliable and responsible company to do all your IT Systems.&rdquo;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">G</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Guillermo Moehamad</p>
                    <p className="text-sm text-muted-foreground">Supervisor, MN International</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &ldquo;The staff is very accommodating and patient, are able to answer all of our questions and very knowledgeable in their field. All in all, we have had pleasant experiences for seven years now and will continue to work with this great company. We highly recommend them to anyone looking for a good experience.&rdquo;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">O</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Orano Rose</p>
                    <p className="text-sm text-muted-foreground">Director, Logical Moderators Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &ldquo;Et-IT Consultancy is a company I could always rely on. They&apos;re professional, reliable, and provide a level of service and guidance that is unparalleled by any other company in the field. They have been making my life easier for over a year now, and I look forward to continuing to work with them as my needs evolve.&rdquo;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">K</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Karin Luxemburg</p>
                    <p className="text-sm text-muted-foreground">Wise NV, Finance Administrator</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            We are ready to take this journey in your business technology growth
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Helping you thinking outside this world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg font-semibold text-foreground mb-2">Need Help? Chat with us</p>
          <p className="text-sm text-muted-foreground">Start a Conversation - The team typically replies in a few minutes.</p>
        </div>
      </footer>
    </div>
  );
}
