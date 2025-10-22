-- Add missing columns to leadership table for comprehensive officer data
ALTER TABLE public.leadership
ADD COLUMN IF NOT EXISTS pillar TEXT,
ADD COLUMN IF NOT EXISTS sport TEXT,
ADD COLUMN IF NOT EXISTS major TEXT,
ADD COLUMN IF NOT EXISTS grad_year TEXT,
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true,
ADD COLUMN IF NOT EXISTS object_position TEXT DEFAULT '50% 42%';

-- Update column names to match requirements
ALTER TABLE public.leadership
RENAME COLUMN position TO position_title;

ALTER TABLE public.leadership
RENAME COLUMN image_url TO headshot_url;

ALTER TABLE public.leadership
RENAME COLUMN linkedin TO linkedin_url;

ALTER TABLE public.leadership
RENAME COLUMN order_position TO order_index;

-- Add comment
COMMENT ON TABLE public.leadership IS 'Leadership team members with pillar assignments and biographical information';
