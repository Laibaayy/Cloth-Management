
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ansarcdskazhskfiempe.supabase.co'
const supabaseKey =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuc2FyY2Rza2F6aHNrZmllbXBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwNzUxNTYsImV4cCI6MjAzODY1MTE1Nn0.csrF3nvCOiHLpMYQp2eZ9aCw7DGJZykbPC4UdsqSFP8"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
