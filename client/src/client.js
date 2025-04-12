import { createClient } from '@supabase/supabase-js'

const URL = 'https://wsukotoujsaxdfsyocqa.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzdWtvdG91anNheGRmc3lvY3FhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0Nzg5NDAsImV4cCI6MjA2MDA1NDk0MH0.3ubAvVbrLCAsc_Kj2yilZ41oUWG7kXBQvPRb7omyRu0';

export const supabase = createClient(URL, API_KEY);
