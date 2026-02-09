import { X, MapPin, Building2, Clock, Briefcase, DollarSign, Sparkles } from 'lucide-react';
import { Job } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

interface JobDetailsPanelProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenAIChat: () => void;
}

export default function JobDetailsPanel({ job, isOpen, onClose, onOpenAIChat }: JobDetailsPanelProps) {
  if (!job) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-background border-l border-border z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Building2 className="w-5 h-5" />
                    <span className="font-medium">{job.company}</span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="capitalize">{job.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{job.postedDate}</span>
                </div>
                {job.salary && (
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="font-semibold">{job.salary}</span>
                  </div>
                )}
              </div>

              {/* Type Badge */}
              <div className="mb-6">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                  job.type === 'remote' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : job.type === 'hybrid'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                }`}>
                  {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
                </span>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {job.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Job Description</h3>
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p>{job.description}</p>
                  
                  <h4 className="font-semibold text-foreground mt-4 mb-2">Requirements:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>3+ years of experience with {job.techStack[0]}</li>
                    <li>Strong understanding of modern web development</li>
                    <li>Experience with REST APIs and state management</li>
                    <li>Excellent problem-solving skills</li>
                    <li>Good communication and teamwork abilities</li>
                  </ul>

                  <h4 className="font-semibold text-foreground mt-4 mb-2">Nice to have:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Experience with cloud platforms (AWS, GCP, Azure)</li>
                    <li>Knowledge of CI/CD pipelines</li>
                    <li>Contributions to open source projects</li>
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-6 border-t border-border">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:shadow-lg transition-all">
                  Apply Now
                </button>
                <button
                  onClick={onOpenAIChat}
                  className="flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  Review with AI
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
