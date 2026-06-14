// ============================================================
// MUMSA Initiative — Static Site Content
// Source of truth for seeded/fallback content
// ============================================================

export const SITE = {
  name: 'MUMSA Initiative',
  tagline: 'Empowering Communities for Sustainable Change',
  description:
    'MUMSA Initiative is a youth-led nonprofit organization founded in 2020 to empower women, youth, children, and underserved communities through inclusive education, technical and vocational skills development, healthcare, climate action, digital innovation, and social protection. We design and implement community-driven solutions that address local challenges while contributing to national development priorities, the Sustainable Development Goals (SDGs), the African Union Agenda 2063, and other global development frameworks.',
  email: 'mumsainitiative@gmail.com',
  phone: '+2349061313202',
  address: 'No: 002 Ahmadu Bello Way Ningi, Bauchi State, Nigeria.',
  social: {
    facebook:  'https://web.facebook.com/profile.php?id=100089495294944',
    linkedin:  'https://www.linkedin.com/company/mumsa-initiative/',
    instagram: 'https://www.instagram.com/mumsainitiativeng/',
    twitter:   'https://x.com/MumsaInitiative',
  },
  founded: 2020,
}

export const IMPACT_STATS = [
  { id: 1, value: 35000, suffix: '+', label: 'Beneficiaries Reached', icon: 'Users' },
  { id: 2, value: 23000, suffix: '+', label: 'Children Supported', icon: 'BookOpen' },
  { id: 3, value: 3500,  suffix: '+', label: 'Youth & Women Trained', icon: 'GraduationCap' },
  { id: 4, value: 40,    suffix: '+', label: 'Communities Reached', icon: 'MapPin' },
  { id: 5, value: 25,    suffix: '+', label: 'Strategic Partnerships', icon: 'Handshake' },
  { id: 6, value: 350,   suffix: '+', label: 'Volunteers & Fellows Annually', icon: 'Heart' },
]

export const CORE_VALUES = [
  {
    title: 'Inclusion and Equity',
    description:
      'We promote equal access to opportunities and services for all people regardless of gender, age, disability, background, or circumstance.',
    icon: 'Users',
  },
  {
    title: 'Transparency and Accountability',
    description:
      'We uphold the highest standards of integrity, ethical conduct, responsible stewardship, and accountability to our stakeholders.',
    icon: 'Shield',
  },
  {
    title: 'Community-Led Solutions',
    description:
      'We believe sustainable change happens when communities actively participate in identifying challenges and leading solutions.',
    icon: 'Home',
  },
  {
    title: 'Partnership and Collaboration',
    description:
      'We work with governments, development partners, institutions, and communities to maximize impact and create lasting change.',
    icon: 'Handshake',
  },
  {
    title: 'Innovation and Sustainability',
    description:
      'We embrace creativity, technology, and evidence-based approaches that generate sustainable solutions to development challenges.',
    icon: 'Lightbulb',
  },
]

export const STRATEGIC_GOALS = [
  {
    number: '01',
    title: 'Expand Access to Inclusive and Quality Education',
    description:
      'Support vulnerable children, girls, persons with disabilities, and marginalized youth to access and complete quality education.',
    icon: 'BookOpen',
  },
  {
    number: '02',
    title: 'Advance Skills Development and Employability',
    description:
      'Equip youth and women with technical, vocational, entrepreneurial, and digital skills needed for employment and self-reliance.',
    icon: 'GraduationCap',
  },
  {
    number: '03',
    title: 'Promote Health and Well-Being',
    description:
      'Strengthen community health systems through preventive healthcare, mental health support, rehabilitation services, nutrition, and health education.',
    icon: 'HeartPulse',
  },
  {
    number: '04',
    title: 'Empower Women and Girls',
    description:
      'Increase access to economic opportunities, leadership, healthcare, and protection services while promoting gender equality.',
    icon: 'Star',
  },
  {
    number: '05',
    title: 'Accelerate Digital Inclusion and Innovation',
    description:
      'Leverage technology to improve learning, entrepreneurship, digital safety, and economic participation.',
    icon: 'Monitor',
  },
  {
    number: '06',
    title: 'Strengthen Climate Resilience and Environmental Sustainability',
    description:
      'Promote climate-smart solutions, renewable energy, land restoration, and environmental stewardship.',
    icon: 'Leaf',
  },
  {
    number: '07',
    title: 'Build Stronger Institutions and Partnerships',
    description:
      'Enhance organizational capacity, governance, accountability, and collaboration for greater impact and sustainability.',
    icon: 'Building',
  },
]

