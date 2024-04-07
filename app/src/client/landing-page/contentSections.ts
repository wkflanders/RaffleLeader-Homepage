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
    name: 'Ridiculously Easy',
    description: 'Easily create beautiful giveaways, contests, and sweepstakes, and customize them exatly to your liking.',
    img: signin,
  },
  {
    name: 'Prebuilt No-Code Templates',
    description: 'Get follwers and leads immediately with beautiful templates that fit every need.',
    img: templates,
  },
  {
    name: 'Fully Customizeable',
    description: 'Make your raffles exactly as you like them with our intuitive drag and drop editor.',
    img: editor,
  },
  {
    name: 'Wide Range of Integrations',
    description: 'Whether its social media, emails, or referrals, Raffle Leader has you covered.',
    img: publish,
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
    question: 'Whats a good example FAQ to throw up?',
    answer: 'No idea, ask Stephen.',
    href: DOCS_URL,
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
