export interface ServiceDetail {
    slug: string;
    icon: string;
    shortTitle: string;
    shortDescription: string;
    longTitle: string;
    longDescription: string;
    benefits: string[];
    useCases: string[];
}

export const servicesData: ServiceDetail[] = [
    {
        slug: 'ai-strategy-and-consulting',
        icon: '🧭',
        shortTitle: 'AI Strategy & Consulting',
        shortDescription: 'Assess readiness, chart a custom AI roadmap, and forecast ROI before building.',
        longTitle: 'AI Strategy & Consulting: Charting Your Course',
        longDescription: 'Navigating the AI landscape requires more than just adopting new technology; it requires a strategic vision. Our AI Strategy & Consulting services help businesses understand precisely where AI fits into their existing operations before significant investments are made. We conduct deep workflow analyses to uncover automation opportunities that drive real business value.',
        benefits: [
            'Mitigate implementation risks with clear roadmaps',
            'Optimize budget through accurate ROI forecasting',
            'Ensure data readiness and governance compliance'
        ],
        useCases: [
            'AI readiness assessment across departments',
            'Workflow analysis & automation opportunity mapping',
            'AI ROI forecasting and budget planning',
            'Custom 3–12 month AI implementation roadmap',
            'Data infrastructure and security evaluation'
        ]
    },
    {
        slug: 'ai-automation-services',
        icon: '⚡',
        shortTitle: 'AI Automation Services',
        shortDescription: 'Automate repetitive, time-consuming workflows to unlock operational efficiency.',
        longTitle: 'Intelligent AI Automation Services',
        longDescription: 'Free your human workforce from the burden of repetitive, time-consuming tasks. Our AI Automation Services streamline your most critical workflows, allowing your team to focus on high-value, strategic initiatives. By deploying intelligent agents that can read, process, and route information, we significantly reduce turnaround times and operational overhead.',
        benefits: [
            'Drastically reduce manual data entry errors',
            'Accelerate response times for customer inquiries',
            'Lower operational costs through continuous processing'
        ],
        useCases: [
            'Email automation & smart inbound routing',
            'AI customer support triage bots',
            'Conversational lead qualification',
            'Automated invoice and document processing',
            'HR resume screening and candidate matching',
            'Smart IT ticketing and resolution systems'
        ]
    },
    {
        slug: 'custom-ai-chatbots',
        icon: '💬',
        shortTitle: 'Custom AI Chatbots',
        shortDescription: 'Knowledge-aware AI assistants built securely on your company documents.',
        longTitle: 'Custom Knowledge-Aware AI Chatbots',
        longDescription: 'Transform your static company data into an interactive, conversational resource. We build Custom AI Chatbots securely grounded in your proprietary documents, wikis, and databases using advanced RAG (Retrieval-Augmented Generation) techniques. These aren\'t generic bots—they understand your specific business context, policies, and product details to deliver highly accurate, contextual answers.',
        benefits: [
            'Provide instant, 24/7 access to internal knowledge',
            'Reduce training time for new employees',
            'Deflect common support queries with accurate answers'
        ],
        useCases: [
            'Internal employee productivity assistants',
            'Context-aware sales support bots',
            'Policy, HR, and Legal compliance assistants',
            'Customer-facing FAQ and support bots',
            'Interactive employee training and onboarding bots'
        ]
    },
    {
        slug: 'ai-powered-data-intelligence',
        icon: '📊',
        shortTitle: 'AI Data Intelligence',
        shortDescription: 'Turn raw, unstructured data into actionable predictive insights and decisions.',
        longTitle: 'AI-Powered Data Intelligence & Analytics',
        longDescription: 'Stop looking in the rearview mirror. Our AI-Powered Data Intelligence solutions turn raw operational data into predictive, actionable foresight. By applying advanced machine learning models to your historical data, we help you anticipate market shifts, understand customer behavior before they act, and optimize your supply chain dynamically.',
        benefits: [
            'Shift from reactive reporting to proactive strategy',
            'Identify hidden revenue opportunities within existing data',
            'Reduce losses through accurate demand and churn prediction'
        ],
        useCases: [
            'Real-time automated AI dashboards',
            'Predictive analytics for market trends',
            'Advanced sales pipeline forecasting',
            'Customer churn prediction and retention modeling',
            'Dynamic inventory and demand forecasting'
        ]
    },
    {
        slug: 'ai-video-media-automation',
        icon: '🎬',
        shortTitle: 'AI Video & Media Automation',
        shortDescription: 'Generate hyper-realistic video content and automated brand storytelling.',
        longTitle: 'Next-Generation AI Video & Media Automation',
        longDescription: 'Scale your content production exponentially without scaling your budget. Our AI Video & Media Automation services generate stunning, hyper-realistic video assets, brand films, and marketing collateral at a fraction of the traditional cost and time. We create dynamic visual storytelling pipelines that adapt to your audience in real-time.',
        benefits: [
            'Drastically reduce video production costs',
            'Personalize media content at scale',
            'Accelerate time-to-market for visual campaigns'
        ],
        useCases: [
            'AI-generated cinematic brand films',
            'Hyper-realistic digital product showcase videos',
            'Custom AI spokespersons and avatars',
            'Automated, data-driven marketing reels',
            'Impactful political and government storytelling'
        ]
    },
    {
        slug: 'specialized-ai-services',
        icon: '✨',
        shortTitle: 'Specialized AI Services',
        shortDescription: 'Bespoke AI model fine-tuning, edge deployment, and white-label AI products.',
        longTitle: 'Specialized AI Services: Custom-Built Intelligence',
        longDescription: 'Every organization has unique challenges that off-the-shelf solutions cannot address. Our Specialized AI Services offer bespoke AI model fine-tuning, edge deployment for latency-critical applications, and white-label AI product development. We work hand-in-hand with your team to build proprietary AI capabilities that become a lasting competitive moat.',
        benefits: [
            'Build proprietary AI assets tailored to your exact domain',
            'Deploy AI at the edge for ultra-low latency and privacy',
            'Launch white-label AI products under your own brand'
        ],
        useCases: [
            'Custom large language model fine-tuning on proprietary data',
            'Edge AI for IoT, retail kiosks, and autonomous systems',
            'White-label AI chatbot and analytics platforms',
            'Domain-specific computer vision model development',
            'AI-powered internal decision support systems'
        ]
    },
    {
        slug: 'ai-for-sales-and-marketing',
        icon: '🎯',
        shortTitle: 'AI for Sales & Marketing',
        shortDescription: 'Personalize outreach, score leads, and generate high-converting ad copy.',
        longTitle: 'AI-Driven Sales & Marketing Solutions',
        longDescription: 'Precision targeting meets creative scale. We integrate AI directly into your sales and marketing funnels to hyper-personalize customer journeys. From generating compelling, high-converting ad copy variants to dynamically segmenting your audience and scoring leads based on intent signals, our solutions drive higher conversion rates and lower acquisition costs.',
        benefits: [
            'Increase conversion rates through hyper-personalization',
            'Optimize ad spend with AI-generated creative variations',
            'Align sales efforts with high-intent lead scoring'
        ],
        useCases: [
            'Automated AI ad copy & creative generation',
            'Predictive lead scoring & dynamic segmentation',
            'Hyper-personalized cold and nurture email campaigns',
            'Website chatbots with seamless CRM integration'
        ]
    },
    {
        slug: 'ai-infrastructure-cloud-setup',
        icon: '☁️',
        shortTitle: 'AI Infrastructure & Cloud',
        shortDescription: 'Secure, scalable Azure AI setups, vector databases, and CI/CD pipelines.',
        longTitle: 'Enterprise AI Infrastructure & Cloud Setup',
        longDescription: 'A brilliant AI model is useless if it cannot scale reliably. We design and deploy robust, enterprise-grade AI infrastructure tailored for security and performance. Specializing in Microsoft Azure, we set up the foundational architecture required to host advanced models, manage massive vector databases, and deploy updates seamlessly through automated CI/CD pipelines.',
        benefits: [
            'Ensure enterprise-grade security and compliance',
            'Scale AI deployments seamlessly with demand',
            'Accelerate deployment times with automated pipelines'
        ],
        useCases: [
            'Secure Azure AI and OpenAI environment setup',
            'Scalable Vector Database (Vector DB) implementation',
            'Dockerized containerization for AI applications',
            'Streamlined CI/CD pipelines for model deployment',
            'Secure, high-availability API hosting'
        ]
    },
    {
        slug: 'industry-specific-ai-solutions',
        icon: '🏢',
        shortTitle: 'Industry-Specific AI',
        shortDescription: 'Tailored AI solutions for Government, Healthcare, Manufacturing, and more.',
        longTitle: 'Vertical-Focused, Industry-Specific AI Solutions',
        longDescription: 'Generic AI often falls short in specialized environments. We build vertical-specific AI solutions designed to solve the unique challenges of your industry. Whether it is navigating complex government regulations, predicting machine failures on a factory floor, or providing personalized educational tutoring, our models are trained for your specific domain.',
        benefits: [
            'Solve niche, industry-specific operational challenges',
            'Ensure compliance within regulated sectors',
            'Gain a competitive edge with specialized intelligence'
        ],
        useCases: [
            'Government: Citizen grievance bots & scheme explainers',
            'Manufacturing: IoT-driven predictive maintenance',
            'Healthcare: Secure AI triage and patient intake bots',
            'Education: Personalized AI tutors and grading assistants',
            'E-commerce: Advanced hyper-personalized recommendation engines',
            'Agriculture: Yield and crop disease prediction AI'
        ]
    },
    {
        slug: 'ai-training-and-workshops',
        icon: '🎓',
        shortTitle: 'AI Training & Workshops',
        shortDescription: 'Upskill your workforce with corporate AI literacy and prompt engineering.',
        longTitle: 'Corporate AI Training & Workshops',
        longDescription: 'Technology alone cannot drive transformation; your people must understand how to leverage it. Our comprehensive AI Training and Workshops bridge the knowledge gap within your organization. We offer tailored curriculums ranging from high-level strategic alignment for leadership teams to hands-on prompt engineering and tool mastery for day-to-day operators.',
        benefits: [
            'Accelerate company-wide AI adoption and comfort',
            'Empower employees to discover their own AI efficiencies',
            'Align executive leadership on AI strategic vision'
        ],
        useCases: [
            'Comprehensive Core Corporate AI literacy workshops',
            'Strategic AI alignment sessions for Leadership/C-Suite',
            'Hands-on applied Prompt Engineering training',
            'Department-specific AI tool onboarding'
        ]
    },
    {
        slug: 'managed-ai-services',
        icon: '⚙️',
        shortTitle: 'Managed AI Services',
        shortDescription: 'Ongoing monitoring, model updates, and cost optimization for your AI.',
        longTitle: 'Comprehensive Managed AI Services',
        longDescription: 'Deploying an AI solution is day one. Maintaining its accuracy, performance, and cost-efficiency over time requires dedicated expertise. Our Managed AI Services provide ongoing support to ensure your AI assets continue delivering value. We monitor model drift, implement seamless updates, optimize cloud costs, and handle complex data ingestion pipelines so you don\'t have to.',
        benefits: [
            'Prevent model degradation and "hallucinations" over time',
            'Control and optimize ongoing cloud and API costs',
            'Free internal IT teams from complex AI maintenance'
        ],
        useCases: [
            'Continuous AI model fine-tuning and updates',
            'Proactive monitoring & performance optimization',
            'Automated, secure data ingestion pipeline management',
            'API inference cost optimization and load balancing'
        ]
    }
];
