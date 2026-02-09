import { Briefcase, FileText, TrendingUp, Clock } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const user = useAuthStore(state => state.user);

  const stats = [
    { icon: Briefcase, label: 'Applications', value: '12', color: 'from-blue-500 to-blue-600' },
    { icon: FileText, label: 'Saved Jobs', value: '24', color: 'from-green-500 to-green-600' },
    { icon: TrendingUp, label: 'Profile Views', value: '156', color: 'from-purple-500 to-purple-600' },
    { icon: Clock, label: 'Pending', value: '5', color: 'from-orange-500 to-orange-600' },
  ];

  const recentApplications = [
    { title: 'Senior Full Stack Developer', company: 'TechCorp Inc.', status: 'Under Review', date: '2 days ago' },
    { title: 'Frontend React Developer', company: 'StartupXYZ', status: 'Interview Scheduled', date: '1 week ago' },
    { title: 'Backend Engineer', company: 'DataSolutions', status: 'Application Sent', date: '3 days ago' },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back, {user?.name || 'User'}!
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your job search
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold">{stat.value}</span>
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Applications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h2 className="text-xl font-bold mb-6">Recent Applications</h2>
          
          <div className="space-y-4">
            {recentApplications.map((app, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{app.title}</h3>
                  <p className="text-sm text-muted-foreground">{app.company}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-1">
                    {app.status}
                  </span>
                  <p className="text-xs text-muted-foreground">{app.date}</p>
                </div>
              </div>
            ))}
          </div>

          {recentApplications.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Briefcase className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No applications yet. Start applying to jobs!</p>
            </div>
          )}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 grid md:grid-cols-3 gap-6"
        >
          <a
            href="/jobs"
            className="p-6 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-lg transition-all text-center"
          >
            <h3 className="font-bold mb-2">Browse Jobs</h3>
            <p className="text-sm opacity-90">Find your next opportunity</p>
          </a>
          <a
            href="/ai-interview"
            className="p-6 border-2 border-primary text-primary rounded-xl hover:bg-primary/10 transition-all text-center"
          >
            <h3 className="font-bold mb-2">Practice Interview</h3>
            <p className="text-sm opacity-90">Prepare with AI</p>
          </a>
          <a
            href="/career"
            className="p-6 border-2 border-accent text-accent rounded-xl hover:bg-accent/10 transition-all text-center"
          >
            <h3 className="font-bold mb-2">Career Advice</h3>
            <p className="text-sm opacity-90">Get personalized guidance</p>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
