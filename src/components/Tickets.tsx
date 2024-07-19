/* eslint-disable @next/next/no-img-element */
'use client'

import { Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const pricing = {
  frequencies: [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
  ],
  tiers: [
    {
      name: 'General Admission',
      id: 'ga',
      href: 'https://buy.stripe.com/4gwbMK5fz5K4cbS9AA',
      price: { monthly: '$50', annually: '$50' },
      description: 'Lorem ipsum dolor sit amet consectetur.',
      features: ['.', '..', '...'],
      mostPopular: false,
    },
    {
      name: 'VIP',
      id: 'vip',
      href: 'https://buy.stripe.com/4gwbMK5fz5K4cbS9AA',
      price: { monthly: '$200', annually: '$200' },
      description: 'Lorem ipsum dolor sit amet consectetur.',
      features: ['.', '..', '...', '....'],
      mostPopular: true,
    },
    {
      name: 'Runway Table (4 guests)',
      id: 'runway-table',
      href: 'https://buy.stripe.com/4gwbMK5fz5K4cbS9AA',
      price: { monthly: '$2,500', annually: '$2,500' },
      description: 'For Supporting Sponsors. Lorem ipsum dolor',
      features: ['.', '..', '...', '....', '.....'],
      mostPopular: false,
    },
    // {
    //   name: 'Enterprise',
    //   id: 'tier-enterprise',
    //   href: '#',
    //   price: { monthly: '$90', annually: '$864' },
    //   description: 'Dedicated support and infrastructure for your company.',
    //   features: [
    //     'Unlimited products',
    //     'Unlimited subscribers',
    //     'Advanced analytics',
    //     '1-hour, dedicated support response time',
    //     'Marketing automations',
    //     'Custom reporting tools',
    //   ],
    //   mostPopular: false,
    // },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tickets() {
  const [frequency, setFrequency] = useState(pricing.frequencies[0])

  return (
    <section className="mx-auto max-w-[1020px] w-full p-10 flex flex-col gap-y-4 justify-center items-center text-center">
      {/* Pricing section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[37px]">Upcoming Events</h2>
        </div>
        <p className="mx-auto mt-4 max-w-lg text-center">
          An evening of fashion, art, and culture. Join us for the Fig Fashion
          Show, Volume 2, on{' '}
          <span className="text-rose">September 28, 2024</span>.
        </p>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-3 lg:max-w-4xl xl:mx-0 xl:max-w-none">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-rose' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8',
              )}
            >
              <h2
                id={tier.id}
                className={classNames(
                  tier.mostPopular ? 'text-rose' : 'text-gray-900',
                  'text-lg font-semibold leading-8',
                )}
              >
                {tier.name}
              </h2>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price[frequency.value]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  {/* {frequency.priceSuffix} */}
                  per ticket
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-rose text-white shadow-sm hover:accent'
                    : 'text-rose ring-1 ring-inset ring-gray-200 hover:ring-accept',
                  'mt-6 block rounded-md px-3 py-2 text-center text-2xl vaneer uppercase leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose',
                )}
              >
                Buy tickets
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-rose"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Logo cloud */}
      {/* <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Tuple"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="SavvyCal"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Statamic"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
            <span className="hidden md:inline">
              Transistor saves up to $40,000 per year, per employee by working
              with us.
            </span>
            <a href="#" className="font-semibold text-indigo-600">
              <span aria-hidden="true" className="absolute inset-0" /> See our
              case study <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </div> */}
    </section>
  )
}
