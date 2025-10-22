-- Clear existing leadership data
TRUNCATE TABLE public.leadership;

-- Insert current leadership team
INSERT INTO public.leadership (
  name,
  position_title,
  pillar,
  sport,
  major,
  grad_year,
  bio,
  headshot_url,
  linkedin_url,
  order_index,
  is_active,
  object_position
) VALUES
(
  'Joey Showalter',
  'Co-Chief Executive Officer',
  'Executives',
  'Wrestling',
  'BA Economics',
  'Senior',
  'Co-founder driving strategy, partnerships, and member growth.',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Joey_Showalter-I6P2HW6STFMvjpDchrOoZyXKaJFSew.jpeg',
  'https://www.linkedin.com/in/joeyshowalter/',
  1,
  true,
  '50% 42%'
),
(
  'Ethan Oakley',
  'Co-Chief Executive Officer',
  'Executives',
  'Wrestling',
  'Business Management',
  'Grad',
  'Co-founder leading execution, programming, and campus outreach.',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ethan_Oakley-zNXZKPjQTMVTBNQMKlpY6gvvflp8NG.jpeg',
  'https://www.linkedin.com/in/ethanoakley',
  2,
  true,
  '50% 42%'
),
(
  'Gracie Bolick',
  'Chief Operations Officer',
  'Operations',
  'Track & Field (Throws)',
  'BS Business Administration',
  'Senior',
  'Runs day-to-day operations—events, logistics, and member experience.',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gracie_Bolick-EmRkFlBnOOSDDrAYr9jSKjLoiMCQBP.png',
  'https://www.linkedin.com/in/graciebolick/',
  3,
  true,
  '50% 45%'
),
(
  'Ethan Richter',
  'Chief Marketing Officer',
  'Marketing',
  'Track & Field (Throws)',
  'Masters of Applied Professional Studies',
  'Grad',
  'Owns brand, content, and digital presence for AIB.',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ethan_Ritcher-R5tTPE8F4RaF5vlJvbaJCzDNAgHd4k.png',
  'https://www.linkedin.com/in/ethanrichter/',
  4,
  true,
  '50% 40%'
),
(
  'Luke Arrighi',
  'Chief Financial Officer',
  'Finance',
  'Lacrosse',
  'BSBA',
  'Sophomore',
  'Manages budgets, sponsorships, and financial planning.',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Luke_Arrighi.png-BVVP5mFuigftdtFqCT9HGsippP67PA.jpeg',
  'https://www.linkedin.com/in/lukearrighi/',
  5,
  true,
  '50% 42%'
),
(
  'Sabino Portella',
  'Chief Relations Officer',
  'Relations',
  'Wrestling',
  'BA Sport Administration',
  'Junior',
  'Builds alumni relationships and the mentor network.',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sabino_Portella-fKjir0Uq1tZgbnkNrMho9vdbfh2DpK.jpeg',
  'https://www.linkedin.com/in/sabino-portella/',
  6,
  true,
  '50% 42%'
);
