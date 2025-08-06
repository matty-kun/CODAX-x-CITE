import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Brain, Gamepad2, Smartphone, Palette, Cloud, BarChart3, Coins, Cpu, Send, Rocket } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import emailjs from '@emailjs/browser';

const Programs = () => {
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [whyInterested, setWhyInterested] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showStartupQuestions, setShowStartupQuestions] = useState(false);
  const [startupField, setStartupField] = useState('');
  const [startupProblem, setStartupProblem] = useState('');
  const [startupIdeas, setStartupIdeas] = useState('');
  const [startupBarriers, setStartupBarriers] = useState('');
  // Check if Formspree is configured
  const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID;
  const [state, handleSubmit] = useForm(formspreeFormId || "temp-form-id");

  const programs = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Master modern web technologies including React, Node.js, and full-stack development.",
      color: "from-blue-500 to-cyan-400",
      skills: ["React", "Node.js", "TypeScript", "Next.js"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Learn ethical hacking, network security, and protect digital assets from threats.",
      color: "from-red-500 to-pink-500",
      skills: ["Ethical Hacking", "Network Security", "Penetration Testing", "CISSP"]
    },
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description: "Dive into AI, machine learning algorithms, neural networks, and data science.",
      color: "from-purple-500 to-indigo-500",
      skills: ["Python", "TensorFlow", "Deep Learning", "Neural Networks"]
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Create immersive games using Unity, Unreal Engine, and modern game design principles.",
      color: "from-green-500 to-teal-400",
      skills: ["Unity", "Unreal Engine", "C#", "Game Design"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Develop native and cross-platform mobile applications for iOS and Android.",
      color: "from-orange-500 to-amber-400",
      skills: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create beautiful, user-centered designs and seamless digital experiences.",
      color: "from-pink-500 to-rose-400",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"]
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "Master cloud infrastructure, CI/CD pipelines, and modern deployment strategies.",
      color: "from-sky-500 to-blue-400",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      icon: BarChart3,
      title: "Data Science & Analytics",
      description: "Analyze complex data, build predictive models, and extract meaningful insights.",
      color: "from-emerald-500 to-green-400",
      skills: ["Python", "R", "SQL", "Tableau"]
    },
    {
      icon: Coins,
      title: "Blockchain & Web3",
      description: "Explore decentralized technologies, smart contracts, and cryptocurrency development.",
      color: "from-yellow-500 to-orange-400",
      skills: ["Solidity", "Ethereum", "DeFi", "NFTs"]
    },
    {
      icon: Cpu,
      title: "Robotics & IoT",
      description: "Build intelligent systems, IoT devices, and explore the intersection of hardware and software.",
      color: "from-violet-500 to-purple-400",
      skills: ["Arduino", "Raspberry Pi", "C++", "Sensors"]
    },
    {
      icon: Rocket,
      title: "Technopreneurship",
      description: "Build and launch your own startup with guidance on business strategy, funding, and growth.",
      color: "from-indigo-500 to-purple-500",
      skills: ["Business Strategy", "Funding", "Growth Hacking", "MVP Development"]
    }
  ];

  const handleProgramToggle = (programTitle: string) => {
    const isCurrentlySelected = selectedPrograms.includes(programTitle);
    const willBeSelected = !isCurrentlySelected;
    
    setSelectedPrograms(prev => 
      isCurrentlySelected
        ? prev.filter(p => p !== programTitle)
        : [...prev, programTitle]
    );
    
    // Show/hide startup questions based on Technopreneurship selection
    if (programTitle === "Technopreneurship") {
      setShowStartupQuestions(willBeSelected);
    }
  };

  const sendEmailToUser = async (userEmail: string, userName: string, selectedPrograms: string[], whyInterested: string, startupData?: any) => {
    // Check if EmailJS is configured
    const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      console.warn('EmailJS not configured. Skipping email send.');
      return;
    }
    
    try {
      console.log('Attempting to send email to:', userEmail);
      
      const templateParams = {
        email: userEmail,
        name: userName,
        selected_programs: selectedPrograms.join(', '),
        why_interested: whyInterested,
        startup_field: startupData?.field || '',
        startup_problem: startupData?.problem || '',
        startup_ideas: startupData?.ideas || '',
        startup_barriers: startupData?.barriers || '',
        to_email: userEmail,
        to_name: userName
      };

      console.log('Template params:', templateParams);

      const result = await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        templateParams,
        emailjsPublicKey
      );

      console.log('Email sent successfully to user:', result);
    } catch (error) {
      console.error('Error sending email to user:', error);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare the data for Formspree
    const formData = {
      name: name,
      email: email,
      selectedPrograms: selectedPrograms.join(', '),
      whyInterested: whyInterested,
      startupField: startupField,
      startupProblem: startupProblem,
      startupIdeas: startupIdeas,
      startupBarriers: startupBarriers
    };
    
    // Submit to Formspree
    await handleSubmit(formData);
    
    // Send email to user
    const startupData = showStartupQuestions ? {
      field: startupField,
      problem: startupProblem,
      ideas: startupIdeas,
      barriers: startupBarriers
    } : undefined;
    
    await sendEmailToUser(email, name, selectedPrograms, whyInterested, startupData);
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-purple-600">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore diverse tech domains and find your path.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group cursor-pointer"
            >
              <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                <program.icon className="w-10 h-10 mb-3" />
                <h3 className="text-lg font-bold mb-2 leading-tight">{program.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {program.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {program.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interest Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12"
        >
          <div id="form" className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                What program or tech niche are you most interested in?
              </h3>
              <p className="text-xl text-gray-600">
                Help us understand your interests so we can tailor our plan to your needs!
              </p>
            </div>

            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="bg-green-100 text-green-800 p-6 rounded-2xl inline-block">
                  <div className="flex items-center gap-3 text-xl font-semibold">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Thank you for your interest!
                  </div>
                  <p className="mt-2 text-green-700">Your feedback helps us build the right program for you.</p>
                  {!formspreeFormId && (
                    <p className="mt-2 text-yellow-700 text-sm">Note: Form submission is in demo mode. Configure Formspree for production use.</p>
                  )}
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-gray-900 mb-3">
                      Name (Required)
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-200"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-3">
                      Email (Required)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-200"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Program Selection */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    Select the programs you're interested in:
                  </label>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {programs.map((program, index) => (
                      <motion.label
                        key={index}
                        className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                          selectedPrograms.includes(program.title)
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 bg-white hover:border-purple-300'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={selectedPrograms.includes(program.title)}
                          onChange={() => handleProgramToggle(program.title)}
                        />
                        <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                          selectedPrograms.includes(program.title)
                            ? 'border-purple-500 bg-purple-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedPrograms.includes(program.title) && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          <program.icon className="w-5 h-5 text-gray-600" />
                          <span className="font-medium text-gray-900 text-sm">{program.title}</span>
                        </div>
                      </motion.label>
                    ))}
                  </div>
                </div>

                {/* Why Interested */}
                <div>
                  <label htmlFor="why-interested" className="block text-lg font-semibold text-gray-900 mb-4">
                    Why are you interested in this niche? (Required)
                  </label>
                  <textarea
                    id="why-interested"
                    name="whyInterested"
                    required
                    rows={4}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us what draws you to these areas, your goals, or what do you want to see in this program..."
                    value={whyInterested}
                    onChange={(e) => setWhyInterested(e.target.value)}
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="whyInterested"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Startup Questions */}
                {showStartupQuestions && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border-2 border-purple-200"
                  >
                    <div className="text-center mb-6">
                      <h4 className="text-2xl font-bold text-purple-900 mb-2">Startup Questions</h4>
                      <p className="text-purple-700">Help us understand your startup vision better!</p>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Startup Field */}
                      <div>
                        <label htmlFor="startup-field" className="block text-lg font-semibold text-gray-900 mb-3">
                          What field is your startup in?
                        </label>
                        <input
                          type="text"
                          id="startup-field"
                          name="startupField"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-200"
                          placeholder="e.g., Fintech, EdTech, HealthTech, E-commerce, etc."
                          value={startupField}
                          onChange={(e) => setStartupField(e.target.value)}
                        />
                      </div>

                      {/* Problem to Solve */}
                      <div>
                        <label htmlFor="startup-problem" className="block text-lg font-semibold text-gray-900 mb-3">
                          What problem do you want to solve?
                        </label>
                        <textarea
                          id="startup-problem"
                          name="startupProblem"
                          rows={3}
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-200 resize-none"
                          placeholder="Describe the specific problem or pain point your startup aims to address..."
                          value={startupProblem}
                          onChange={(e) => setStartupProblem(e.target.value)}
                        />
                      </div>

                      {/* Ideas for Solving */}
                      <div>
                        <label htmlFor="startup-ideas" className="block text-lg font-semibold text-gray-900 mb-3">
                          What are your ideas in solving that problem?
                        </label>
                        <textarea
                          id="startup-ideas"
                          name="startupIdeas"
                          rows={4}
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-200 resize-none"
                          placeholder="Share your approach, solution, or innovative ideas for solving this problem..."
                          value={startupIdeas}
                          onChange={(e) => setStartupIdeas(e.target.value)}
                        />
                      </div>

                      {/* Barriers */}
                      <div>
                        <label htmlFor="startup-barriers" className="block text-lg font-semibold text-gray-900 mb-3">
                          What's stopping you from pursuing that startup?
                        </label>
                        <textarea
                          id="startup-barriers"
                          name="startupBarriers"
                          rows={3}
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-200 resize-none"
                          placeholder="What challenges, fears, or obstacles are preventing you from moving forward?"
                          value={startupBarriers}
                          onChange={(e) => setStartupBarriers(e.target.value)}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <div className="text-center">
                  <motion.button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center gap-3 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: selectedPrograms.length > 0 && name.trim() && email.trim() && whyInterested.trim() && !state.submitting ? 1.05 : 1 }}
                    whileTap={{ scale: selectedPrograms.length > 0 && name.trim() && email.trim() && whyInterested.trim() && !state.submitting ? 0.95 : 1 }}
                    disabled={selectedPrograms.length === 0 || !name.trim() || !email.trim() || !whyInterested.trim() || state.submitting}
                  >
                    <Send className="w-5 h-5" />
                    {state.submitting ? 'Submitting...' : 'Submit Interest'}
                  </motion.button>
                  {(selectedPrograms.length === 0 || !name.trim() || !email.trim()) && (
                    <p className="text-gray-500 text-sm mt-2">
                      {selectedPrograms.length === 0 
                        ? 'Please select at least one program to continue'
                        : !name.trim() || !email.trim() || !whyInterested.trim()
                        ? 'Please fill in all required fields'
                        : 'Please select at least one program to continue'
                      }
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;