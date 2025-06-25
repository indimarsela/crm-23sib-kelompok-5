import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ihenctvriefruxfsiekc.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZW5jdHZyaWVmcnV4ZnNpZWtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MzUzNDIsImV4cCI6MjA2NjQxMTM0Mn0.5noY9W7AC4WCM7CsxaPNDJQHRUEo1yccDjyY249vw9I'

export const supabase = createClient(supabaseUrl, supabaseKey)
