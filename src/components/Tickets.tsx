/* eslint-disable @next/next/no-img-element */
'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import { useRef, useState } from 'react'

import { useSmoothScrollTo } from '~/lib/use-smooth-scroll'

const pricing = {
  frequencies: [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
  ],
  tiers: [
    {
      name: 'General Admission Ticket',
      id: 'ga',
      href: 'https://buy.stripe.com/4gwbMK5fz5K4cbS9AA',
      price: { monthly: '$50', annually: '$50' },
      description: 'Standing room during show.',
      features: ['Cash bar'],
      mostPopular: false,
    },

    {
      name: 'VIP Ticket',
      id: 'vip',
      href: 'https://buy.stripe.com/4gwbMK5fz5K4cbS9AA',
      price: { monthly: '$200', annually: '$200' },
      description: 'First and second row seating (first come first serve)',
      features: [
        // 'First and second row seating (first come first serve)',
        'Free valet parking',
        'VIP seating includes exclusive fig™ swag bag',
        'Ultra-premium open bar and hors d’oeuvres',
      ],
      mostPopular: true,
    },
    {
      name: 'Supporting Sponsor Table',
      id: 'runway-table',
      href: 'https://buy.stripe.com/4gwbMK5fz5K4cbS9AA',
      price: { monthly: '$2,500', annually: '$2,500' },
      description:
        'Seats up to 4 guests at a high top table around the runway.',
      features: [
        'Sponsor’s company logo displayed on the step and repeat, digital media and in event program',
        'Each guest receives an exclusive bag designed by DAME',
        'Free valet parking',
        'Ultra-premium open bar and hors d’oeuvres',
        'Complimentary bottle of Prosecco',
      ],
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
  const ticketsRef = useRef(null)

  return (
    <section
      id="tickets"
      ref={ticketsRef}
      className="mx-auto max-w-[1020px] w-full p-10 flex flex-col gap-y-4 justify-center items-center text-center"
    >
      {/* Pricing section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-y-10 md:gap-y-16">
        <div>
          <h2 className="text-[37px] text-center">
            Fig Fashion Show, Volume 2
          </h2>
          <p>An evening of fashion, art, and culture.</p>
        </div>
        <div className="text-left grid md:grid-cols-2 max-w-4xl mx-auto">
          <div className="flex flex-col gap-y-4">
            <div>
              <h4>Location</h4>
              <p>
                Seneca One Tower, 1 Seneca Drive, <br />
                Buffalo, NY 14203
              </p>
            </div>
            <div>
              <h4>Date</h4>
              <p>September 28, 2024</p>
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <h4>Event Timeline</h4>
            <ul className="list-inside list-disc flex flex-col gap-y-2">
              <li>6 PM Doors Open</li>
              <li>6-8 PM Cocktail Hour featuring Strolling Champagne</li>
              <li>8-9 PM Look by Buffalo Fashion House </li>
              <li>9-11 PM Fashion Show of 13 Cut and Sew Designers</li>
              <li>Afterparty with DJ Cutler and DJ Lisa Lux at Seneca One</li>
            </ul>
          </div>
        </div>

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
                  'text-xl font-semibold leading-8',
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
                  {tier.id !== 'runway-table' && 'ea.'}
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
                Buy Now
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 text-left">
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
