import sujanthapaCV from "../assets/sujan-thapa-cv.pdf";
const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="bg-primary/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="mb-4 text-light/70">
                I'm a passionate developer with 1+ years of experience building
                web & software applications. I specialize in React, JavaScript,
                and modern backend technologies.
              </p>
              <p className="mb-4 text-light/70">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge
                through any medium.
              </p>
              <div className="mt-6">
                <a href={sujanthapaCV} className="btn-primary" download>
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Experience & Education</h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Work Column */}
              <div>
                <h4 className="text-xl font-bold text-primary mb-4">
                  Work Experience
                </h4>
                <div className="space-y-6">
                  {[
                    {
                      title: "Full Stack Developer",
                      company: "Paper Bank Solutions",
                      period: "Dec 2025 - Present",
                      points: [
                        "Bug fixing & troubleshooting",
                        "Client requirement analysis",
                        "Feature development",
                      ],
                    },
                    {
                      title: "PHP Developer",
                      company: "ICT Matrics",
                      period: "Jan 2025 - May 2025",
                      points: [
                        "Web development with PHP/MySQL",
                        "AJAX implementations",
                        "Secure authentication",
                      ],
                    },
                    {
                      title: "Customer Service Rep",
                      company: "Premium Technologies",
                      period: "Feb 2022 - Apr 2022",
                      points: [
                        "Customer query management",
                        "RDLC expertise for cheque systems",
                      ],
                    },
                  ].map((job, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h5 className="font-bold">{job.title}</h5>
                      <p className="text-primary text-sm">
                        {job.company} • {job.period}
                      </p>
                      <ul className="text-light/70 text-sm mt-1 space-y-1">
                        {job.points.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Column */}
              <div>
                <h4 className="text-xl font-bold text-green-400 mb-4">
                  Education & Training
                </h4>
                <div className="space-y-6">
                  <div className="border-l-2 border-green-500 pl-4">
                    <h5 className="font-bold">BIT - Information Technology</h5>
                    <p className="text-green-400 text-sm">
                      College of IT & Engineering • CGPA: 3.71
                    </p>
                    <p className="text-light/70 text-sm mt-1">
                      Software Engineering, Web Application Development, final
                      project: Sajilo Aawas
                    </p>
                  </div>

                  <div className="border-l-2 border-green-500 pl-4">
                    <h5 className="font-bold">+2 Science</h5>
                    <p className="text-green-400 text-sm">The New Summit Secondary School • 2020</p>
                    <p className="text-light/70 text-sm mt-1">
                      Physics, Chemistry, Mathematics, Computer Science
                    </p>
                  </div>

                  <div className="border-l-2 border-green-500 pl-4">
                    <h5 className="font-bold">SEE</h5>
                    <p className="text-green-400 text-sm">Himalaya English Boarding School • 2018</p>
                    <p className="text-light/70 text-sm mt-1">
                      Completed School Education Examination with grade A
                    </p>
                  </div>

                  <div className="border-l-2 border-green-500 pl-4">
                    <h5 className="font-bold">Blockchain Fellowship</h5>
                    <p className="text-green-400 text-sm">eSatya • 2025</p>
                    <p className="text-light/70 text-sm mt-1">
                      Smart contracts, DApps development, blockchain solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
