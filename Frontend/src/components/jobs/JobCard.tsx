import { MapPin, Building2, Clock, Briefcase } from 'lucide-react';
import { Job } from '@/types';
import { motion } from 'framer-motion';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

export default function JobCard({ job, onClick }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group cursor-pointer bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:border-primary/50 transition-all"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
            {job.title}
          </h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">{job.company}</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            job.type === 'remote' 
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : job.type === 'hybrid'
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
              : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
          }`}>
            {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Briefcase className="w-4 h-4" />
          <span className="capitalize">{job.experience}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{job.postedDate}</span>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.techStack.slice(0, 4).map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
          >
            {tech}
          </span>
        ))}
        {job.techStack.length > 4 && (
          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded">
            +{job.techStack.length - 4}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        {job.salary && (
          <span className="font-semibold text-foreground">{job.salary}</span>
        )}
        <button className="ml-auto px-4 py-2 bg-gradient-to-r from-primary to-accent text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all">
          View Job
        </button>
      </div>
    </motion.div>
  );
}
