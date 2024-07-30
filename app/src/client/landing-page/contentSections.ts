import { DOCS_URL, BLOG_URL } from '../../shared/constants';
import { TierIds } from '../../shared/constants';
import templates from '../static/templates.png';
import editor from '../static/editor.png';
import signin from '../static/signin.png';
import publish from '../static/publish.png';
import seventy from '../static/70.png';
import sixtytwo from '../static/62.png';
import thirtyfour from '../static/34.png';
import eight from '../static/08.png';

export const navigation = [
  { name: 'Pricing', href: '/pricing' },
  { name: 'Documentation', href: DOCS_URL },
  { name: 'Blog', href: BLOG_URL },
];
export const features = [
  {
    name: 'Fully Customizable',
    description: 'Make your raffles exactly as you like them with our intuitive drag and drop editor.',
    img: 'https://raffleleader.s3.us-east-2.amazonaws.com/editing.mov',
    backgroundColor: '#1501FE',
  },
  {
    name: 'Prebuilt No-Code Templates',
    description: 'Get follwers and leads immediately with beautiful templates that fit every need.',
    img: 'https://raffleleader.s3.us-east-2.amazonaws.com/template.mov',
    backgroundColor: '#8400ff',
  },
  {
    name: 'Wide Range of Integrations',
    description: 'Whether its social media, emails, or referrals, Raffle Leader has you covered.',
    img: 'https://raffleleader.s3.us-east-2.amazonaws.com/publishing.mov',
    backgroundColor: '#9452ff',
  },
];

export const stats = [
  {
    name: '62',
    description: '62.31% of people share the contest with a friend.',
    img: seventy,
  },
  {
    name: '34',
    description: 'Contests have a conversion rate of 34%, higher than any other content type.',
    img: sixtytwo,
  },
  {
    name: '70',
    description: `Instagram accounts that hold contests grow 70% faster than those that don't.`,
    img: thirtyfour,
  },
  {
    name: '08',
    description: 'Contest emails have a CTR of 8%, 5.5% higher than other emails.',
    img: eight,
  },
];

export const tiers = [
  {
    name: 'YEARLY',
    id: TierIds.YEARLY,
    price: '$97',
    description: '$197',
    features: ['Unlimited Sites', 'Pre-Built Templates', 'Customizeable Giveaways', 'Email and Social Media Integrations', '14-day Money-Back Guarantee'],
  },
  {
    name: 'LIFETIME',
    id: TierIds.LIFETIME,
    price: '$397',
    description: '$497',
    features: ['Unlimited Sites', 'Lifetime Updates', 'Lifetime Support', 'One-Time Payment', 'No Raffle Leader Branding'],
    bestDeal: true,
  },
];

export const faqs = [
  {
    id: 1,
    question: 'Is RaffleLeader right for me?',
    answer: "It doesn't matter if you're a business owner or an influencer, if you want to get leads and grow quickly with viral giveaway marketing, then RaffleLeader is right for you.",
  },
  {
    id: 1,
    question: "What's required to use RaffleLeader?",
    answer: "A self-hosted WordPress site. That's it.",
  },
  {
    id: 1,
    question: "Does RaffleLeader require coding?",
    answer: "No. RaffleLeader is a one-click WordPress plugin. All you need to do to start getting leads is to install the plugin.",
  },
  {
    id: 1,
    question: "Will RaffleLeader slow down my site?",
    answer: "No. We hate slow sites just as much as you do. The last thing we'd do is torture you with one.",
  },
  {
    id: 1,
    question: "Can my clients use RaffleLeader?",
    answer: "Yes. All of our plans can be used with unlimited sites.",
  },
  {
    id: 1,
    question: "Does RaffleLeader work on non-WordPress sites?",
    answer: "No. RaffleLeader is a WordPress plugin, meaning that it only works on self-hosted WordPress sites.",
  },
  {
    id: 1,
    question: "Can I try it out for free?",
    answer: "Yes and no. We don't offer free trials, however, we do offer a 14-day money back guarantee. So, if you don't like RaffleLeader for whatever reason, just let us know in the first 14 days and we'll refund 100% of your money.",
  },
];

export const footerNavigation = {
  app: [
    { name: 'Documentation', href: DOCS_URL },
    { name: 'Blog', href: BLOG_URL },
  ],
  company: [
    { name: 'About', href: 'https://wasp-lang.dev' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};
