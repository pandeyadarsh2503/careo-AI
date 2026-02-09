import { ArrowRight, Sparkles, TrendingUp, Target, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Matching',
      description: 'Find jobs that perfectly match your skills and career goals using advanced AI algorithms.',
    },
    {
      icon: Brain,
      title: 'Smart Interview Prep',
      description: 'Practice with our AI interviewer and get real-time feedback on your responses.',
    },
    {
      icon: Target,
      title: 'Career Guidance',
      description: 'Get personalized career advice and insights to help you reach your professional goals.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Tracking',
      description: 'Monitor your application progress and career development all in one place.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 py-20 md:py-32 -mt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Job Search
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Find Your Dream Job
              <br />
              <span className="text-gradient">With AI Assistance</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              CareerAI revolutionizes job hunting with intelligent matching, AI interview practice, and personalized career guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:shadow-xl transition-all group"
              >
                Browse Jobs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/ai-interview"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all"
              >
                Try AI Interview
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose CareerAI?
            </h2>
            <p className="text-muted-foreground">
              Everything you need to accelerate your career journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 bg-gradient-to-r from-primary to-accent rounded-2xl text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Join thousands of professionals who've found their dream jobs with CareerAI
            </p>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-medium rounded-lg hover:shadow-xl transition-all"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