export const EXPERTISE_AREAS = [
  {
    title: 'Education and School Reintegration',
    description:
      'Supporting out-of-school children, girls, Almajiri children, and learners with disabilities to access quality education.',
    icon: 'BookOpen',
    color: 'primary',
  },
  {
    title: 'Technical and Vocational Education and Training (TVET)',
    description:
      'Providing practical, market-relevant skills that improve employability and entrepreneurship opportunities.',
    icon: 'Wrench',
    color: 'secondary',
  },
  {
    title: 'Youth Employment and Entrepreneurship',
    description:
      'Preparing young people for decent work, business development, and economic independence.',
    icon: 'TrendingUp',
    color: 'primary',
  },
  {
    title: "Women’s Economic Empowerment",
    description:
      'Promoting financial inclusion, leadership, entrepreneurship, and gender-responsive development.',
    icon: 'Star',
    color: 'secondary',
  },
  {
    title: 'Healthcare and Community Health',
    description:
      'Implementing preventive healthcare, medical outreach, hearing health, rehabilitation, nutrition, and wellness programs.',
    icon: 'HeartPulse',
    color: 'primary',
  },
  {
    title: 'Mental Health and Psychosocial Support',
    description:
      'Strengthening resilience through awareness, support services, and community-based interventions.',
    icon: 'Brain',
    color: 'secondary',
  },
  {
    title: 'Digital Literacy and Safe Technology Use',
    description:
      'Building digital skills and promoting safe, responsible online engagement.',
    icon: 'Monitor',
    color: 'primary',
  },
  {
    title: 'Climate Action and Environmental Sustainability',
    description:
      'Supporting climate adaptation, renewable energy, land restoration, and community resilience initiatives.',
    icon: 'Leaf',
    color: 'secondary',
  },
  {
    title: 'Humanitarian Response and Social Protection',
    description:
      'Providing support to vulnerable populations through community-centered interventions.',
    icon: 'Shield',
    color: 'primary',
  },
  {
    title: 'Research, Monitoring, Evaluation, Accountability and Learning (MEAL)',
    description:
      'Generating evidence, measuring impact, and improving program effectiveness through data-driven approaches.',
    icon: 'BarChart3',
    color: 'secondary',
  },
]

export const PROGRAMS = [
  {
    id: 'education-skills',
    title: 'Education & Skills Development',
    description:
      'Providing access to quality education, digital literacy, and fellowship programs for out-of-school children, girls, and youth.',
    icon: 'BookOpen',
    color: 'primary',
    subprograms: [
      'Bring Back to School Project',
      'Digital Literacy Programs',
      'Fellowship Programs',
    ],
  },
  {
    id: 'health-wellbeing',
    title: 'Health & Wellbeing',
    description:
      'Strengthening community health through primary care, maternal health, mental health awareness, and medical outreach.',
    icon: 'HeartPulse',
    color: 'secondary',
    subprograms: [
      'Primary Healthcare',
      'Maternal and Child Health',
      'Mental Health Awareness',
      'Medical Outreach',
    ],
  },
  {
    id: 'youth-economic-empowerment',
    title: 'Youth Economic Empowerment',
    description:
      'Equipping youth with entrepreneurship, employability, and vocational skills for economic independence.',
    icon: 'TrendingUp',
    color: 'primary',
    subprograms: [
      'Entrepreneurship',
      'Employability',
      'Vocational Training',
    ],
  },
  {
    id: 'women-empowerment',
    title: 'Women Empowerment',
    description:
      'Advancing financial inclusion, leadership development, and gender equality for women and girls.',
    icon: 'Star',
    color: 'secondary',
    subprograms: [
      'Financial Inclusion',
      'Leadership Development',
      'Gender Equality',
    ],
  },
  {
    id: 'human-rights-inclusion',
    title: 'Human Rights & Social Inclusion',
    description:
      'Championing disability inclusion, child protection, and meaningful community engagement.',
    icon: 'Shield',
    color: 'primary',
    subprograms: [
      'Disability Inclusion',
      'Child Protection',
      'Community Engagement',
    ],
  },
  {
    id: 'climate-action',
    title: 'Climate Action & Sustainability',
    description:
      'Promoting climate education, renewable energy, and environmental conservation for resilient communities.',
    icon: 'Leaf',
    color: 'secondary',
    subprograms: [
      'Climate Education',
      'Renewable Energy',
      'Environmental Conservation',
    ],
  },
]

