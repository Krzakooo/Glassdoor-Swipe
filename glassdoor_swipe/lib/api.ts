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

    {
        id: '2',
        title: 'DevOps Engineer',
        company: 'Tech Corp 2',
        location: 'Los Angeles, CA',
        salary: {
          min: 70000,
          max: 100000,
          currency: 'USD',
        },
        description: 'Looking for a talented DevOps Engineer...',
        requirements: ['AWS', 'GCP', '3+ years experience'],
      },
    // Add more mock jobs...
    {
      id: '3',
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'New York, NY',
      salary: {
        min: 110000,
        max: 150000,
        currency: 'USD',
      },
      description: 'Seeking an experienced Product Manager to lead our flagship product development...',
      requirements: ['5+ years PM experience', 'MBA preferred', 'Strong analytical skills', 'Agile methodology'],
    },
    {
      id: '4',
      title: 'Frontend Developer',
      company: 'Creative Digital',
      location: 'Remote',
      salary: {
        min: 85000,
        max: 130000,
        currency: 'USD',
      },
      description: 'Join our dynamic team building cutting-edge web applications...',
      requirements: ['Vue.js', 'CSS/SCSS', 'JavaScript', 'Performance optimization'],
    }
  ];
}
