
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '../contexts/AuthContext';
import { 
  ArrowRight, 
  Recycle, 
  Users, 
  Heart, 
  Zap,
  Star,
  Shirt,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Shield,
  Globe
} from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState({});
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Sustainable Fashion",
      description: "Give your clothes a second life and reduce fashion waste through community swapping."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Driven",
      description: "Connect with like-minded individuals who share your passion for sustainable living."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Quality First",
      description: "All items are verified for quality, ensuring you receive beautiful pre-loved pieces."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Swaps",
      description: "Quick and easy swapping process with real-time notifications and updates."
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Upload Your Items",
      description: "Take photos of clothes you'd like to swap and add them to your collection."
    },
    {
      step: "2", 
      title: "Browse & Discover",
      description: "Explore items from other community members and find pieces you love."
    },
    {
      step: "3",
      title: "Request a Swap",
      description: "Send swap requests for items you want and negotiate with other users."
    },
    {
      step: "4",
      title: "Complete the Exchange",
      description: "Coordinate meetups or shipping to complete your sustainable fashion swap."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Fashion Blogger",
      avatar: "SC",
      content: "ReWear has transformed how I approach fashion. I've discovered amazing pieces while decluttering my wardrobe sustainably.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "Environmental Activist", 
      avatar: "MR",
      content: "Finally, a platform that makes sustainable fashion accessible and fun. The community here is incredible!",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Student",
      avatar: "ET", 
      content: "As a student, ReWear helps me stay stylish on a budget while being environmentally conscious.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-violet-900/20 to-indigo-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-purple-500/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-violet-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-indigo-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container-padding max-w-7xl mx-auto text-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            <Badge variant="secondary" className="glass border-white/20 text-purple-600 px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              Sustainable Fashion Revolution
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold">
              <span className="text-gradient">Swap, Share, Shine</span>
              <br />
              <span className="text-foreground">with ReWear</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join the sustainable fashion movement. Exchange pre-loved clothes with a community that cares about style and the planet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => navigate(user ? '/browse' : '/register')}
                className="gradient-primary text-white px-8 py-6 text-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 animate-glow"
              >
                {user ? 'Start Browsing' : 'Join ReWear'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => navigate('/browse')}
                className="glass border-white/20 px-8 py-6 text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
              >
                Explore Items
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">1000+</div>
                <div className="text-sm text-muted-foreground">Items Swapped</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">500+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">50+</div>
                <div className="text-sm text-muted-foreground">Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container-padding max-w-7xl mx-auto">
          <div 
            data-animate
            className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
              isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Badge variant="secondary" className="glass border-white/20">
              <Heart className="h-4 w-4 mr-2" />
              Why Choose ReWear
            </Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient">
              Fashion with Purpose
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience a new way to refresh your wardrobe while making a positive impact on the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`glass border-white/20 card-hover transition-all duration-1000 delay-${index * 100} ${
                  isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="container-padding max-w-7xl mx-auto">
          <div 
            data-animate
            className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
              isVisible['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Badge variant="secondary" className="glass border-white/20">
              <Zap className="h-4 w-4 mr-2" />
              Simple Process
            </Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient">
              How ReWear Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with sustainable fashion in just four simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`text-center space-y-4 transition-all duration-1000 delay-${index * 200} ${
                  isVisible['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {step.step}  
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-violet-600 opacity-30"></div>
                  )}
                </div>
                <h3 className="text-xl font-display font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-muted/30">
        <div className="container-padding max-w-7xl mx-auto">
          <div 
            data-animate
            className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
              isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Badge variant="secondary" className="glass border-white/20">
              <Star className="h-4 w-4 mr-2" />
              User Stories
            </Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient">
              What Our Community Says
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied users who've transformed their fashion habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`glass border-white/20 card-hover transition-all duration-1000 delay-${index * 200} ${
                  isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white font-medium">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container-padding max-w-7xl mx-auto text-center relative z-10">
          <div className="space-y-8 text-white">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Ready to Transform Your Wardrobe?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join the ReWear community today and start your sustainable fashion journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate(user ? '/browse' : '/register')}
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
              >
                {user ? 'Start Swapping' : 'Sign Up Free'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/browse')}
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Browse Items
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
