import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  ExternalLink,
  Network,
  ShieldCheck,
  TerminalSquare,
} from 'lucide-react';
import './styles.css';

type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  tech: string;
  date: string;
  image: string;
  accent: string;
  links?: { label: string; href: string }[];
};

const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`;
const resumeHref = `${import.meta.env.BASE_URL}Evan-Ashburn-Resume.pdf`;

const flagshipProjects: Project[] = [
  {
    title: 'CharacterForge AI',
    eyebrow: 'Generative AI · AWS Serverless · Desktop Apps',
    summary:
      'Desktop-first game AI platform for creating, testing, packaging, and deploying structured AI-powered characters. Includes a Windows app, guided AWS setup flow, portable character packs, OpenAPI documentation, TypeScript SDK, and game-client examples.',
    tech: 'Python, TypeScript, Rust, AWS Lambda, API Gateway, DynamoDB, Amazon Bedrock, Cognito, AWS SAM, OpenAPI, Tauri, React, Vite, PowerShell, NSIS',
    date: 'May 2026',
    image: asset('characterforge-logo.png'),
    accent: 'AI character platform',
    links: [{ label: 'GitHub', href: 'https://github.com/Cloudygb/CharacterForge-AI' }],
  },
  {
    title: 'Sigilore',
    eyebrow: 'Realtime Apps · RPG Tools · Cloud Backend',
    summary:
      'Cloud-backed dark-fantasy virtual tabletop for running and playing turn-based RPG campaigns, with campaign/world management, interactive UI components, realtime state, storage, auth, edge functions, strict TypeScript validation, and CI checks.',
    tech: 'TypeScript, React, Vite, Tailwind CSS, shadcn/ui, Supabase, PostgreSQL, Edge Functions, Bun, Vitest, Deno, GitHub Actions',
    date: 'June 2026',
    image: asset('sigilore-sigil.png'),
    accent: 'Virtual tabletop system',
  },
  {
    title: 'Custom Box Builder',
    eyebrow: 'E-commerce · WordPress Plugin · Product Configurator',
    summary:
      'Custom box-design tool for WordPress/WooCommerce with frontend configuration UI, admin settings, custom box type management, minimum-order rules, server-side price calculation, validation, and reorderable product options.',
    tech: 'PHP, WordPress, WooCommerce, TypeScript, React, Vite, Tailwind CSS, shadcn/ui, jQuery UI, JavaScript, CSS',
    date: 'Oct 2025',
    image: asset('cute-box.png'),
    accent: 'Commerce workflow software',
    links: [{ label: 'GitHub', href: 'https://github.com/Cloudygb/box-craft-designer' }],
  },
  {
    title: 'Band-it',
    eyebrow: 'Full-stack Web/Mobile · AWS Architecture',
    summary:
      'Cross-platform web and mobile application concept covering secure authentication, user profiles, cloud storage, dynamic data access, UI/UX, backend planning, and AWS deployment architecture.',
    tech: 'React, React Native, Node.js, AWS Lambda, Aurora Serverless PostgreSQL, S3, CloudFront, Cognito, API Gateway, IAM, Route53, Tailwind CSS, Figma, Krita',
    date: 'May 2025',
    image: asset('bandit-raccoon.png'),
    accent: 'AWS app architecture',
  },
];

const securityDocuments: Project[] = [
  {
    title: 'Vulnerability Assessment',
    eyebrow: 'NIST SP 800-30 · Risk Analysis',
    summary:
      'Comprehensive vulnerability assessment for an exposed database server, including risk factors and practical security recommendations to protect business operations.',
    tech: 'Risk assessment, threat likelihood, impact analysis, NIST guidance, remediation planning',
    date: 'May 2026',
    image: asset('vulnerability.png'),
    accent: 'Security assessment',
    links: [{ label: 'View document', href: 'https://docs.google.com/document/d/18kz6ACyjzgVNA41KmM_8GppGSf6mZgFoMBt5tsEsGfs/edit?tab=t.0#heading=h.5x0d5h95i329' }],
  },
  {
    title: 'SQL Query Portfolio',
    eyebrow: 'SQL · Data Retrieval · Joins',
    summary:
      'Implemented JOIN commands and set operations in MySQL to combine and query data across multiple tables with clear, repeatable query logic.',
    tech: 'MySQL, inner joins, left joins, right joins, self joins, cross joins, UNION, UNION ALL',
    date: 'May 2026',
    image: asset('sql.png'),
    accent: 'Data querying',
    links: [{ label: 'View document', href: 'https://docs.google.com/document/d/1QcRgDTr0evD69IJFQmbv-2FsD8DR7EA7tcUsLXAZB8Y/edit?tab=t.0#heading=h.cssmkpdye1jk' }],
  },
  {
    title: 'Incident Report',
    eyebrow: 'Incident Response · Root Cause · Controls',
    summary:
      'Identified the cause and impact of a security incident, then documented corrective and preventative changes to reduce repeat exposure.',
    tech: 'Incident documentation, control recommendations, root-cause analysis, remediation planning',
    date: 'Apr 2026',
    image: asset('incident.png'),
    accent: 'Incident response',
    links: [{ label: 'View document', href: 'https://docs.google.com/document/d/1Ij3rI8wGa2zM4pyKpb0Lm-udoM2DBT2WUtRqSY2KtgI/edit?tab=t.0' }],
  },
  {
    title: 'TryHackMe Journal',
    eyebrow: 'Hands-on Labs · AI Security · Blue Team',
    summary:
      'Documented hands-on rooms covering Linux and Windows fundamentals, Wireshark, Splunk, incident handling, networking, and AI security fundamentals.',
    tech: 'TryHackMe, Linux, Windows, Wireshark, Splunk, Nmap, SOC workflows, AI security',
    date: 'Apr 2026',
    image: asset('tryhackme.png'),
    accent: 'Security labs',
    links: [{ label: 'View journal', href: 'https://docs.google.com/document/d/1CKllfsGiaLa8SfPgz2H-wZ7nonQT6GZkzwghG6Mkl1g/edit?tab=t.0' }],
  },
  {
    title: 'Security Audit',
    eyebrow: 'Controls · Compliance · Prioritization',
    summary:
      'Assessed security and control compliance for a sample organization, then prioritized risks and recommendations with clear decision logic.',
    tech: 'Controls assessment, compliance review, risk prioritization, documentation',
    date: 'Mar 2026',
    image: asset('audit.png'),
    accent: 'Security controls',
    links: [{ label: 'View audit', href: 'https://docs.google.com/document/d/19c7zrpBnW2HN7R4lYcw2GjqZ29O3ZdN5QSYYZQ5m24U/edit?tab=t.0#heading=h.87tykp1u0l36' }],
  },
  {
    title: 'Incident Handler’s Journal',
    eyebrow: 'SOC Writing · Event Tracking · Lessons Learned',
    summary:
      'Clear written documentation of cybersecurity events, tools used, observations, response notes, and lessons learned throughout the process.',
    tech: 'Incident handling, event notes, security writing, operational documentation',
    date: 'Jan 2024',
    image: asset('handlersjournal.png'),
    accent: 'SOC documentation',
    links: [{ label: 'View journal', href: 'https://docs.google.com/document/d/1sC1PdUSr3PQWeOjM_QfVQfhRcbqy7uDNRKAX4qVWKDw/edit?tab=t.0' }],
  },
];

const skills = [
  ['Languages', 'Python, PHP, C/C++, JavaScript, SQL, Bash, Java, Lua, TypeScript, HTML/CSS, Ruby, Go, Swift'],
  ['Frameworks', 'Flask, FastAPI, PyTorch, React, Vue.js, Next.js, Spring Boot, Angular, NestJS, Bootstrap, Vapor, LAMP'],
  ['Cloud & Platforms', 'AWS, Google Cloud, Azure, Linux, Windows, Docker, Kubernetes, ECS, Arduino, Raspberry Pi, OpenAI'],
  ['Data & Ops', 'PostgreSQL, MySQL, SQLite, MongoDB, Redis, MariaDB, CloudWatch, Zabbix, Hudu, Bitbucket, Git'],
  ['Security', 'Security+, vulnerability assessment, Wireshark, Nmap, Splunk, controls, incident response, AI security fundamentals'],
];

const stats = [
  ['300+', 'monthly service requests led across hybrid client environments'],
  ['3', 'current certifications across AWS, CompTIA, and Google Cybersecurity'],
  ['12+', 'production-minded projects spanning cloud, security, desktop, and web'],
  ['2026', 'active build year for AI, tabletop, local-first, and security work'],
];

function App() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#top"><span>EA</span><strong>Technical Portfolio</strong></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#security">Security</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero section-pad">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> Cybersecurity · AWS Architecture · Application Development</div>
            <h1>Building secure systems that move from idea to deployed product.</h1>
            <p className="hero-lede">
              I’m Evan Ashburn — a technical team lead, AWS Certified Solutions Architect, Security+ professional, and full-stack builder focused on cloud infrastructure, secure application design, AI-enabled products, and real-world operations.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore the build log <ArrowUpRight size={18} /></a>
              <a className="button ghost" href={resumeHref}>Download resume</a>
            </div>
          </div>

          <div className="hero-card" aria-label="Profile card for Evan Ashburn">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <img src={asset('evan.jpg')} alt="Evan Ashburn" />
            <div className="identity-plate">
              <span>Cloud • Security • Software</span>
              <strong>Evan Ashburn</strong>
              <small>La Vernia, Texas</small>
            </div>
          </div>
        </div>

        <div className="stat-strip">
          {stats.map(([number, label]) => (
            <div className="stat" key={number}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad profile-section">
        <div className="section-heading">
          <span className="kicker">Positioning</span>
          <h2>Who am I?</h2>
        </div>
        <div className="positioning-card">
          <p>
            I’m a technical team lead, AWS Certified Solutions Architect, Security+ professional, and application developer who works where infrastructure, security, and software meet. I restore client systems, design AWS-backed services, build custom applications, write automation, document production environments, and turn ambiguous business problems into maintainable technical systems. I position myself as a builder who can understand the business need, architect the cloud and network foundation, secure the moving parts, and ship software that is practical enough to support in the real world.
          </p>
        </div>
      </section>

      <section id="work" className="section-pad dark-band">
        <div className="section-heading split">
          <div>
            <span className="kicker">Flagship systems</span>
            <h2>Product builds, cloud architecture, and application engineering.</h2>
          </div>
          <p>Project language is grounded in the resume: direct, technical, and outcome-focused.</p>
        </div>
        <div className="project-grid flagship-grid">
          {flagshipProjects.map((project) => <ProjectCard key={project.title} project={project} large />)}
        </div>
      </section>

      <section id="security" className="section-pad">
        <div className="section-heading split">
          <div>
            <span className="kicker">Security portfolio</span>
            <h2>The original project links, redesigned as a richer case-study archive.</h2>
          </div>
          <p>These retain the important Google Docs links from the original cybersecurity portfolio while moving the presentation into a broader technical story.</p>
        </div>
        <div className="project-grid compact-grid">
          {securityDocuments.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>

      <section id="resume" className="section-pad resume-section">
        <div className="section-heading">
          <span className="kicker">Resume intelligence</span>
          <h2>Experience, certifications, and technical range.</h2>
        </div>
        <div className="resume-layout">
          <article className="experience-card">
            <div className="role-topline">
              <div>
                <span>The Computer Loft</span>
                <h3>Technical Team Lead</h3>
              </div>
              <strong>Mar 2025 — Current</strong>
            </div>
            <ul>
              <li>Lead resolution of 300+ monthly service requests across hardware, business software, network infrastructure, and AWS-hosted services.</li>
              <li>Build and commission network racks, switches, wireless access points, routers, firewalls, and production documentation in Hudu.</li>
              <li>Develop and maintain cloud services using S3, ECS, Lambda, API Gateway, DynamoDB, CloudFormation, CloudWatch, Route53, and Bedrock.</li>
              <li>Deploy Zabbix monitoring and use Nmap/Wireshark for discovery, port validation, packet analysis, and root-cause troubleshooting.</li>
              <li>Design client-facing apps, internal automation tools, and WordPress plugins with Python, PHP, JavaScript/TypeScript, SQL, Docker, Kubernetes, and ECS.</li>
            </ul>
          </article>

          <aside className="credential-stack">
            <Credential icon={<CloudCog />} title="AWS Certified Solutions Architect — Associate" detail="Issued Apr 2025 · Expires Apr 2028" />
            <Credential icon={<ShieldCheck />} title="CompTIA Security+" detail="Issued Jul 2026 · Expires Jul 2029" />
            <Credential icon={<BadgeCheck />} title="Google Cybersecurity Professional" detail="Issued Jul 2026" />
            <Credential icon={<Award />} title="TryHackMe AI Security CTF Runner-up" detail="June 2026" />
          </aside>
        </div>
      </section>

      <section className="section-pad skills-section">
        <div className="section-heading split">
          <div>
            <span className="kicker">Toolchain</span>
            <h2>A practical stack for secure, deployed systems.</h2>
          </div>
        </div>
        <div className="skills-grid">
          {skills.map(([name, list], index) => (
            <div className="skill-card" key={name}>
              {index === 0 && <Code2 />}
              {index === 1 && <BrainCircuit />}
              {index === 2 && <CloudCog />}
              {index === 3 && <Database />}
              {index === 4 && <Network />}
              <h3>{name}</h3>
              <p>{list}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-pad contact-section">
        <div className="contact-card">
          <span className="kicker">Next signal</span>
          <h2>Looking for cloud, security, or application development work that needs ownership?</h2>
          <p>I’m positioning this portfolio around the work I actually do: lead technical operations, design cloud-backed systems, build apps, and document security-minded decisions clearly.</p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:evan.computerloft@gmail.com">Email Evan</a>
            <a className="button ghost" href="https://www.linkedin.com/in/evan-ashburn/">LinkedIn</a>
            <a className="button ghost" href="https://github.com/Cloudygb">GitHub</a>
            <a className="button ghost" href={resumeHref}><TerminalSquare size={18} /> Resume PDF</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Credential({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) {
  return (
    <div className="credential">
      <div className="credential-icon">{icon}</div>
      <div>
        <strong>{title}</strong>
        <span>{detail}</span>
      </div>
    </div>
  );
}

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <article className={`project-card ${large ? 'large' : ''}`}>
      <div className="project-media">
        <img src={project.image} alt="" />
        <span>{project.accent}</span>
      </div>
      <div className="project-copy">
        <span className="project-eyebrow">{project.eyebrow}</span>
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <time>{project.date}</time>
        </div>
        <p>{project.summary}</p>
        <div className="tech-line"><strong>Tech:</strong> {project.tech}</div>
        {project.links && (
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <ExternalLink size={15} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