export const THEORY_OF_CHANGE = {
  investments: [
    'Community partnerships',
    'Skilled professionals',
    'Innovation and technology',
    'Strategic collaborations',
    'Evidence-based programming',
  ],
  activities: [
    'Deliver quality education programs',
    'Provide vocational and digital skills training',
    'Improve healthcare access',
    'Advance women’s empowerment',
    'Promote climate resilience',
    'Strengthen digital inclusion',
    'Support youth leadership and entrepreneurship',
  ],
  changes: [
    'Increased school enrollment and retention',
    'Improved employability and income generation',
    'Better health outcomes',
    'Enhanced gender equality',
    'Greater community resilience',
    'Stronger local institutions',
  ],
  impact:
    'Inclusive, resilient, and prosperous communities where women, youth, and children can thrive and contribute to sustainable development.',
}

export const LEADERSHIP_TEAM = [
  {
    id: 1,
    name: 'Sulaiman Ashiru',
    role: 'Founder & Chief Executive Director',
    bio: 'Sulaiman Ashiru is a development strategist, social entrepreneur, and nonprofit leader with over ten years of experience advancing education, youth development, gender equality, health systems strengthening, climate resilience, TVET, and community-led development. He walks toward an MSc and PGD in Sustainable Social Development, a BSc in Political Science, HND and ND in Social Development (Social Welfare), and a Diploma in Social Administration. As Founder and Chief Executive Director of MUMSA Initiative, he provides strategic leadership, institutional oversight, partnership development, resource mobilization, and organizational growth.\n\nUnder his leadership, MUMSA Initiative has reached more than 35,000 beneficiaries, supported over 23,000 children to access education, and empowered thousands of young people through employability, entrepreneurship, and skills development programmes. He is a former National Health Fellow and African Civic Engagement Academy Fellow (Georgia, USA), and has received international recognition as a YouthADAPT In-Country Climate Innovation Finalist. He has also participated in the International Anti-Corruption Academy Summer School in Vienna and served as a Mandela Washington Fellowship Application Reader.',
    category: 'leadership',
  },
  {
    id: 2,
    name: 'Abba Ashiru',
    role: 'Co-Founder & Operations Associate',
    bio: 'Abba Ashiru is a public health and operations management professional with a BSc in Public Health Technology, an NCE in Biochemistry, and professional certification in Project Management. He possesses extensive expertise in organizational operations, programme coordination, compliance management, governance systems, and institutional strengthening. As Operations Associate, he oversees organizational processes, programme implementation, reporting systems, compliance mechanisms, and operational planning to ensure effective and efficient delivery of MUMSA Initiative\'s interventions.\n\nWith over five years of experience supporting development programmes, Abba has played a critical role in strengthening organizational systems, improving operational efficiency, and coordinating multi-sector projects across health, education, youth development, and community engagement. His strong background in public health and project management enables him to bridge programme implementation with institutional excellence, ensuring accountability, quality assurance, and sustainable organizational growth.',
    category: 'leadership',
  },
  {
    id: 3,
    name: 'Yushau Yahaya',
    role: 'Human Resource Associate',
    bio: 'Yushau Yahaya is a human resource, safeguarding, and community engagement specialist with a Bachelor’s degree in Human Physiology and fellowship training in leadership and governance. He has over five years of experience in healthcare programming, digital health literacy, youth development, SDG advocacy, and community mobilization. His expertise includes workforce management, safeguarding compliance, stakeholder engagement, healthcare outreach coordination, and capacity building for youth and community actors.\n\nThroughout his career, Yushau has coordinated large-scale health outreach programmes that improved access to healthcare services for thousands of people in rural and underserved communities. He was nationally recognized as the Best Community Champion in Nigeria by Tracka–BudgIT, ranking first among 1,509 community champions for his outstanding contribution to citizen engagement and accountability. At MUMSA Initiative, he leads human resource systems, staff development, safeguarding implementation, and community engagement strategies that strengthen programme effectiveness and community trust.',
    category: 'leadership',
  },
  {
    id: 4,
    name: 'Dr. Abdullahi Shehu',
    role: 'Technical Advisor, Vocational Training & Innovation',
    bio: 'Dr. Abdullahi Shehu is an accomplished education technology specialist, researcher, and innovation expert with a PhD in Educational Technology and an MSc in Computer Science. His professional expertise spans technical and vocational education and training (TVET), entrepreneurship development, digital learning systems, workforce development, and innovation ecosystems. He provides strategic technical guidance for MUMSA Initiative\'s skills development, employability, entrepreneurship, and digital transformation programmes.\n\nOver the years, Dr. Shehu has designed and implemented innovative learning programmes that have empowered thousands of young people with market-relevant skills. He successfully developed and scaled the Fellow Learner Fellowship Programme (FLFP), equipping over 5,000 young people with employability, entrepreneurship, and digital competencies linked to internships and self-employment opportunities. His contributions continue to strengthen pathways for youth employment, digital inclusion, and sustainable livelihoods.',
    category: 'leadership',
  },
  {
    id: 5,
    name: 'Fatima Muftau',
    role: 'Monitoring, Evaluation, Research & Learning (MERL) Officer',
    bio: 'Fatima Muftau is a Monitoring, Evaluation, Research, and Learning (MERL) specialist with strong academic and professional expertise in psychosocial rehabilitation, data science, programme evaluation, and evidence generation. She holds ND and HND qualifications in Psychosocial Rehabilitation Science and multiple professional certifications in monitoring and evaluation, gender-responsive programming, and data analytics. Her expertise includes impact measurement, research design, accountability systems, learning frameworks, data visualization, and donor reporting.\n\nShe leads the organization\'s monitoring and evaluation systems, ensuring that programmes are guided by evidence, measurable outcomes, and continuous learning. His work has strengthened organizational data systems supporting more than 35,000 beneficiaries and institutionalized gender-sensitive monitoring frameworks across education, health, climate resilience, and youth empowerment programmes. Her commitment to data-driven decision-making ensures accountability, effectiveness, and sustainable impact across all organizational interventions.',
    category: 'leadership',
  },
  {
    id: 6,
    name: 'Aminu Umar',
    role: 'Finance & Administration Manager',
    bio: 'Aminu Umar is a social development and financial management professional with advanced academic qualifications in Social Development, Development Studies, and Criminology. With over eight years of experience in humanitarian assistance, community development, project management, and organizational finance, he brings extensive expertise in budgeting, financial planning, grant administration, compliance, and institutional accountability. He oversees financial management systems and administrative functions that support the organization\'s operational sustainability.\n\nHis professional experience includes managing project budgets, supporting donor compliance processes, coordinating financial reporting, and strengthening internal control systems. Aminu plays a central role in ensuring prudent resource management, transparency, and accountability while supporting the successful implementation of development programmes. His expertise contributes significantly to organizational resilience and long-term financial sustainability.',
    category: 'leadership',
  },
  {
    id: 7,
    name: 'Precious Maro Ekeh',
    role: 'Digital Communications Officer',
    bio: 'Precious Maro Ekeh is a communications and digital engagement specialist with a Bachelor’s degree in Mechatronics and Systems Engineering. She combines technical expertise with strategic communication skills to design and implement effective digital campaigns, advocacy initiatives, branding strategies, and stakeholder engagement activities. Her work focuses on strengthening organizational visibility, public engagement, and donor communication through innovative storytelling and digital outreach.\n\nWith several years of experience in nonprofit communications and campaign management, Precious has successfully supported awareness campaigns, digital advocacy initiatives, and community mobilization efforts. She manages MUMSA Initiative\'s digital platforms, media presence, content development, and donor visibility activities, ensuring that the organization\'s impact, achievements, and opportunities are effectively communicated to diverse audiences locally and internationally.',
    category: 'leadership',
  },
]

