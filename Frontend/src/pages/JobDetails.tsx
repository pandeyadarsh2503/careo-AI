import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin, Briefcase, Clock, DollarSign } from 'lucide-react';

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/jobs')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Jobs
        </button>

        {/* Job Header */}
        <div className="bg-card border border-border rounded-xl p-8 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-3">Senior Full Stack Developer</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  <span>TechCorp Inc.</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Remote
            </span>
          </div>

          <div className="flex flex-wrap gap-6 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              <span>Senior Level</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Posted 2 days ago</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-primary" />
              <span className="font-semibold">$120k - $180k</span>
            </div>
          </div>

          <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:shadow-lg transition-all">
            Apply for this Position
          </button>
        </div>

        {/* Job Details */}
        <div className="bg-card border border-border rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Job Details</h2>
          
          <div className="prose prose-sm max-w-none">
            <p className="text-muted-foreground mb-6">
              Job ID: {id}
            </p>
            
            <h3 className="text-lg font-semibold mb-3">Description</h3>
            <p className="text-muted-foreground mb-6">
              This is a placeholder for the full job description. In the production version, 
              this would fetch the actual job details from the API based on the job ID.
            </p>

            <h3 className="text-lg font-semibold mb-3">Requirements</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>5+ years of experience with full stack development</li>
              <li>Strong proficiency in React, Node.js, and TypeScript</li>
              <li>Experience with cloud platforms (AWS, GCP, or Azure)</li>
              <li>Knowledge of database systems (PostgreSQL, MongoDB)</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Benefits</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Competitive salary and equity package</li>
              <li>Health, dental, and vision insurance</li>
              <li>Flexible work schedule and remote options</li>
              <li>Professional development opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
