import { Link } from 'wasp/client/router';
import { useAuth } from 'wasp/client/auth';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiBars3 } from 'react-icons/hi2';
import { BiLogIn } from 'react-icons/bi';
import logo from '../static/TEXT-LOGO.svg';
import openSaasBanner from '../static/hero-image.png';
import { features, stats, navigation, faqs, footerNavigation, testimonials } from './contentSections';
import DropdownUser from '../components/DropdownUser';
import { DOCS_URL } from '../../shared/constants';
import { UserMenuItems } from '../components/UserMenuItems';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { data: user, isLoading: isUserLoading } = useAuth();

  const NavLogo = () => <img className='h-15 w-30' src={logo} alt='Your SaaS App' />;

  return (
    <div className='overflow-x-hidden bg-white dark:text-white dark:bg-boxdark-2'>
      {/* Header */}
      <header className='shadow-lg absolute inset-x-0 top-0 z-50 dark:bg-boxdark-2'>
        <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
          <div className='flex items-center lg:flex-1'>
            <a
              href='/'
              className='flex items-center -m-1.5 p-1.5 text-gray-900 duration-300 ease-in-out hover:text-yellow-500'
            >
              <NavLogo />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <HiBars3 className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-medium leading-6 text-gray-900 duration-300 ease-in-out hover:text-raffleleader dark:text-white'
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:align-end'>
            <div className='flex items-center gap-3 2xsm:gap-7'>
              <ul className='flex justify-center items-center gap-2 2xsm:gap-4'>
              </ul>
              {isUserLoading ? null : !user ? (
                <Link to='/login'>
                  <div className='flex justify-end items-center duration-300 ease-in-out text-gray-900 hover:text-raffleleader dark:text-white'>
                    Log in <BiLogIn size='1.1rem' className='ml-1' />
                  </div>
                </Link>
              ) : (
                <DropdownUser user={user} />
              )}
            </div>
          </div>
        </nav>
        <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-boxdark dark:text-white'>
            <div className='flex items-center justify-between'>
              <a href='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your SaaS</span>
                <NavLogo />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-50'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <AiFillCloseCircle className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-boxdark-2'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='py-6'>
                  {isUserLoading ? null : !user ? (
                    <Link to='/login'>
                      <div className='flex justify-start items-center duration-300 ease-in-out text-gray-900 hover:text-yellow-500 dark:text-white'>
                        Log in <BiLogIn size='1.1rem' className='ml-1' />
                      </div>
                    </Link>
                  ) : (
                    <UserMenuItems user={user} />
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <main className='isolate dark:bg-boxdark-2'>
        {/* Hero section */}
        <div className='shado-xl mx-auto max-w-7xl sm:px-6 lg:px-8 relative pt-14 w-full'>
          <div
            className='absolute top-0 right-0 -z-10 transform-gpu overflow-hidden w-full blur-3xl sm:top-0 '
            aria-hidden='true'
          >
            <div
              className='aspect-[1020/880] w-[55rem] flex-none sm:right-1/4 sm:translate-x-1/2 dark:hidden bg-gradient-to-tr from-white to-raffleleader opacity-20'
              style={{
                clipPath: 'polygon(80% 20%, 90% 55%, 50% 100%, 70% 30%, 20% 50%, 50% 0)',
              }}
            />
          </div>
          <div
            className='absolute inset-x-0 top-[calc(100%-40rem)] sm:top-[calc(100%-65rem)] -z-10 transform-gpu overflow-hidden blur-3xl'
            aria-hidden='true'
          >
            <div
              className='relative aspect-[1020/880] sm:-left-3/4 sm:translate-x-1/4 dark:hidden bg-gradient-to-br from-white to-raffleleader  opacity-30 w-[72.1875rem]'
              style={{
                clipPath: 'ellipse(80% 30% at 80% 50%)',
              }}
            />
          </div>
          <div className='py-24 sm:py-32'>
            <div className='mx-auto max-w-8xl px-6 lg:px-8'>
              <div className='lg:mb-18 mx-auto max-w-3xl text-center'>
                <h1 className='font-overpass text-9xl font-medium text-gray-900 sm:text-6xl dark:text-white'>
                  Get leads faster <br>
                  </br>than ever before.
                </h1>
                <p className='mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-600 dark:text-white'>
                  Put your <span className='text-raffleleader'>growth on autopilot</span> with customizable,<br>
                  </br> viral giveaways and contests
                </p>
                <div className='mt-10 flex items-center justify-center gap-x-6'>
                  <a
                    href={DOCS_URL}
                    className='rounded-lg px-17 py-4 text-sm font-semibold bg-raffleleader text-white ring-1 ring-inset ring-gray-200 hover:ring-2 hover:ring-gray-200 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-white'
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <div className='mt-14 flow-root sm:mt-14 '>
                <div className='-m-2 rounded-xl  lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <img
                    src={openSaasBanner}
                    alt='App screenshot'
                    width={2432}
                    height={1442}
                    className='rounded-xl shadow-2xl ring-1 ring-gray-900/10 border-2 border-slate-600'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div id='features' className='mt-12 pt-20 pb-20 bg-gradient-to-b from-raffleleader to-violet-400'>
          {features.map((feature, index) => (
            <div key={feature.name} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-x-8 gap-y-6 sm:gap-x-10 sm:gap-y-14`}>
              {/* Image container */}
              <div className={`border-white border-t-2 border-b-2 flex-1 flex justify-center ${index % 2 === 0 ? 'justify-end border-r-2 rounded-r-2xl -ml-6' : 'justify-start border-l-2 rounded-l-2xl -mr-20'} px-4 py-6`}>
                <img src={feature.img} alt={feature.name} className="w-auto h-auto rounded-lg shadow-lg py-4 shadow-none" />
              </div>
              {/* Text content container */}
              <div className='flex-1 py-60 px-20 flex justify-center items-center'>
                <div className="max-w-sm mx-auto text-left"> {/* Adjust max-w-xl to your preference */}
                  <h2 className="font-overpass text-2xl font-light text-white sm:text-4xl lg:text-5xl pb-4">{feature.name}</h2>
                  <p className="font-overpass text-base font-light text-white sm:text-lg lg:text-xl">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="py-20 mt-10 text-center text-white">
            <h2 className="font-overpass text-5xl font-light mb-8">How It Works</h2>
            <div className="flex justify-center items-stretch mx-auto gap-10" style={{ maxWidth: '1200px' }}>
              <div className="flex flex-col justify-center bg-translucent text-white p-6 rounded-3xl border border-white w-1/3 min-h-[250px] space-y-4">
                <h3 className="text-xl font-semibold">Create Campaign</h3>
                <p>Sign up and create campaigns around your event.</p>
              </div>
              <div className="flex flex-col justify-center bg-translucent text-white p-6 rounded-3xl border border-white w-1/3 min-h-[250px] space-y-4">
                <h3 className="text-xl font-semibold">Share Page & Let Users Predict Date</h3>
                <p>Users sign up and you get new leads.</p>
              </div>
              <div className="flex flex-col justify-center bg-translucent text-white p-6 rounded-3xl border border-white w-1/3 min-h-[250px] space-y-4">
                <h3 className="text-xl font-semibold">Winner Gets Notified Automatically</h3>
                <p>We automatically notify you and winner when event occurs.</p>
              </div>
            </div>
          </div>
        </div>


        {/* Stats section */}
        <div id='stats' className='mx-auto max-w-7xl sm:px-6 lg:px-8 mt-48 max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <p className='mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white'>
              SUPERCHARGED RESULTS
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
              {stats.map((stat) => (
                <div key={stat.name} className='relative p-14 border-black border-2 rounded-3xl'>
                  <dt className='flex justify-center text-base'>
                    <img src={stat.img} alt={stat.name} className="w-auto h-auto rounded-lg shadow-lg py-4 shadow-none" />
                  </dt>
                  <dd className='mt-2 text-base leading-7 text-black'>{stat.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Pricing section */}
        <div className='mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8'>
          <div className='relative sm:left-5 -m-2 rounded-xl bg-yellow-400/20 lg:ring-1 lg:ring-yellow-500/50 lg:-m-4 '>
            <div className='relative sm:top-5 sm:right-5 bg-gray-900 dark:bg-boxdark px-8 py-20 shadow-xl sm:rounded-xl sm:px-10 sm:py-16 md:px-12 lg:px-20'>
              <h2 className='text-left text-xl font-semibold tracking-wide leading-7 text-gray-500 dark:text-white'>
                What Our Users Say
              </h2>
              <div className='relative flex flex-wrap gap-6 w-full mt-6 z-10 justify-between lg:mx-0'>
                {testimonials.map((testimonial) => (
                  <figure className='w-full lg:w-1/4 box-content flex flex-col justify-between p-8 rounded-xl bg-gray-500/5 '>
                    <blockquote className='text-lg text-white sm:text-md sm:leading-8'>
                      <p>{testimonial.quote}</p>
                    </blockquote>
                    <figcaption className='mt-6 text-base text-white'>
                      <a href={testimonial.socialUrl} className='flex items-center gap-x-2'>
                        <img src={testimonial.avatarSrc} className='h-12 w-12 rounded-full' />
                        <div>
                          <div className='font-semibold hover:underline'>{testimonial.name}</div>
                          <div className='mt-1'>{testimonial.role}</div>
                        </div>
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className='mt-32 mx-auto max-w-2xl divide-y divide-gray-900/10 dark:divide-gray-200/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:py-32'>
          <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white'>
            Frequently asked questions
          </h2>
          <dl className='mt-10 space-y-8 divide-y divide-gray-900/10'>
            {faqs.map((faq) => (
              <div key={faq.id} className='pt-8 lg:grid lg:grid-cols-12 lg:gap-8'>
                <dt className='text-base font-semibold leading-7 text-gray-900 lg:col-span-5 dark:text-white'>
                  {faq.question}
                </dt>
                <dd className='flex items-center justify-start gap-2 mt-4 lg:col-span-7 lg:mt-0'>
                  <p className='text-base leading-7 text-gray-600 dark:text-white'>{faq.answer}</p>
                  {faq.href && (
                    <a href={faq.href} className='text-base leading-7 text-yellow-500 hover:text-yellow-600'>
                      Learn more →
                    </a>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>

      {/* Footer */}
      <div className='mx-auto mt-6 max-w-7xl px-6 lg:px-8 dark:bg-boxdark-2'>
        <footer
          aria-labelledby='footer-heading'
          className='relative border-t border-gray-900/10 dark:border-gray-200/10 py-24 sm:mt-32'
        >
          <h2 id='footer-heading' className='sr-only'>
            Footer
          </h2>
          <div className='flex items-start justify-end mt-10 gap-20'>
            <div>
              <h3 className='text-sm font-semibold leading-6 text-gray-900 dark:text-white'>App</h3>
              <ul role='list' className='mt-6 space-y-4'>
                {footerNavigation.app.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className='text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white'>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-semibold leading-6 text-gray-900 dark:text-white'>Company</h3>
              <ul role='list' className='mt-6 space-y-4'>
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className='text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white'>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
