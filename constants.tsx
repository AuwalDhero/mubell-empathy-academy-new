import { Heart, Brain, Users, Zap, Shield, Sparkles, Building2, Feather } from 'lucide-react';
import { Service, Testimonial, EventItem, Program, MediaItem, AuditSection } from './types';

export const APP_NAME = "Mubell Empathy Academy";

export const SERVICES: Service[] = [
  {
    id: '1-on-1',
    title: '1-on-1 Coaching',
    description: 'Personalized emotional intelligence coaching to help you navigate life’s complexities with clarity and calm.',
    targetAudience: 'Individuals seeking personal growth',
    format: 'Online / In-person',
    icon: Sparkles
  },
  {
    id: 'couples',
    title: 'Couples & Family Coaching',
    description: 'Rebuild trust and deepen connection through shared emotional understanding and effective communication.',
    targetAudience: 'Couples, Families',
    format: 'Online / In-person',
    icon: Heart
  },
  {
    id: 'leadership',
    title: 'Leadership Training',
    description: 'Empower your leadership style with empathy. Learn to lead high-performing teams without burnout.',
    targetAudience: 'Executives, Managers, Founders',
    format: 'Workshops / Seminars',
    icon: Zap
  },
  {
    id: 'parents',
    title: 'Conscious Parenting',
    description: 'Move from reactive to responsive parenting. Understand your triggers and raise emotionally intelligent children.',
    targetAudience: 'Parents, Guardians',
    format: 'Group / Private',
    icon: Shield
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Before working with Musa, my self-esteem was broken. I felt empty, fearful, and unable to express myself. Today, I walk with confidence, speak boldly in front of people, and feel emotionally alive again. I am no longer trapped in negative thoughts—I am free, hopeful, and excited about my future. Musa’s coaching transformed my confidence and emotional wellbeing.",
    author: "Anna",
    role: "Botswana"
  },
  {
    id: 't2',
    quote: "Thank you for your teachings. I’ve gained so much clarity and emotional awareness. Your coaching has opened my eyes, helped me understand myself better, and guided me into real personal growth. I’m becoming a stronger, calmer, and more emotionally intelligent version of myself because of your work.",
    author: "Amadi Gloria",
    role: "Nigeria"
  },
  {
    id: 't3',
    quote: "After going through the master class on emotional intelligence, I can comfortably say that my goals have been achieved. I now have a better understanding of how emotions work and I can help people interprete and understand how to deal with their emotions. With the illustrations learnt during the course, I believe it would be easier for me to manage mine and guide others on how to manage their emotions.",
    author: "Prof Aderinoye",
    role: "Nigeria"
  }
];


export const TRUSTED_BY: string[] = [
"Federal Road Safety Corps (FRSC)",
"National Youth Service Corps",
"Ministry Of Interior",
"Central Emirate International Academy Abuja.", 
"Alfaizun Academy Abuja",
"HENAM synergy Ltd",
"NIRSAL"
];

