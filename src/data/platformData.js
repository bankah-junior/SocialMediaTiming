import { FaInstagram, FaLinkedin, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';

export const platformsData = {
  instagram: {
    platform: 'Instagram',
    icon: FaInstagram,
    color: 'text-pink-600',
    data: {
      bestTimes: [
        { day: 'Morning', times: '10 AM – 1 PM' },
        { day: 'Evening', times: '7 PM – 9 PM' }
      ],
      engagementData: [
        { time: '6AM', engagement: 20 },
        { time: '9AM', engagement: 40 },
        { time: '12PM', engagement: 80 },
        { time: '3PM', engagement: 60 },
        { time: '6PM', engagement: 70 },
        { time: '9PM', engagement: 85 },
        { time: '12AM', engagement: 30 }
      ],
      peakDays: ['Wednesday', 'Thursday', 'Sunday']
    },
    tips: [
      'Post during lunch breaks for maximum engagement',
      'Use Stories during commute hours',
      'Share Reels in the evening'
    ]
  },
  linkedin: {
    platform: 'LinkedIn',
    icon: FaLinkedin,
    color: 'text-blue-700',
    data: {
      bestTimes: [
        { day: 'Morning', times: '7 AM – 10 AM' },
        { day: 'Evening', times: '5 PM – 6 PM' }
      ],
      engagementData: [
        { time: '6AM', engagement: 40 },
        { time: '9AM', engagement: 90 },
        { time: '12PM', engagement: 60 },
        { time: '3PM', engagement: 50 },
        { time: '6PM', engagement: 75 },
        { time: '9PM', engagement: 30 }
      ],
      peakDays: [ 'Tuesday', 'Wednesday', 'Thursday']
    },
    tips: [
      'Focus on business hours',
      'Post thought leadership content midweek',
      'Engage with comments promptly'
    ]
  },
  twitter: {
    platform: 'X (Twitter)',
    icon: FaTwitter,
    color: 'text-blue-400',
    data: {
      bestTimes: [
        { day: 'Morning', times: '9 AM – 12 PM' },
        { day: 'Evening', times: '5 PM – 7 PM' }
      ],
      engagementData: [
        { time: '6AM', engagement: 30 },
        { time: '9AM', engagement: 70 },
        { time: '12PM', engagement: 85 },
        { time: '3PM', engagement: 60 },
        { time: '6PM', engagement: 80 },
        { time: '9PM', engagement: 50 }
      ],
      peakDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    tips: [
      'Tweet during commute hours',
      'Join trending conversations',
      'Use relevant hashtags'
    ]
  },
  tiktok: {
    platform: 'TikTok',
    icon: FaTiktok,
    color: 'text-black',
    data: {
      bestTimes: [
        { day: 'Morning', times: '6 AM – 9 AM' },
        { day: 'Evening', times: '7 PM – 10 PM' }
      ],
      engagementData: [
        { time: '6AM', engagement: 60 },
        { time: '9AM', engagement: 40 },
        { time: '12PM', engagement: 50 },
        { time: '3PM', engagement: 55 },
        { time: '6PM', engagement: 75 },
        { time: '9PM', engagement: 90 }
      ],
      peakDays: ['Tuesday', 'Thursday', 'Saturday']
    },
    tips: [
      'Post when your audience is most active',
      'Participate in trending challenges',
      'Use popular sounds'
    ]
  },
  youtube: {
    platform: 'YouTube',
    icon: FaYoutube,
    color: 'text-red-600',
    data: {
      bestTimes: [
        { day: 'Morning', times: '12 PM – 3 PM' },
        { day: 'Evening', times: '9 AM – 11 AM' }
      ],
      engagementData: [
        { time: '6AM', engagement: 30 },
        { time: '9AM', engagement: 45 },
        { time: '12PM', engagement: 80 },
        { time: '3PM', engagement: 70 },
        { time: '6PM', engagement: 85 },
        { time: '9PM', engagement: 60 }
      ],
      peakDays: ['Thursday', 'Friday', 'Saturday']
    },
    tips: [
      'Schedule uploads before peak viewing times',
      'Optimize for weekend viewing',
      'Use end screens and cards'
    ]
  }
};