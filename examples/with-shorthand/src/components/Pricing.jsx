const Pricing = () => {
  const CheckIcon = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='as-s f-s-0 mr-2 h-5 w-5 c-sky-600'
      viewBox='0 0 20 20'
      fill='currentColor'
    >
      <path
        fillRule='evenodd'
        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
        clipRule='evenodd'
      />
    </svg>
  )
  const XIcon = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='as-s f-s-0 mr-2 h-5 w-5 c-gray-500'
      viewBox='0 0 20 20'
      fill='currentColor'
    >
      <path
        fillRule='evenodd'
        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
        clipRule='evenodd'
      />
    </svg>
  )

  return (
    <div className='p-r w-fu py-20 px-5 d-f f-c ai-c bg-gradient-to-t from-gray-50 to-sky-500 font-body'>
      {/* :INDIVIDUAL PRICING */}
      <div className='z-10 w-fu d-f f-cr lg:f-r jc-c max-w-7xl'>
        {/* ::Title and actions */}
        <div className='mt-10 lg:mr-5 d-f f-c flex-shrink-0 c-white'>
          {/* Offer name */}
          <span className='text-sm font-light ls-wst antialiased'>
            Fancy Pricing Table 10
          </span>
          {/* Title */}
          <h2 className='py-5 text-3xl sm:fz-5xl leading-snug'>
            Only pay once, own it forever. <br />
            No matter where you go.
          </h2>
          {/* Buttons */}
          <div className='mt-8 d-f f-c sm:flex-row space-y-3 sm:space-y-0 text-center'>
            <a
              href='#link'
              className='mr-8 py-3 px-6 w-fu sm:w-auto bg-gray-800 bor-3xl fz-lg ls-w font-medium transition-all duration-150 transform h:bg-gray-700'
            >
              Get your lifetime access
            </a>
            <a
              href='#link'
              className='py-3 px-6 w-fu sm:w-auto bg-gray-50 bor-3xl fz-lg c-gray-800 ls-w font-medium transition-all duration-150 transform h:bg-gray-100'
            >
              You are a team ? Contact Us.
            </a>
          </div>
        </div>

        {/* ::Lifetime membership details */}
        <div className='lg:ml-5 py-5 px-4 d-f f-c ai-c bg-gray-100 border border-blue-200 sh-lg bor-lg c-gray-800'>
          {/* Title */}
          <h3 className='text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-sky-200 to-sky-600'>
            Lifetime membership <br />{' '}
            <span className='text-sm font-normal'>(for individual)</span>
          </h3>
          {/* Price */}
          <p className='py-5 text-6xl font-extrabold'>$289</p>
          {/* What's included */}
          <span className='self-start w-fu mt-3 inline-d-f ai-c text-sm text-sky-600 font-medium tt-up'>
            <span className='flex-shrink-0'>What's included</span>
            <span className='w-fu h-px ml-2 bg-gradient-to-l from-sky-200 to-sky-600' />
          </span>
          {/* Features list */}
          <div className='d-f f-c sm:flex-row'>
            <ul className='d-f f-c px-3'>
              <li className='py-2.5 d-if'>
                <CheckIcon />
                Member resources
              </li>
              <li className='py-2.5 d-if'>
                <CheckIcon />
                Unlimited download
              </li>
              <li className='py-2.5 d-if'>
                <CheckIcon />
                Unlimited collections
              </li>
            </ul>
            <ul className='d-f f-c px-3'>
              <li className='py-2.5 d-if'>
                <CheckIcon />
                Private forum access
              </li>
              <li className='py-2.5 d-if'>
                <CheckIcon />
                24/7 mail support
              </li>
              <li className='py-2.5 d-if'>
                <CheckIcon />
                Free access to future updates
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='my-12 w-fu h-px bg-sky-500' />

      {/* :TITLE */}
      <div className='mb-16 text-center c-white'>
        <h1 className='font-title py-2 fz-5xl fw-black ls-ww antialiased'>
          Fancy Pricing Table 1
        </h1>
        <p className='fz-lg'>
          A beautiful and classy pricing table made with Tailwind CSS and love !{' '}
          <br />
          by Fancy Tailwind.
        </p>
      </div>

      {/* :PRICING TABLES */}
      <div className='d-g g-tc-3 gap-6 max-w-7xl'>
        {/* ::Offer 1 */}
        <div className='g-c-3/3 lg:g-c-1/1 my-4 py-9 px-12 d-f f-c ai-c bg-gray-100 c-gray-600 bor-2xl sh-xl'>
          {/* Offer name */}
          <h2 className='font-title mb-1 fz-xl fw-sb tt-up ls-ww'>Basic</h2>
          {/* Price */}
          <div className='p-4 d-f ai-bl'>
            <h3 className='font-title fz-5xl fw-b '>$59</h3>
            <span className='ml-2'>/ month</span>
          </div>
          {/* Divide line */}
          <span className='w-28 h-1.5 bg-sky-600 bor-3xl' />
          {/* Features */}
          <ul className='my-12 d-f f-c'>
            <li className='mb-4 d-if'>
              <CheckIcon />
              Donec at tristique.
            </li>
            <li className='mb-4 d-if'>
              <CheckIcon />
              Nullam sed aliquam eros, ac.
            </li>
            <li className='mb-4 d-if'>
              <CheckIcon />
              Maecenas dignissim convallis sem vel.
            </li>
            <li className='mb-4 inline d-f line-through'>
              <XIcon />
              In rhoncus.
            </li>
            <li className='mb-4 d-f line-through'>
              <XIcon />
              Etiam vulputate eleifend.
            </li>
            <li className='mb-4 d-f line-through'>
              <XIcon />
              Lorem ipsum dolor.
            </li>
          </ul>
          {/* Subscribe */}
          <button className='py-2 px-10 bor-3xl bg-sky-500 fz-lg c-gray-100 f-md ls-w antialiased sh-lg transition du-100 ease-in h:tr-s-105 h:bg-sky-600'>
            Subscribe
          </button>
        </div>

        {/* ::Offer 2 */}
        <div className='g-c-3/3 lg:g-c-1/1 my-4 py-9 px-12 d-f f-c ai-c bg-gray-100 c-gray-600 bor-2xl sh-xl'>
          {/* Offer name */}
          <h2 className='font-title mb-1 fz-xl fw-sb tt-up ls-ww'>Pro</h2>
          {/* Price */}
          <div className='p-4 d-f ai-bl'>
            <h3 className='font-title fz-5xl fw-b'>$119</h3>
            <span className='ml-2'>/ month</span>
          </div>
          {/* Divide line */}
          <span className='w-28 h-1.5 bg-sky-600 bor-3xl' />
          {/* Features */}
          <ul className='my-12 d-f f-c'>
            <li className='mb-4 d-if'>
              <CheckIcon />
              Donec at tristique.
            </li>
            <li className='mb-4 d-if'>
              <CheckIcon />
              Nullam sed aliquam eros, ac.
            </li>
            <li className='mb-4 d-if'>
              <CheckIcon />
              Maecenas dignissim convallis sem vel.
            </li>
            <li className='mb-4 d-if'>
              <CheckIcon />
              In rhoncus.
            </li>
            <li className='mb-4 d-if'>
              <CheckIcon />
              Etiam vulputate eleifend.
            </li>
            <li className='mb-4 d-f line-through'>
              <XIcon />
              Lorem ipsum dolor.
            </li>
          </ul>
          {/* Subscribe */}
          <button className='py-2 px-10 bor-3xl bg-sky-500 fz-lg c-gray-100 f-md ls-w antialiased sh-lg transition du-100 ease-in h:tr-s-105 h:bg-sky-600'>
            Subscribe
          </button>
        </div>

        {/* ::Offer 3 */}
        <div className='g-c-3/3 lg:g-c-1/1 my-4 py-9 px-12 d-f f-c ai-c bg-gray-100 c-gray-600 bor-2xl sh-xl'>
          {/* Offer name */}
          <h2 className='font-title mb-1 fz-xl fw-sb tt-up ls-ww'>
            Enterprise
          </h2>
          {/* Price */}
          <div className='p-4 d-f ai-bl'>
            <h3 className='font-title fz-5xl fw-b '>$299</h3>
            <span className='ml-2'>/ month</span>
          </div>
          {/* Divide line */}
          <span className='w-28 h-1.5 bg-sky-600 bor-3xl' />
          {/* Features */}
          <ul className='my-12 d-f f-c'>
            <li className='mb-4 d-if'>
              <CheckIcon />
              Donec at tristique.
            </li>
            <li className='mb-4 d-if'>
              <CheckIcon />
              Nullam sed aliquam eros, ac.
            </li>
            <li className='mb-4 d-if'>
              <CheckIcon />
              Maecenas dignissim convallis sem vel.
            </li>
            <li className='mb-4 d-if'>
              <CheckIcon />
              In rhoncus.
            </li>
            <li className='mb-4 d-if'>
              <CheckIcon />
              Etiam vulputate eleifend.
            </li>
            <li className='mb-4 d-if'>
              <CheckIcon />
              Lorem ipsum dolor.
            </li>
          </ul>
          {/* Subscribe */}
          <button className='py-2 px-10 bor-3xl bg-sky-500 fz-lg c-gray-100 f-md ls-w antialiased sh-lg transition du-100 ease-in h:tr-s-105 h:bg-sky-600'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
