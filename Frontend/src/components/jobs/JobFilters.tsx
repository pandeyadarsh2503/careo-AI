import { Search, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function JobFilters() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedExp, setSelectedExp] = useState<string[]>([]);

  const jobTypes = ['remote', 'onsite', 'hybrid'];
  const techStack = ['React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'];
  const experience = ['fresher', 'junior', 'mid', 'senior'];

  const toggleFilter = (value: string, selected: string[], setter: (val: string[]) => void) => {
    if (selected.includes(value)) {
      setter(selected.filter(item => item !== value));
    } else {
      setter([...selected, value]);
    }
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedType([]);
    setSelectedTech([]);
    setSelectedExp([]);
  };

  const hasActiveFilters = searchQuery || selectedType.length > 0 || selectedTech.length > 0 || selectedExp.length > 0;

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-80 bg-card border-r border-border p-6 overflow-y-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            Clear all
          </button>
        )}
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Job title, company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Job Type */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3">Job Type</label>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedType.includes(type)}
                onChange={() => toggleFilter(type, selectedType, setSelectedType)}
                className="w-4 h-4 rounded border-input text-primary focus:ring-2 focus:ring-ring cursor-pointer"
              />
              <span className="text-sm capitalize group-hover:text-primary transition-colors">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3">Tech Stack</label>
        <div className="space-y-2">
          {techStack.map((tech) => (
            <label key={tech} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedTech.includes(tech)}
                onChange={() => toggleFilter(tech, selectedTech, setSelectedTech)}
                className="w-4 h-4 rounded border-input text-primary focus:ring-2 focus:ring-ring cursor-pointer"
              />
              <span className="text-sm group-hover:text-primary transition-colors">
                {tech}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience Level */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3">Experience Level</label>
        <div className="space-y-2">
          {experience.map((exp) => (
            <label key={exp} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedExp.includes(exp)}
                onChange={() => toggleFilter(exp, selectedExp, setSelectedExp)}
                className="w-4 h-4 rounded border-input text-primary focus:ring-2 focus:ring-ring cursor-pointer"
              />
              <span className="text-sm capitalize group-hover:text-primary transition-colors">
                {exp}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-sm font-medium mb-2">Active Filters:</p>
          <div className="flex flex-wrap gap-2">
            {[...selectedType, ...selectedTech, ...selectedExp].map((filter, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded capitalize"
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.aside>
  );
}
