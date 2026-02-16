// Local AI Chatbot - Pure Client-Side, No External APIs
const sectionLinks = {
  experience: { url: 'work-experience.html', label: '💼 View Work Experience' },
  projects: { url: 'projects.html', label: '🚀 View All Projects' },
  energy: { url: 'energy-forecasting-project.html', label: '⚡ Energy Forecasting Project' },
  realtime: { url: 'real-time-streaming.html', label: '⚡ Real-Time Streaming Project' },
  llm: { url: 'llm-data-quality-project.html', label: '🤖 LLM Data Quality Project' },
  webrtc: { url: 'webrtc-camera-project.html', label: '📹 WebRTC Camera Project' },
  skills: { url: 'skills.html', label: '🛠️ View Technical Skills' },
  certifications: { url: 'certifications.html', label: '🎓 View Certifications' },
  resume: { url: 'resume.html', label: '📄 View Full Resume' },
  contact: { url: '#contact', label: '📧 Contact Information' },
  education: { url: '#', label: '🎓 Education Details' }
};

const knowledge = {
  about: {
    keywords: ['who', 'name', 'introduction', 'yourself','are you', 'background'],
    answer: "I'm Alzahad Nowshad, a Data Analyst based in Dubai, UAE. I graduated with First Class Honours in Computer Systems Engineering from Middlesex University Dubai and received a UAE Golden Visa for academic excellence. I'm passionate about transforming complex data into actionable insights through machine learning and data engineering.",
    links: []
  },
  experience: {
    keywords: ['experience', 'work', 'job', 'career', 'employment', 'position', 'role', 'gama', 'company', 'professional', 'current', 'working'],
    answer: "I'm currently a Data Analyst at GAMA Security Systems in Dubai, leading a government project that processes 30M+ events monthly. I build real-time ETL pipelines using Python, ClickHouse, Apache Kafka, Apache Airflow, and PostgreSQL. I also develop cloud-based WebRTC camera streaming solutions and monitor fire safety systems across client sites.",
    links: ['experience']
  },
  projects: {
    keywords: ['project', 'built', 'developed', 'created', 'portfolio', 'what have you', 'made', 'work on', 'building','tell me about your recent projects'],
    answer: "I've built several impressive projects: (1) Energy Demand Forecasting System achieving 0.10% MAPE with XGBoost and LSTM, (2) LLM-Powered Data Quality Agent with RAG architecture using Groq API and ChromaDB, (3) Cloud-Based WebRTC Camera Streaming infrastructure with 99.8% uptime, and (4) Real-Time Streaming Data Pipeline using Apache Kafka and ClickHouse processing 590+ events with sub-10ms query performance.",
    links: ['projects', 'energy', 'llm', 'webrtc', 'realtime']
  },
  energy: {
    keywords: ['energy', 'forecast', 'forecasting', 'demand', 'mape', 'xgboost', 'lstm', 'prophet', 'arima', 'power', 'electricity', 'pjm', 'prediction','tell me about Energy Demand Forecasting'],
    answer: "My Energy Demand Forecasting System achieved exceptional 0.10% MAPE accuracy using XGBoost on 145,000+ hourly observations from the PJM power grid. This represents a 99% improvement over baseline ARIMA models.",
    links: ['energy']
  },
  llm: {
    keywords: ['llm', 'data quality', 'rag', 'agent', 'groq', 'langchain', 'chromadb', 'language model', 'ai', 'gpt', 'llama'],
    answer: "I built an LLM-Powered Data Quality Agent using Groq's Llama 3.3 70B model with RAG architecture. The system autonomously detects anomalies, validates data integrity, and generates quality reports using ChromaDB for vector storage.",
    links: ['llm']
  },
  webrtc: {
    keywords: ['webrtc', 'camera', 'streaming', 'surveillance', 'video', 'rtsp', 'live', 'turn', 'stun', 'coturn', 'go2rtc'],
    answer: "I architected a cloud-based WebRTC camera streaming system enabling remote access to RTSP cameras without port forwarding. It supports multiple manufacturers (Axis, Dahua, Tiandy, Hikvision) with 99.8% uptime across 20+ sites.",
    links: ['webrtc']
  },
  realtime: {
    keywords: ['real-time', 'realtime', 'streaming', 'kafka', 'clickhouse', 'data pipeline', 'stream processing', 'event streaming', 'docker', 'sentiment analysis', 'apache kafka', 'message queue', 'olap', 'distributed systems','tell me about Real Time'],
    answer: "I built a production-grade real-time streaming data pipeline using Apache Kafka and ClickHouse. The system processes 590+ events with sub-10ms query performance, achieving 100% data integrity and 1 event/second sustained throughput. Deployed using Docker with 4 containerized services for fault-tolerant message delivery and instant analytics.",
    links: ['real-time-streaming']
  },
  skills_python: {
    keywords: ['python', 'pandas', 'numpy', 'scikit', 'tensorflow', 'pytorch', 'programming'],
    answer: "I'm highly proficient in Python with expertise in Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, XGBoost, LangChain, and ChromaDB. I use Python daily for ETL pipelines, predictive modeling, and automation.",
    links: ['skills']
  },
  skills_data: {
    keywords: ['sql', 'database', 'clickhouse', 'postgresql', 'kafka', 'airflow', 'spark', 'etl', 'data engineering'],
    answer: "My data engineering skills include ClickHouse for OLAP analytics, PostgreSQL, Apache Kafka (30M+ events/month), Apache Airflow for orchestration, and Apache Spark for big data processing.",
    links: ['skills']
  },
  skills_ml: {
    keywords: ['machine learning', 'ml', 'ai', 'model', 'algorithm', 'prediction', 'classification'],
    answer: "I specialize in machine learning with XGBoost, LSTM, Prophet, ARIMA for time series; TensorFlow and PyTorch for deep learning; and RAG architecture for LLM applications. My energy forecasting project achieved 0.10% MAPE.",
    links: ['skills', 'projects']
  },
  tech_skills: {
    keywords: ['technical skills', 'all skills', 'skill set', 'technologies', 'tech stack', 'tools', 'what can you do'],
    answer: "My technical expertise spans multiple domains: Programming Languages - Python, SQL, JavaScript; Data Science - Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn; Machine Learning - XGBoost, TensorFlow, PyTorch, LSTM, Prophet, ARIMA, LangChain, ChromaDB; Data Engineering - Apache Kafka (30M+ events/month), Apache Airflow, Apache Spark, ClickHouse, PostgreSQL, ETL pipelines; Web Development - React, Node.js, Express, WebRTC, REST APIs; Cloud & DevOps - Docker, AWS, Linux, nginx, Git; Tools - Jupyter, VS Code, Postman, Qlik Sense. I apply these skills to build production systems, predictive models, and real-time data pipelines.",
    links: ['skills']
  },
  certifications: {
    keywords: ['certification', 'certificate', 'course', 'training', 'cisco', 'pcap', 'credential', 'certified'],
    answer: "I hold 8 professional certifications including Cisco Networking Basics, PCAP Python Programming, Introduction to IoT & Cybersecurity, and job simulations from Accenture, Electronic Arts, AWS, and HPE.",
    links: ['certifications']
  },
  education: {
    keywords: ['education', 'university', 'degree', 'grade', 'study', 'middlesex', 'school', 'graduate', 'golden visa'],
    answer: "I graduated with First Class Honours in BEng Computer Systems Engineering from Middlesex University Dubai (May 2024), earning a UAE Golden Visa for academic excellence. I also completed CBSE with 84% in Grade 10 and 12.",
    links: ['education']
  },
  resume: {
    keywords: ['resume', 'cv', 'download', 'pdf', 'hire', 'recruit'],
    answer: "You can view and download my complete resume with detailed information about my work experience, projects, technical skills, certifications, and education in PDF format.",
    links: ['resume']
  },
  contact: {
    keywords: ['contact', 'email', 'phone', 'reach', 'connect', 'linkedin', 'talk', 'message', 'opportunity'],
    answer: "Reach me at alzahad200@gmail.com or +971 56 580 8407. I'm on LinkedIn at linkedin.com/in/alzahad-nowshad. I'm actively looking for data scientist opportunities in the UAE!",
    links: ['contact']
  },
  default: {
    keywords: [],
    answer: "I'm here to help you learn about my work, skills, and experience! Try asking about my projects, technical skills, work experience, certifications, education, or how to contact me.",
    links: ['projects', 'skills', 'experience']
  }
};

