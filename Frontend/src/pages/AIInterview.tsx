import { useState, useRef, useEffect } from "react";
import { Sparkles, Play } from "lucide-react";
import { motion } from "framer-motion";
import InterviewPanel from "@/components/ai/InterviewPanel";
import rolesData from "@/data/roles.json";

export default function AIInterview() {
  const [isStarted, setIsStarted] = useState(false);
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [filteredRoles, setFilteredRoles] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter roles dynamically
  useEffect(() => {
    if (role.trim() === "") {
      setFilteredRoles([]);
      return;
    }

    const matches = rolesData
      .filter((r) =>
        r.toLowerCase().includes(role.toLowerCase())
      )
      .slice(0, 8);

    setFilteredRoles(matches);
  }, [role]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleStart = () => {
    if (!role.trim() || !level) return;
    setIsStarted(true);
  };

  if (isStarted) {
    return (
      <div className="h-[calc(100vh-4rem)]">
        <InterviewPanel role={role} level={level} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-transparent">
      <div className="max-w-4xl mx-auto px-4 py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Interview Practice
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Practice with AI Interviewer
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get real-time feedback and improve your interview skills with our advanced AI interviewer
          </p>
        </motion.div>

        {/* Config Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-10 shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Configure Your Interview
          </h2>

          <div className="space-y-6 mb-8">

            {/* Role Search */}
            <div ref={dropdownRef} className="relative">
              <label className="block text-sm font-medium mb-3">
                Select Role
              </label>

              <input
                type="text"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                  setShowDropdown(true);
                }}
                placeholder="Search role (e.g., Machine Learning Engineer)"
                className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {showDropdown && filteredRoles.length > 0 && (
                <div className="absolute z-20 w-full mt-2 bg-card border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredRoles.map((r, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setRole(r);
                        setShowDropdown(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-primary/10 transition"
                    >
                      {r}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Experience Level */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Experience Level
              </label>

              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card"
              >
                <option value="" disabled>
                  Select Experience Level
                </option>
                <option value="fresher">Fresher</option>
                <option value="intern">Intern</option>
                <option value="junior">Junior (1-3 years)</option>
                <option value="mid">Mid-level (3-5 years)</option>
                <option value="experienced">Senior (5+ years)</option>
                <option value="lead">Lead</option>
                <option value="manager">Manager</option>
                <option value="director">Director</option>
                <option value="executive">Executive</option>
              </select>
            </div>

          </div>

          {/* Start Button */}
          <button
            onClick={handleStart}
            disabled={!role.trim() || !level}
            className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Play className="w-5 h-5" />
            Start Interview
          </button>

          {/* Info Box Restored */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold mb-2 text-sm">What to expect:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Questions tailored to your selected role</li>
              <li>• Technical and behavioral coverage</li>
              <li>• Real-time AI feedback</li>
              <li>• Personalized improvement tips</li>
            </ul>
          </div>
        </motion.div>

        {/* Feature Cards Restored */}
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