export const PROGRAMS: Program[] = [
  {
    id: 'ei-mastery',
    title: 'Emotional Intelligence Mastery',
    shortSummary: 'A 12-week deep dive into self-awareness, self-regulation, and relational mastery.',
    description: [
      'This signature program is designed for high-performers ready to bridge the gap between their professional success and personal fulfillment. We use neuro-linguistic programming (NLP) and trauma-informed techniques to rewire your emotional responses.',
      'You will gain precise control over your internal state, allowing you to show up consistently as the calm, confident, and empathetic person you aspire to be in every area of your life.'
    ],
    benefits: [
      'Master self-regulation under pressure',
      'Eliminate the "overthinking loop"',
      'Build deep, conflict-resilient relationships',
      'Develop powerful, empathetic leadership skills'
    ]
  },
  {
    id: 'conscious-parenting',
    title: 'The Conscious Parent Pathway',
    shortSummary: 'Move from reactive to responsive parenting and raise emotionally grounded children.',
    description: [
      'This program helps parents understand their own emotional triggers to create a safe, nurturing environment for their children. It’s about breaking generational trauma cycles and teaching your children emotional literacy by modeling it.',
      'Learn powerful techniques to handle tantrums, navigate adolescence, and foster a lifelong bond built on mutual respect and genuine emotional connection.'
    ],
    benefits: [
      'Identify and manage parental triggers',
      'Teach children emotional literacy (naming feelings)',
      'Reduce conflict and power struggles',
      'Create a home of psychological safety'
    ]
  },
  {
    id: 'couples-connect',
    title: 'The Couples Connection Blueprint',
    shortSummary: 'A program for couples seeking to deepen intimacy and resolve core conflicts with empathy.',
    description: [
      'Relationship success is not about finding the right person, but about developing the right emotional communication skills. This program provides a clear blueprint for navigating differences without resentment.',
      'We focus on active listening, validation, and vulnerability to ensure both partners feel deeply heard, understood, and cherished.'
    ],
    benefits: [
      'Establish healthy, clear communication patterns',
      'Resolve conflicts without emotional damage',
      'Rebuild and deepen trust',
      'Increase emotional and physical intimacy'
    ]
  }
];

export const MEDIA_LINKS: MediaItem[] = [
  {
    id: '1',
    type: 'podcast',
    title: 'The Power of Pausing: A Neuroscience Approach to EI',
    source: 'The Growth Mindset Podcast',
    url: 'https://spotify.com/podcast-link-1'
  },
  {
    id: '2',
    type: 'video',
    title: 'Why High-Performers Struggle with Intimacy',
    source: 'TEDx Talk',
    url: 'https://youtube.com/video-link-2'
  },
  {
    id: '3',
    type: 'article',
    title: 'Emotional Regulation Techniques for the Modern Leader',
    source: 'Forbes',
    url: 'https://forbes.com/article-link-3'
  },
  {
    id: '4',
    type: 'podcast',
    title: 'The Empathy Gap: What AI Can\'t Teach You',
    source: 'Future of Humanity Show',
    url: 'https://applepodcasts.com/podcast-link-4'
  },
];

// --- NEW CONSTANT FOR BLOG CTA ---
export const BLOG_CTA = {
  title: "The Emotional Edge: Deep Dive into Our Latest Insights",
  subtitle: "Don't just live—lead with emotional mastery. Read the blog.",
  link: "https://your-academy-blog-link.com", // *** UPDATE THIS WITH YOUR ACTUAL BLOG LINK ***
  buttonText: "Read the Latest Article",
};

export const AUDIT_SECTIONS: AuditSection[] = [
  {
    id: 'self-awareness',
    title: 'Self-Awareness',
    questions: [
      "Can you identify your specific emotions as you feel them?",
      "Do you understand how your emotions affect your performance?",
      "Are you aware of your personal strengths and limitations?",
      "Do you recognize your emotional triggers?"
    ]
  },
  {
    id: 'self-regulation',
    title: 'Self-Regulation',
    questions: [
      "Can you stay calm under pressure?",
      "Do you think before you act when you are angry?",
      "Can you adapt to changing circumstances without getting overwhelmed?",
      "Do you handle stress in healthy ways?"
    ]
  },
  {
    id: 'motivation',
    title: 'Motivation',
    questions: [
      "Are you driven to achieve beyond external expectations?",
      "Do you persist in the face of setbacks?",
      "Are you optimistic about the future?",
      "Do you seek opportunities to learn and grow?"
    ]
  },
  {
    id: 'empathy',
    title: 'Empathy',
    questions: [
      "Can you sense how others are feeling without them saying it?",
      "Do you take an active interest in others' concerns?",
      "Can you see situations from another person's perspective?",
      "Are you effective at reading group dynamics?"
    ]
  },
  {
    id: 'relationship-skills',
    title: 'Relationship Skills',
    questions: [
      "Are you effective at resolving conflicts?",
      "Can you build and maintain meaningful relationships?",
      "Do you communicate clearly and effectively?",
      "Can you inspire and guide others?"
    ]
  }
];