function findAnswer(question) {
  const q = question.toLowerCase().trim();
  let scores = {};
  
  for (const [key, data] of Object.entries(knowledge)) {
    if (key === 'default') continue;
    let score = 0;
    data.keywords.forEach(keyword => {
      const wordRegex = new RegExp(`\\b${keyword}\\b`, 'i');
      if (wordRegex.test(q)) score += 10;
      else if (q.includes(keyword)) score += 3;
    });
    if (score > 0) scores[key] = score;
  }
  
  let bestMatch = 'default';
  let maxScore = 0;
  for (const [key, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      bestMatch = key;
    }
  }
  return knowledge[bestMatch];
}

function createLinkButtons(links) {
  if (!links || links.length === 0) return '';
  const buttons = links.map(key => {
    const link = sectionLinks[key];
    if (!link) return '';
    return `<a href="${link.url}" style="display: inline-block; margin: 0.25rem; padding: 0.5rem 1rem; background: rgba(255, 251, 0, 0.15); border: 1px solid var(--color-accent-magenta); border-radius: var(--radius-md); color: var(--color-accent-magenta); text-decoration: none; font-size: 0.9rem; transition: all 0.3s;" onmouseover="this.style.background='rgba(242, 255, 0, 0.25)'" onmouseout="this.style.background='rgba(255, 238, 0, 0.15)'">${link.label}</a>`;
  }).filter(Boolean).join('');
  return `<div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--glass-border);">${buttons}</div>`;
}

function askQuestion(question) {
  document.getElementById('userQuestion').value = question;
  sendQuestion();
}

function sendQuestion() {
  const input = document.getElementById('userQuestion');
  const question = input.value.trim();
  if (!question) return;
  
  const chatMessages = document.getElementById('chatMessages');
  const suggestedQuestions = document.getElementById('suggestedQuestions');
  chatMessages.style.display = 'block';
  suggestedQuestions.style.display = 'none';
  addMessage(question, 'user');
  input.value = '';
  
  const typingDiv = document.createElement('div');
  typingDiv.className = 'chat-message ai-message';
  typingDiv.id = 'typing';
  typingDiv.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  setTimeout(() => {
    document.getElementById('typing')?.remove();
    const result = findAnswer(question);
    const linkButtons = createLinkButtons(result.links);
    addMessage(result.answer + linkButtons, 'ai');
  }, 600 + Math.random() * 400);
}

function addMessage(text, type) {
  const chatMessages = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${type}-message`;
  messageDiv.innerHTML = `<div class="message-bubble">${text}</div>`;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

console.log('✓ Local chatbot initialized');