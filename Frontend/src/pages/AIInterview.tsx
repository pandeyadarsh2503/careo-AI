import { useState } from 'react';
import { Sparkles, Play } from 'lucide-react';
import InterviewPanel from '@/components/ai/InterviewPanel';
import { motion } from 'framer-motion';

export default function AIInterview() {
  const [isStarted, setIsStarted] = useState(false);
  const [role, setRole] = useState<string>('backend');
  const [level, setLevel] = useState<string>('experienced');

  const roles = [
    { value: 'backend', label: 'Backend Developer' },
    { value: 'frontend', label: 'Frontend Developer' },
    { value: 'fullstack', label: 'Full Stack Developer' },
    { value: 'ml', label: 'Machine Learning Engineer' },
  ];

  const levels = [
    { value: 'fresher', label: 'Fresher' },
    { value: 'intern', label: 'Intern' },
    { value: 'junior', label: 'Junior (1-3 years)' },
    { value: 'mid', label: 'Mid-level (3-5 years)' },
    { value: 'experienced', label: 'Senior (5+ years)' },
  ];

  const handleStart = () => {
    setIsStarted(true);
  };

  if (isStarted) {
    return (
      <div className="h-[calc(100vh-4rem)]">
        <InterviewPanel />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Interview Practice
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Practice with AI Interviewer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get real-time feedback and improve your interview skills with our advanced AI interviewer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Configure Your Interview</h2>

          <div className="space-y-6 mb-8">
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium mb-3">Select Role</label>
              <div className="grid grid-cols-2 gap-3">
                {roles.map((r) => (
                  <button
                    key={r.value}
                    onClick={() => setRole(r.value)}
                    className={`p-4 border rounded-lg text-left transition-all ${
                      role === r.value
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="font-medium">{r.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Level Selection */}
            <div>
              <label className="block text-sm font-medium mb-3">Experience Level</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {levels.map((l) => (
                  <button
                    key={l.value}
                    onClick={() => setLevel(l.value)}
                    className={`p-4 border rounded-lg text-left transition-all ${
                      level === l.value
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="font-medium text-sm">{l.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Start Interview
          </button>

          {/* Info */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold mb-2 text-sm">What to expect:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Technical questions based on your selected role and level</li>
              <li>• Real-time AI feedback on your responses</li>
              <li>• Practice both behavioral and technical questions</li>
              <li>• Get tips to improve your interview performance</li>
            </ul>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">AI-Powered</h3>
            <p className="text-sm text-muted-foreground">
              Advanced AI analyzes your responses and provides personalized feedback
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Role-Specific</h3>
            <p className="text-sm text-muted-foreground">
              Questions tailored to your target role and experience level
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Unlimited Practice</h3>
            <p className="text-sm text-muted-foreground">
              Practice as many times as you want to build confidence
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
