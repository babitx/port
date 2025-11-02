"use client"
import { motion } from "framer-motion"

interface TimelineItem {
  year: string
  title: string
  institution: string
}

const timeline: TimelineItem[] = [
  { year: "2019–2020", title: "10th", institution: "DAV Rehan Kangra, HP" },
  { year: "2021–2022", title: "12th", institution: "Jawahar Navodaya Vidyalaya, Kangra, HP" },
  { year: "2022–2025", title: "BCA", institution: "Guru Nanak Dev University Amritsar, Punjab" },
  { year: "2025–Present", title: "MCA AI/ML", institution: "Lovely Professional University, Punjab" },
]

const hackathons = [{ name: "Web Dev Challenge", date: "2023", description: "Built a full-stack e-commerce platform" }]

const certificates = [
  { name: "Full Stack Development", issuer: "Coursera" },
  { name: "Machine Learning Specialization", issuer: "Andrew Ng" },
]

const traits = [
  { label: "Adaptability", icon: "🔄" },
  { label: "Continuous Learning", icon: "📚" },
  { label: "Problem Solving", icon: "💡" },
]

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative py-24 px-4 md:px-12 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 neon-text text-balance"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-muted-foreground max-w-2xl mb-12"
        >
          I'm a Full Stack Developer, AI Enthusiast, and Problem Solver passionate about building scalable, efficient,
          and intelligent digital solutions. I thrive at the intersection of technology and creativity — transforming
          complex challenges into clean, effective code and intuitive user experiences.
          <br />
          <br />
          Beyond coding, I'm deeply interested in how AI can enhance software development and improve how people
          interact with technology. I enjoy collaborating with cross-functional teams, learning emerging tools, and
          constantly pushing my boundaries to stay ahead in a rapidly evolving tech landscape.
        </motion.p>

        {/* Education Timeline */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-neon-cyan text-balance">Education Timeline</h3>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-4 h-4 bg-neon-cyan rounded-full mt-2 glow cursor-pointer transition-all"
                  />
                  {index < timeline.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                      className="w-1 h-20 bg-gradient-to-b from-neon-cyan to-neon-purple origin-top"
                    />
                  )}
                </div>
                <motion.div
                  className="pb-8 glass-effect p-4 rounded-lg flex-1 group-hover:bg-primary/10 transition-all"
                  whileHover={{ x: 10 }}
                >
                  <div className="text-sm font-semibold text-neon-cyan">{item.year}</div>
                  <div className="text-lg font-bold text-foreground">{item.title}</div>
                  <div className="text-muted-foreground">{item.institution}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hackathons Section */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-neon-cyan text-balance">Hackathons & Competitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-lg glass-effect hover:bg-primary/10 transition-all group"
              >
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-40 bg-gradient-to-br from-neon-magenta/10 to-neon-purple/10 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-sm font-semibold text-neon-magenta mb-2">{hackathon.date}</div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{hackathon.name}</h4>
                  <p className="text-muted-foreground">{hackathon.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-neon-cyan text-balance">Certificates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-lg glass-effect hover:bg-primary/10 transition-all group text-center"
              >
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-40 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-2xl mb-3">🎓</div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{cert.name}</h4>
                  <p className="text-sm text-neon-cyan">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Traits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-neon-cyan md:col-span-3 text-balance">Key Traits</h3>
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="p-6 rounded-lg glass-effect hover:bg-primary/10 transition-all duration-300 card-glow cursor-pointer text-center"
            >
              <div className="relative text-4xl mb-3">{trait.icon}</div>
              <div className="relative font-semibold text-foreground">{trait.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
