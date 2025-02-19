import { Job } from './types';

const API_KEY = process.env.NEXT_PUBLIC_GLASSDOOR_API_KEY;
const BASE_URL = 'https://api.glassdoor.com/api/api.htm';

export async function fetchJobs(page: number = 1): Promise<Job[]> {
  // TODO: Implement actual Glassdoor API integration
  // For now, return mock data
  return [
    {
      id: '1',
      title: 'Software Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      salary: {
        min: 80000,
        max: 120000,
        currency: 'USD',
      },
      description: 'Looking for a talented Software Engineer...',
      requirements: ['React', 'TypeScript', '3+ years experience'],
    },
    // Add more mock jobs...
  ];
}
