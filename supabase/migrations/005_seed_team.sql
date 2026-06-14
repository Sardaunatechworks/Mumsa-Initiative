-- =============================================================
-- MUMSA Initiative — Team Members Seed Data
-- Migration: 005_seed_team.sql
-- Seeds official leadership, board, and staff members
-- =============================================================

INSERT INTO team_members (id, name, role, category, bio, order_index, is_published) VALUES
  -- LEADERSHIP TEAM (category = 'leadership')
  (
    'a1b1c1d1-e1f1-4123-8123-111111111111',
    'Sulaiman Ashiru',
    'Founder & Chief Executive Director',
    'leadership',
    'Sulaiman Ashiru is a development strategist, social entrepreneur, and nonprofit leader with over ten years of experience advancing education, youth development, gender equality, health systems strengthening, climate resilience, TVET, and community-led development. He walks toward an MSc and PGD in Sustainable Social Development, a BSc in Political Science, HND and ND in Social Development (Social Welfare), and a Diploma in Social Administration. As Founder and Chief Executive Director of MUMSA Initiative, he provides strategic leadership, institutional oversight, partnership development, resource mobilization, and organizational growth. Under his leadership, MUMSA Initiative has reached more than 35,000 beneficiaries, supported over 23,000 children to access education, and empowered thousands of young people through employability, entrepreneurship, and skills development programmes. He is a former National Health Fellow and African Civic Engagement Academy Fellow (Georgia, USA), and has received international recognition as a YouthADAPT In-Country Climate Innovation Finalist. He has also participated in the International Anti-Corruption Academy Summer School in Vienna and served as a Mandela Washington Fellowship Application Reader.',
    1,
    true
  ),
  (
    'a1b1c1d1-e1f1-4123-8123-222222222222',
    'Abba Ashiru',
    'Co-Founder & Operations Associate',
    'leadership',
    'Abba Ashiru is a public health and operations management professional with a BSc in Public Health Technology, an NCE in Biochemistry, and professional certification in Project Management. He possesses extensive expertise in organizational operations, programme coordination, compliance management, governance systems, and institutional strengthening. As Operations Associate, he oversees organizational processes, programme implementation, reporting systems, compliance mechanisms, and operational planning to ensure effective and efficient delivery of MUMSA Initiative''s interventions. With over five years of experience supporting development programmes, Abba has played a critical role in strengthening organizational systems, improving operational efficiency, and coordinating multi-sector projects across health, education, youth development, and community engagement. His strong background in public health and project management enables him to bridge programme implementation with institutional excellence, ensuring accountability, quality assurance, and sustainable organizational growth.',
    2,
    true
  ),
  (
    'a1b1c1d1-e1f1-4123-8123-333333333333',
    'Yushau Yahaya',
    'Human Resource Associate',
    'leadership',
    'Yushau Yahaya is a human resource, safeguarding, and community engagement specialist with a Bachelor’s degree in Human Physiology and fellowship training in leadership and governance. He has over five years of experience in healthcare programming, digital health literacy, youth development, SDG advocacy, and community mobilization. His expertise includes workforce management, safeguarding compliance, stakeholder engagement, healthcare outreach coordination, and capacity building for youth and community actors. Throughout his career, Yushau has coordinated large-scale health outreach programmes that improved access to healthcare services for thousands of people in rural and underserved communities. He was nationally recognized as the Best Community Champion in Nigeria by Tracka–BudgIT, ranking first among 1,509 community champions for his outstanding contribution to citizen engagement and accountability. At MUMSA Initiative, he leads human resource systems, staff development, safeguarding implementation, and community engagement strategies that strengthen programme effectiveness and community trust.',
    3,
    true
  ),
  (
    'a1b1c1d1-e1f1-4123-8123-444444444444',
    'Dr. Abdullahi Shehu',
    'Technical Advisor, Vocational Training & Innovation',
    'leadership',
    'Dr. Abdullahi Shehu is an accomplished education technology specialist, researcher, and innovation expert with a PhD in Educational Technology and an MSc in Computer Science. His professional expertise spans technical and vocational education and training (TVET), entrepreneurship development, digital learning systems, workforce development, and innovation ecosystems. He provides strategic technical guidance for MUMSA Initiative''s skills development, employability, entrepreneurship, and digital transformation programmes. Over the years, Dr. Shehu has designed and implemented innovative learning programmes that have empowered thousands of young people with market-relevant skills. He successfully developed and scaled the Fellow Learner Fellowship Programme (FLFP), equipping over 5,000 young people with employability, entrepreneurship, and digital competencies linked to internships and self-employment opportunities. His contributions continue to strengthen pathways for youth employment, digital inclusion, and sustainable livelihoods.',
    4,
    true
  ),
  (
    'a1b1c1d1-e1f1-4123-8123-555555555555',
    'Fatima Muftau',
    'Monitoring, Evaluation, Research & Learning (MERL) Officer',
    'leadership',
    'Fatima Muftau is a Monitoring, Evaluation, Research, and Learning (MERL) specialist with strong academic and professional expertise in psychosocial rehabilitation, data science, programme evaluation, and evidence generation. She holds ND and HND qualifications in Psychosocial Rehabilitation Science and multiple professional certifications in monitoring and evaluation, gender-responsive programming, and data analytics. Her expertise includes impact measurement, research design, accountability systems, learning frameworks, data visualization, and donor reporting. She leads the organization''s monitoring and evaluation systems, ensuring that programmes are guided by evidence, measurable outcomes, and continuous learning. Her work has strengthened organizational data systems supporting more than 35,000 beneficiaries and institutionalized gender-sensitive monitoring frameworks across education, health, climate resilience, and youth empowerment programmes. Her commitment to data-driven decision-making ensures accountability, effectiveness, and sustainable impact across all organizational interventions.',
    5,
    true
  ),
  (
    'a1b1c1d1-e1f1-4123-8123-666666666666',
    'Aminu Umar',
    'Finance & Administration Manager',
    'leadership',
    'Aminu Umar is a social development and financial management professional with advanced academic qualifications in Social Development, Development Studies, and Criminology. With over eight years of experience in humanitarian assistance, community development, project management, and organizational finance, he brings extensive expertise in budgeting, financial planning, grant administration, compliance, and institutional accountability. He oversees financial management systems and administrative functions that support the organization''s operational sustainability. His professional experience includes managing project budgets, supporting donor compliance processes, coordinating financial reporting, and strengthening internal control systems. Aminu plays a central role in ensuring prudent resource management, transparency, and accountability while supporting the successful implementation of development programmes. His expertise contributes significantly to organizational resilience and long-term financial sustainability.',
    6,
    true
  ),
  (
    'a1b1c1d1-e1f1-4123-8123-777777777777',
    'Precious Maro Ekeh',
    'Digital Communications Officer',
    'leadership',
    'Precious Maro Ekeh is a communications and digital engagement specialist with a Bachelor’s degree in Mechatronics and Systems Engineering. She combines technical expertise with strategic communication skills to design and implement effective digital campaigns, advocacy initiatives, branding strategies, and stakeholder engagement activities. Our work focuses on strengthening organizational visibility, public engagement, and donor communication through innovative storytelling and digital outreach. With several years of experience in nonprofit communications and campaign management, Precious has successfully supported awareness campaigns, digital advocacy initiatives, and community mobilization efforts. She manages MUMSA Initiative''s digital platforms, media presence, content development, and donor visibility activities, ensuring that the organization''s impact, achievements, and opportunities are effectively communicated to diverse audiences locally and internationally.',
    7,
    true
  ),

  -- BOARD OF TRUSTEES (category = 'board')
  (
    'b2c2d2e2-f2a2-4123-8123-111111111111',
    'Dr. Sulaiman Ashiru',
    'Chairman of the Board',
    'board',
    'Dr. Sulaiman Ashiru is a social development professional, nonprofit leader, and governance expert with extensive experience in community development, climate resilience, youth leadership, clean energy access, and institutional strengthening. As Chairman of the Board, he provides strategic leadership, oversees governance functions, ensures alignment between organizational strategy and mission, and promotes accountability, transparency, and sustainable growth across all organizational operations. His leadership combines strong academic credentials with practical experience managing community-driven initiatives and multi-sector development programmes. He guides Board decision-making, institutional strategy, partnership development, and organizational sustainability while ensuring that MUMSA Initiative remains responsive to emerging development priorities and community needs.',
    1,
    true
  ),
  (
    'b2c2d2e2-f2a2-4123-8123-222222222222',
    'Mrs. Fatima A. Yahaya',
    'Vice Chairperson & Finance and Audit Lead',
    'board',
    'Mrs. Fatima A. Yahaya is an experienced finance and governance professional with expertise in financial management, accounting, audit systems, donor compliance, and organizational accountability. As Vice Chairperson and Finance and Audit Lead, she provides oversight of financial governance, budgeting, risk management, internal controls, and audit processes. She works closely with management and external auditors to ensure sound financial stewardship, regulatory compliance, and transparency in resource utilization. Her expertise strengthens the organization''s financial sustainability and ensures adherence to international donor and nonprofit accountability standards.',
    2,
    true
  ),
  (
    'b2c2d2e2-f2a2-4123-8123-333333333333',
    'Abba Ashiru',
    'Board Member – Policy and Operations Strategy',
    'board',
    'Abba Ashiru is a public health and operations management professional with extensive experience in institutional systems strengthening, programme operations, policy development, and organizational performance management. As a Board Member, he provides strategic oversight on operational efficiency, organizational policies, risk management, and institutional effectiveness. Drawing from his experience in programme coordination and organizational administration, he supports the Board in reviewing operational performance, strengthening governance systems, and ensuring that implementation approaches remain effective, sustainable, and responsive to community realities.',
    3,
    true
  ),
  (
    'b2c2d2e2-f2a2-4123-8123-444444444444',
    'Fatima Muftau',
    'Board Member – Monitoring, Evaluation and Strategy',
    'board',
    'Fatima Muftau is a Monitoring, Evaluation, Research, and Learning (MERL) specialist with expertise in results-based management, impact measurement, data analytics, strategic planning, and evidence-based decision-making. As a Board Member, she provides governance-level oversight on monitoring and evaluation systems, organizational learning, performance measurement, and strategic planning. Their role ensures that organizational strategies and programmes are informed by reliable evidence, measurable outcomes, and continuous learning. She supports the Board in strengthening accountability systems and promoting data-driven approaches that enhance organizational effectiveness and development impact.',
    4,
    true
  ),
  (
    'b2c2d2e2-f2a2-4123-8123-555555555555',
    'Khadija Adamu',
    'Board Member – Social Inclusion and Partnerships',
    'board',
    'Khadija Adamu is a development practitioner with experience in stakeholder engagement, partnership development, social inclusion, and community-based programming. She supports the Board in strengthening collaborations with government institutions, civil society organizations, private sector actors, and development partners while ensuring that organizational programmes remain inclusive and responsive to vulnerable populations. Her expertise contributes to the development of strategic partnerships that expand organizational reach and impact. She also champions approaches that promote equity, inclusion, and meaningful participation of women, youth, persons with disabilities, and marginalized communities in development processes.',
    5,
    true
  ),
  (
    'b2c2d2e2-f2a2-4123-8123-666666666666',
    'Yushau Yahaya',
    'Board Member – Education, Ethics and Compliance',
    'board',
    'Yushau Yahaya is a governance, safeguarding, and community engagement professional with expertise in ethical leadership, education programming, regulatory compliance, and accountability systems. As a Board Member, he provides oversight on ethics, safeguarding, compliance, and institutional integrity while promoting adherence to organizational values and regulatory standards. He supports the Board in ensuring that all organizational activities are implemented ethically, transparently, and in compliance with safeguarding and protection principles. His contributions strengthen accountability mechanisms and foster a culture of integrity, inclusion, and responsible governance across the organization.',
    6,
    true
  ),
  (
    'b2c2d2e2-f2a2-4123-8123-777777777777',
    'Precious Maro Ekeh',
    'Board Secretary',
    'board',
    'Precious Maro Ekeh serves as Board Secretary and is responsible for governance administration, records management, compliance documentation, and Board coordination. She ensures that Board meetings, resolutions, policies, and governance processes are accurately documented and maintained in accordance with legal and regulatory requirements. Her role supports institutional continuity, transparency, and effective Board operations by maintaining governance records, facilitating communication among Board members, and ensuring that Board decisions and actions are properly documented and implemented.',
    7,
    true
  ),

  -- STAFF TEAM (category = 'staff')
  (
    'c3d3e3f3-a3b3-4123-8123-111111111111',
    'Abba Ashiru',
    'Operations Associate',
    'staff',
    'Operations Associate overseeing daily organization logistics and compliance.',
    1,
    true
  ),
  (
    'c3d3e3f3-a3b3-4123-8123-222222222222',
    'Yushau Yahaya',
    'Human Resource Associate',
    'staff',
    'HR Associate managing workforce recruitment, training, and safeguarding compliance.',
    2,
    true
  ),
  (
    'c3d3e3f3-a3b3-4123-8123-333333333333',
    'Fatima Muftau',
    'Monitoring, Evaluation, Research and Learning (MERL) Officer',
    'staff',
    'MERL Officer leading data analysis, impact metrics, and project outcome tracking.',
    3,
    true
  ),
  (
    'c3d3e3f3-a3b3-4123-8123-444444444444',
    'Precious Maro Ekeh',
    'Digital Communications (Programs)',
    'staff',
    'Digital Communications Officer responsible for campaigns, media, and storytelling.',
    4,
    true
  ),
  (
    'c3d3e3f3-a3b3-4123-8123-555555555555',
    'Aminu Umar',
    'Finance Associate Manager',
    'staff',
    'Finance Associate managing accounts, financial tracking, and audits.',
    5,
    true
  ),
  (
    'c3d3e3f3-a3b3-4123-8123-666666666666',
    'Fatima Abdullahi',
    'Grants and Compliance Manager',
    'staff',
    'Grants Manager overseeing fundraising activities, donor compliance, and allocation.',
    6,
    true
  ),
  (
    'c3d3e3f3-a3b3-4123-8123-777777777777',
    'Aisha Bello',
    'Monitoring, Evaluation and Learning Specialist',
    'staff',
    'MEL Specialist optimizing programmatic reporting and evaluation frameworks.',
    7,
    true
  ),
  (
    'c3d3e3f3-a3b3-4123-8123-888888888888',
    'Bakiru Idris',
    'Communications Officer (Design)',
    'staff',
    'Visual Communications Officer designing outreach materials, branding, and assets.',
    8,
    true
  ),
  (
    'c3d3e3f3-a3b3-4123-8123-999999999999',
    'Fatima Yahaya Abdullahi',
    'Program Officer',
    'staff',
    'Program Officer coordinating project timelines and community integration.',
    9,
    true
  ),
  (
    'c3d3e3f3-a3b3-4123-8123-aaaaaaaaaaaa',
    'Aliyu Salihu',
    'Community Engagement Associate',
    'staff',
    'Community Associate building relationships with local leaders and local structures.',
    10,
    true
  ),
  (
    'c3d3e3f3-a3b3-4123-8123-bbbbbbbbbbbb',
    'Umar Sani',
    'Community Engagement Intern',
    'staff',
    'Supporting field activities, local community events, and data capture.',
    11,
    true
  )
ON CONFLICT (id) DO NOTHING;