export const BOARD_MEMBERS = [
  {
    id: 1,
    name: 'Dr. Sulaiman Ashiru',
    role: 'Chairman of the Board',
    bio: 'Dr. Sulaiman Ashiru is a social development professional, nonprofit leader, and governance expert with extensive experience in community development, climate resilience, youth leadership, clean energy access, and institutional strengthening. As Chairman of the Board, he provides strategic leadership, oversees governance functions, ensures alignment between organizational strategy and mission, and promotes accountability, transparency, and sustainable growth across all organizational operations.\n\nHis leadership combines strong academic credentials with practical experience managing community-driven initiatives and multi-sector development programmes. He guides Board decision-making, institutional strategy, partnership development, and organizational sustainability while ensuring that MUMSA Initiative remains responsive to emerging development priorities and community needs.',
    category: 'board',
  },
  {
    id: 2,
    name: 'Mrs. Fatima A. Yahaya',
    role: 'Vice Chairperson & Finance and Audit Lead',
    bio: 'Mrs. Fatima A. Yahaya is an experienced finance and governance professional with expertise in financial management, accounting, audit systems, donor compliance, and organizational accountability. As Vice Chairperson and Finance and Audit Lead, she provides oversight of financial governance, budgeting, risk management, internal controls, and audit processes.\n\nShe works closely with management and external auditors to ensure sound financial stewardship, regulatory compliance, and transparency in resource utilization. Her expertise strengthens the organization\'s financial sustainability and ensures adherence to international donor and nonprofit accountability standards.',
    category: 'board',
  },
  {
    id: 3,
    name: 'Abba Ashiru',
    role: 'Board Member – Policy and Operations Strategy',
    bio: 'Abba Ashiru is a public health and operations management professional with extensive experience in institutional systems strengthening, programme operations, policy development, and organizational performance management. As a Board Member, he provides strategic oversight on operational efficiency, organizational policies, risk management, and institutional effectiveness.\n\nDrawing from his experience in programme coordination and organizational administration, he supports the Board in reviewing operational performance, strengthening governance systems, and ensuring that implementation approaches remain effective, sustainable, and responsive to community realities.',
    category: 'board',
  },
  {
    id: 4,
    name: 'Fatima Muftau',
    role: 'Board Member – Monitoring, Evaluation and Strategy',
    bio: 'Fatima Muftau is a Monitoring, Evaluation, Research, and Learning (MERL) specialist with expertise in results-based management, impact measurement, data analytics, strategic planning, and evidence-based decision-making. As a Board Member, she provides governance-level oversight on monitoring and evaluation systems, organizational learning, performance measurement, and strategic planning.\n\nHer role ensures that organizational strategies and programmes are informed by reliable evidence, measurable outcomes, and continuous learning. She supports the Board in strengthening accountability systems and promoting data-driven approaches that enhance organizational effectiveness and development impact.',
    category: 'board',
  },
  {
    id: 5,
    name: 'Khadija Adamu',
    role: 'Board Member – Social Inclusion and Partnerships',
    bio: 'Khadija Adamu is a development practitioner with experience in stakeholder engagement, partnership development, social inclusion, and community-based programming. She supports the Board in strengthening collaborations with government institutions, civil society organizations, private sector actors, and development partners while ensuring that organizational programmes remain inclusive and responsive to vulnerable populations.\n\nHer expertise contributes to the development of strategic partnerships that expand organizational reach and impact. She also champions approaches that promote equity, inclusion, and meaningful participation of women, youth, persons with disabilities, and marginalized communities in development processes.',
    category: 'board',
  },
  {
    id: 6,
    name: 'Yushau Yahaya',
    role: 'Board Member – Education, Ethics and Compliance',
    bio: 'Yushau Yahaya is a governance, safeguarding, and community engagement professional with expertise in ethical leadership, education programming, regulatory compliance, and accountability systems. As a Board Member, he provides oversight on ethics, safeguarding, compliance, and institutional integrity while promoting adherence to organizational values and regulatory standards.\n\nHe supports the Board in ensuring that all organizational activities are implemented ethically, transparently, and in compliance with safeguarding and protection principles. His contributions strengthen accountability mechanisms and foster a culture of integrity, inclusion, and responsible governance across the organization.',
    category: 'board',
  },
  {
    id: 7,
    name: 'Precious Maro Ekeh',
    role: 'Board Secretary',
    bio: 'Precious Maro Ekeh serves as Board Secretary and is responsible for governance administration, records management, compliance documentation, and Board coordination. She ensures that Board meetings, resolutions, policies, and governance processes are accurately documented and maintained in accordance with legal and regulatory requirements.\n\nHer role supports institutional continuity, transparency, and effective Board operations by maintaining governance records, facilitating communication among Board members, and ensuring that Board decisions and actions are properly documented and implemented.',
    category: 'board',
  },
]

