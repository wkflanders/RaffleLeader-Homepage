import { DOCS_URL, BLOG_URL } from '../../shared/constants';
import templates from '../static/templates.png';
import editor from '../static/editor.png';
import signin from '../static/signin.png';
import publish from '../static/publish.png';
import daBoiAvatar from '../static/da-boi.png';
import seventy from '../static/70.png';
import sixtytwo from '../static/62.png';
import thirtyfour from '../static/34.png';
import eight from '../static/08.png';
import avatarPlaceholder from '../static/avatar-placeholder.png';

export const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Stats', href: '#stats' },
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

export const testimonials = [
  {
    name: 'Da Boi',
    role: 'Wasp Mascot',
    avatarSrc: daBoiAvatar,
    socialUrl: 'https://twitter.com/wasplang',
    quote: "I don't even know how to code. I'm just a plushie.",
  },
  {
    name: 'Mr. Foobar',
    role: 'Founder @ Cool Startup',
    avatarSrc: avatarPlaceholder,
    socialUrl: '',
    quote: 'This product makes me cooler than I already am.',
  },
  {
    name: 'Jamie',
    role: 'Happy Customer',
    avatarSrc: avatarPlaceholder,
    socialUrl: '#',
    quote: 'My cats love it!',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'Whats the meaning of life?',
    answer: '42.',
    href: 'https://en.wikipedia.org/wiki/42_(number)',
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
