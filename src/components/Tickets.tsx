/* eslint-disable @next/next/no-img-element */
'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import { useRef, useState } from 'react'

import { Timeline } from '~/components'

const pricing = {
  frequencies: [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
  ],
  tiers: [
    {
      name: 'General Admission Ticket',
      id: 'ga',
      href: 'https://buy.stripe.com/8wM7wu4bv8WgdfW8wx',
      price: { monthly: '$50', annually: '$50' },
      description: 'Standing room during show.',
      features: ['Cash bar'],
      mostPopular: false,
    },

    {
      name: 'VIP Ticket',
      id: 'vip',
      href: 'https://buy.stripe.com/3csbMK5fza0k1xe6oq',
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
      href: 'https://buy.stripe.com/fZe5om6jDa0k3Fm147',
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-y-4 text-center">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-[37px] text-center">
            Fig Fashion Show, Volume 2
          </h2>
          <p className="max-w-2xl mx-auto">
            An evening of fashion, art, and culture. <br />
            Seneca One Tower, 1 Seneca Drive Buffalo, NY 14203 <br />
            September 28, 2024
          </p>
          <Timeline />
        </div>

        <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-3 lg:max-w-4xl xl:mx-0 xl:max-w-none">
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
    </section>
  )
}