export const STAFF_MEMBERS = [
  { id: 1,  name: 'Abba Ashiru',            role: 'Operations Associate' },
  { id: 2,  name: 'Yushau Yahaya',           role: 'Human Resource Associate' },
  { id: 3,  name: 'Fatima Muftau',           role: 'Monitoring, Evaluation, Research and Learning (MERL) Officer' },
  { id: 4,  name: 'Precious Maro Ekeh',      role: 'Digital Communications (Programs)' },
  { id: 5,  name: 'Aminu Umar',              role: 'Finance Associate Manager' },
  { id: 6,  name: 'Fatima Abdullahi',        role: 'Grants and Compliance Manager' },
  { id: 7,  name: 'Aisha Bello',             role: 'Monitoring, Evaluation and Learning Specialist' },
  { id: 8,  name: 'Bakiru Idris',            role: 'Communications Officer (Design)' },
  { id: 9,  name: 'Fatima Yahaya Abdullahi', role: 'Program Officer' },
  { id: 10, name: 'Aliyu Salihu',            role: 'Community Engagement Associate' },
  { id: 11, name: 'Umar Sani',               role: 'Community Engagement Intern' },
]

export const VOLUNTEER_ROLES = [
  'Community Mobilizers',
  'Youth Mentors',
  'Health Volunteers',
  'Climate Action Champions',
  'Education Ambassadors',
  'Digital Literacy Facilitators',
  'Research and Data Volunteers',
  'Advocacy and Campaign Volunteers',
]

