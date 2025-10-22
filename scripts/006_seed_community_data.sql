-- Seed members data
INSERT INTO public.members (name, sport, class_year, major, interests, profile_photo_url, email) VALUES
('Alex Thompson', 'Football', 'Junior', 'Business Administration', ARRAY['Finance', 'Investment Banking'], '/placeholder.svg?height=200&width=200', 'alex.thompson@unc.edu'),
('Jordan Lee', 'Basketball', 'Sophomore', 'Economics', ARRAY['Consulting', 'Strategy'], '/placeholder.svg?height=200&width=200', 'jordan.lee@unc.edu'),
('Taylor Martinez', 'Soccer', 'Senior', 'Computer Science', ARRAY['Tech', 'Product Management'], '/placeholder.svg?height=200&width=200', 'taylor.martinez@unc.edu'),
('Morgan Davis', 'Track & Field', 'Junior', 'Finance', ARRAY['Private Equity', 'Venture Capital'], '/placeholder.svg?height=200&width=200', 'morgan.davis@unc.edu');

-- Seed alumni data
INSERT INTO public.alumni (name, sport, graduation_year, job_title, company, location, industry, profile_photo_url, linkedin_url) VALUES
('Sarah Mitchell', 'Soccer', 'Class of 2020', 'Investment Banking Analyst', 'Goldman Sachs', 'New York, NY', 'Finance', '/placeholder.svg?height=200&width=200', 'https://linkedin.com/in/sarahmitchell'),
('Marcus Johnson', 'Basketball', 'Class of 2019', 'Product Manager', 'Microsoft', 'Seattle, WA', 'Tech', '/placeholder.svg?height=200&width=200', 'https://linkedin.com/in/marcusjohnson'),
('Emily Chen', 'Track & Field', 'Class of 2021', 'Management Consultant', 'McKinsey & Company', 'Charlotte, NC', 'Consulting', '/placeholder.svg?height=200&width=200', 'https://linkedin.com/in/emilychen'),
('David Rodriguez', 'Football', 'Class of 2018', 'Venture Capital Associate', 'Sequoia Capital', 'San Francisco, CA', 'Venture Capital', '/placeholder.svg?height=200&width=200', 'https://linkedin.com/in/davidrodriguez');

-- Seed partners data
INSERT INTO public.partners (company_name, partnership_type, industry, description, logo_url, website_url) VALUES
('Goldman Sachs', 'Annual Partner', 'Investment Banking', 'Leading global investment banking, securities and investment management firm', '/placeholder.svg?height=100&width=100', 'https://goldmansachs.com'),
('McKinsey & Company', 'Recruiting Partner', 'Management Consulting', 'Global management consulting firm serving leading businesses and institutions', '/placeholder.svg?height=100&width=100', 'https://mckinsey.com'),
('Microsoft', 'Event Sponsor', 'Technology', 'Multinational technology company developing software, hardware, and cloud services', '/placeholder.svg?height=100&width=100', 'https://microsoft.com'),
('Bank of America', 'Annual Partner', 'Financial Services', 'One of the world''s leading financial institutions serving individuals and businesses', '/placeholder.svg?height=100&width=100', 'https://bankofamerica.com');
