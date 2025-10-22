-- Seed leadership data
INSERT INTO leadership (name, position, bio, image_url, linkedin, order_position) VALUES
('Sarah Johnson', 'President', 'Former varsity soccer player, Business Administration major. Passionate about helping student-athletes succeed in business.', '/placeholder.svg?height=400&width=400', 'https://linkedin.com/in/sarahjohnson', 1),
('Michael Chen', 'Vice President', 'Track and field athlete, Economics major. Focused on building connections between athletics and entrepreneurship.', '/placeholder.svg?height=400&width=400', 'https://linkedin.com/in/michaelchen', 2),
('Emily Rodriguez', 'Director of Events', 'Volleyball player, Marketing major. Organizing impactful events that bridge sports and business.', '/placeholder.svg?height=400&width=400', 'https://linkedin.com/in/emilyrodriguez', 3),
('James Williams', 'Director of Resources', 'Basketball player, Finance major. Curating resources to help athletes transition to business careers.', '/placeholder.svg?height=400&width=400', 'https://linkedin.com/in/jameswilliams', 4);

-- Seed events data
INSERT INTO events (title, description, event_type, date, time, location, registration_link, image_url) VALUES
('Networking Night with Alumni', 'Connect with successful UNC alumni who transitioned from athletics to business careers. Hear their stories and build your network.', 'networking', '2025-02-15', '18:00:00', 'Kenan-Flagler Business School', 'https://example.com/register', '/placeholder.svg?height=600&width=800'),
('Resume Workshop for Athletes', 'Learn how to translate your athletic achievements into compelling resume content that resonates with employers.', 'workshop', '2025-02-22', '16:00:00', 'Student Union Room 3210', 'https://example.com/register', '/placeholder.svg?height=600&width=800'),
('Guest Speaker: Former NFL Player Turned CEO', 'Hear from Marcus Thompson about his journey from professional football to founding a successful tech startup.', 'speaker', '2025-03-01', '19:00:00', 'Memorial Hall', 'https://example.com/register', '/placeholder.svg?height=600&width=800'),
('Career Fair Prep Session', 'Get ready for upcoming career fairs with tips on networking, elevator pitches, and making lasting impressions.', 'workshop', '2025-03-08', '17:00:00', 'Kenan-Flagler Business School', 'https://example.com/register', '/placeholder.svg?height=600&width=800'),
('Social Mixer: Athletes in Business', 'Casual social event to meet fellow student-athletes interested in business. Food and drinks provided.', 'social', '2025-03-15', '18:30:00', 'Top of Lenoir', 'https://example.com/register', '/placeholder.svg?height=600&width=800'),
('LinkedIn Optimization Workshop', 'Maximize your LinkedIn profile to attract recruiters and build your professional brand online.', 'workshop', '2025-03-22', '16:00:00', 'Davis Library Room 211', 'https://example.com/register', '/placeholder.svg?height=600&width=800');

-- Seed resources data
INSERT INTO resources (title, description, category, resource_type, url) VALUES
('The Athlete''s Guide to Business Careers', 'Comprehensive guide on transitioning from athletics to business, including industry insights and career paths.', 'career', 'document', 'https://example.com/resources/athletes-guide'),
('Time Management for Student-Athletes', 'Video series on balancing academics, athletics, and career preparation effectively.', 'academic', 'video', 'https://example.com/resources/time-management'),
('Mental Health Resources for Athletes', 'Curated list of mental health resources specifically designed for student-athletes.', 'wellness', 'article', 'https://example.com/resources/mental-health'),
('Financial Literacy Toolkit', 'Essential financial planning resources for student-athletes, including budgeting and investment basics.', 'financial', 'document', 'https://example.com/resources/financial-literacy'),
('Networking Strategies for Athletes', 'Learn how to leverage your athletic network for business opportunities and career advancement.', 'networking', 'article', 'https://example.com/resources/networking'),
('Interview Prep for Athletes', 'Common interview questions and how to frame your athletic experience for business roles.', 'career', 'video', 'https://example.com/resources/interview-prep'),
('Building Your Personal Brand', 'Guide to creating a strong personal brand that highlights your unique athlete perspective.', 'career', 'article', 'https://example.com/resources/personal-brand'),
('Stress Management Techniques', 'Practical techniques for managing stress during the transition from athletics to business.', 'wellness', 'video', 'https://example.com/resources/stress-management');