export const BOARD_COMMITTEES = [
  'Finance and Audit',
  'Monitoring and Evaluation',
  'Legal and Compliance',
  'Innovation and Technology',
  'Operations and Policy Oversight',
]

export const ADVISORY_AREAS = [
  'Education and Skills Development',
  'Public Health and Community Health Systems',
  'Youth Development and Employment',
  'Climate Change and Environmental Sustainability',
  'Digital Innovation and Technology',
  'Gender Equality and Social Inclusion',
  'Monitoring, Evaluation, Research and Learning',
  'Organizational Development and Governance',
]

export const PARTNERSHIP_CATEGORIES = [
  { id: 'gov', label: 'Government Agencies' },
  { id: 'ngo', label: 'NGOs' },
  { id: 'foundations', label: 'Foundations' },
  { id: 'un', label: 'UN Agencies' },
  { id: 'academic', label: 'Academic Institutions' },
  { id: 'private', label: 'Private Sector' },
]

export const GET_INVOLVED_OPTIONS = [
  {
    title: 'Volunteer',
    description: 'Contribute your time and expertise to support our programs and communities.',
    icon: 'Heart',
    href: '/get-involved#volunteer',
  },
  {
    title: 'Internship Opportunities',
    description: 'Gain hands-on experience while contributing to meaningful development work.',
    icon: 'GraduationCap',
    href: '/get-involved#internship',
  },
  {
    title: 'Become a Partner',
    description: 'Collaborate with us to scale impact across communities and regions.',
    icon: 'Handshake',
    href: '/get-involved#partner',
  },
  {
    title: 'Donate',
    description: 'Support our mission with a one-time or recurring contribution.',
    icon: 'DollarSign',
    href: '/donate',
  },
  {
    title: 'Sponsor a Child',
    description: 'Directly fund a child\'s education and future opportunities.',
    icon: 'BookOpen',
    href: '/donate#sponsor',
  },
]

export const POLICIES = [
  { title: 'Governance Structure', type: 'governance' },
  { title: 'Audited Financial Statements', type: 'financial' },
  { title: 'Annual Reports', type: 'financial' },
  { title: 'Child Protection Policy', type: 'safeguarding' },
  { title: 'Safeguarding Policy', type: 'safeguarding' },
  { title: 'PSEA Policy', type: 'safeguarding' },
  { title: 'Anti-Corruption Policy', type: 'safeguarding' },
  { title: 'Sexual Prevention & Protection Policy', type: 'safeguarding' },
  { title: 'Data Protection Policy', type: 'operation' },
  { title: 'Finance and Administration Policy', type: 'operation' },
  { title: 'Human Resource Policy', type: 'operation' },
  { title: 'GESI Policy', type: 'operation' },
  { title: 'Operation and MEL Policy', type: 'operation' },
  { title: 'Procurement Policy', type: 'operation' },
  { title: 'Registration Documents', type: 'governance' },
]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about#story' },
      { label: 'Vision & Mission', href: '/about#vision' },
      { label: 'Core Values', href: '/about#values' },
      { label: 'Why We Exist', href: '/about#why' },
      { label: 'Theory of Change', href: '/about#theory' },
      { label: 'Strategic Goals', href: '/about#goals' },
      { label: 'Areas of Expertise', href: '/about#expertise' },
      { label: 'Our Team', href: '/team' },
    ],
  },
  { label: 'Programs', href: '/programs' },
  { label: 'Projects', href: '/projects' },
  { label: 'Impact', href: '/impact' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Resources', href: '/resources' },
  { label: 'Media', href: '/media' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]
