import { useState } from 'react';
import JobCard from '@/components/jobs/JobCard';
import JobFilters from '@/components/jobs/JobFilters';
import JobDetailsPanel from '@/components/jobs/JobDetailsPanel';
import AIChatPanel from '@/components/ai/AIChatPanel';
import { Job } from '@/types';
import { motion } from 'framer-motion';

// Mock data - replace with API call later
const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'remote',
    experience: 'senior',
    salary: '$120k - $180k',
    techStack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    description: 'We are looking for an experienced Full Stack Developer to join our growing team. You will be responsible for developing and maintaining web applications using modern technologies.',
    postedDate: '2 days ago',
  },
  {
    id: '2',
    title: 'Frontend React Developer',
    company: 'StartupXYZ',
    location: 'New York, NY',
    type: 'hybrid',
    experience: 'mid',
    salary: '$90k - $130k',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    description: 'Join our dynamic team as a Frontend Developer. Build beautiful, responsive user interfaces for our SaaS platform.',
    postedDate: '1 week ago',
  },
  {
    id: '3',
    title: 'Backend Engineer',
    company: 'DataSolutions',
    location: 'Austin, TX',
    type: 'onsite',
    experience: 'mid',
    salary: '$100k - $150k',
    techStack: ['Python', 'Django', 'PostgreSQL', 'Docker', 'Kubernetes'],
    description: 'Seeking a Backend Engineer to design and implement scalable microservices architecture.',
    postedDate: '3 days ago',
  },
  {
    id: '4',
    title: 'Junior Full Stack Developer',
    company: 'WebTech Solutions',
    location: 'Remote',
    type: 'remote',
    experience: 'junior',
    salary: '$60k - $80k',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    description: 'Great opportunity for junior developers to learn and grow. We provide mentorship and training.',
    postedDate: '5 days ago',
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudFirst',
    location: 'Seattle, WA',
    type: 'hybrid',
    experience: 'senior',
    salary: '$130k - $170k',
    techStack: ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'Python'],
    description: 'Lead our DevOps initiatives and build robust CI/CD pipelines for our cloud infrastructure.',
    postedDate: '1 day ago',
  },
];

export default function Jobs() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showJobDetails, setShowJobDetails] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setShowJobDetails(true);
    setShowAIChat(false);
  };

  const handleOpenAIChat = () => {
    setShowAIChat(true);
  };

  const handleCloseJobDetails = () => {
    setShowJobDetails(false);
    setShowAIChat(false);
  };

  const handleCloseAIChat = () => {
    setShowAIChat(false);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Filters Sidebar */}
      <JobFilters />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Find Your Perfect Job</h1>
            <p className="text-muted-foreground">
              Showing {mockJobs.length} jobs matching your preferences
            </p>
          </div>

          {/* Jobs Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {mockJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <JobCard job={job} onClick={() => handleJobClick(job)} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Job Details Panel */}
      <JobDetailsPanel
        job={selectedJob}
        isOpen={showJobDetails}
        onClose={handleCloseJobDetails}
        onOpenAIChat={handleOpenAIChat}
      />

      {/* AI Chat Panel */}
      <AIChatPanel isOpen={showAIChat} onClose={handleCloseAIChat} />
    </div>
  );
}
