const Pricing = () => {
  const CheckIcon = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='self-start flex-shrink-0 mr-2 h-5 w-5 text-sky-600'
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
      className='self-center flex-shrink-0 mr-2 h-5 w-5 text-gray-500'
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
    <div className='relative w-full py-20 px-5 flex flex-col items-center bg-gradient-to-t from-gray-50 to-sky-500 font-body'>
      {/* :BACKGROUND TOP */}
      <img
        src='https://fancytailwind.com/static/659e19fb14a461d33a54aa2c46757729/bg-Subtle-Prism.svg'
        alt=''
        className='absolute top-0 left-0 w-full h-full opacity-30'
        style={{ clipPath: 'ellipse(67% 46% at 52% 10%)' }}
      />

      {/* :INDIVIDUAL PRICING */}
      <div className='z-10 w-full flex flex-col-reverse lg:flex-row justify-center max-w-7xl'>
        {/* ::Title and actions */}
        <div className='mt-10 lg:mr-5 flex flex-col flex-shrink-0 text-white'>
          {/* Offer name */}
          <span className='text-sm font-light tracking-widest antialiased'>
            Fancy Pricing Table 10
          </span>
          {/* Title */}
          <h2 className='py-5 text-3xl sm:text-5xl leading-snug'>
            Only pay once, own it forever. <br />
            No matter where you go.
          </h2>
          {/* Buttons */}
          <div className='mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 text-center'>
            <a
              href='#link'
              className='mr-8 py-3 px-6 w-full sm:w-auto bg-gray-800 rounded-3xl text-lg tracking-wide font-medium transition-all duration-150 transform hover:bg-gray-700'
            >
              Get your lifetime access
            </a>
            <a
              href='#link'
              className='py-3 px-6 w-full sm:w-auto bg-gray-50 rounded-3xl text-lg text-gray-800 tracking-wide font-medium transition-all duration-150 transform hover:bg-gray-100'
            >
              You are a team ? Contact Us.
            </a>
          </div>
        </div>

        {/* ::Lifetime membership details */}
        <div className='lg:ml-5 py-5 px-4 flex flex-col items-center bg-gray-100 border border-blue-200 shadow-lg rounded-lg text-gray-800'>
          {/* Title */}
          <h3 className='text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-sky-200 to-sky-600'>
            Lifetime membership <br />{' '}
            <span className='text-sm font-normal'>(for individual)</span>
          </h3>
          {/* Price */}
          <p className='py-5 text-6xl font-extrabold'>$289</p>
          {/* What's included */}
          <span className='self-start w-full mt-3 inline-flex items-center text-sm text-sky-600 font-medium uppercase'>
            <span className='flex-shrink-0'>What's included</span>
            <span className='w-full h-px ml-2 bg-gradient-to-l from-sky-200 to-sky-600' />
          </span>
          {/* Features list */}
          <div className='flex flex-col sm:flex-row'>
            <ul className='flex flex-col px-3'>
              <li className='py-2.5 inline-flex'>
                <CheckIcon />
                Member resources
              </li>
              <li className='py-2.5 inline-flex'>
                <CheckIcon />
                Unlimited download
              </li>
              <li className='py-2.5 inline-flex'>
                <CheckIcon />
                Unlimited collections
              </li>
            </ul>
            <ul className='flex flex-col px-3'>
              <li className='py-2.5 inline-flex'>
                <CheckIcon />
                Private forum access
              </li>
              <li className='py-2.5 inline-flex'>
                <CheckIcon />
                24/7 mail support
              </li>
              <li className='py-2.5 inline-flex'>
                <CheckIcon />
                Free access to future updates
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='my-12 w-full h-px bg-sky-500' />

      {/* :TITLE */}
      <div className='mb-16 text-center text-white'>
        <h1 className='font-title py-2 text-5xl font-black tracking-wider antialiased'>
          Fancy Pricing Table 1
        </h1>
        <p className='text-lg'>
          A beautiful and classy pricing table made with Tailwind CSS and love !{' '}
          <br />
          by Fancy Tailwind.
        </p>
      </div>

      {/* :PRICING TABLES */}
      <div className='grid grid-cols-3 gap-6 max-w-7xl'>
        {/* ::Offer 1 */}
        <div className='col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-gray-100 text-gray-600 rounded-2xl shadow-xl'>
          {/* Offer name */}
          <h2 className='font-title mb-1 text-xl font-semibold uppercase tracking-wider'>
            Basic
          </h2>
          {/* Price */}
          <div className='p-4 flex items-baseline'>
            <h3 className='font-title text-5xl font-bold '>$59</h3>
            <span className='ml-2'>/ month</span>
          </div>
          {/* Divide line */}
          <span className='w-28 h-1.5 bg-sky-600 rounded-3xl' />
          {/* Features */}
          <ul className='my-12 flex flex-col'>
            <li className='mb-4 inline-flex'>
              <CheckIcon />
              Donec at tristique.
            </li>
            <li className='mb-4 inline-flex'>
              <CheckIcon />
              Nullam sed aliquam eros, ac.
            </li>
            <li className='mb-4 inline-flex'>
              <CheckIcon />
              Maecenas dignissim convallis sem vel.
            </li>
            <li className='mb-4 inline-flex line-through'>
              <XIcon />
              In rhoncus.
            </li>
            <li className='mb-4 inline-flex line-through'>
              <XIcon />
              Etiam vulputate eleifend.
            </li>
            <li className='mb-4 inline-flex line-through'>
              <XIcon />
              Lorem ipsum dolor.
            </li>
          </ul>
          {/* Subscribe */}
          <button className='py-2 px-10 rounded-3xl bg-sky-500 text-lg text-gray-100 font-medium tracking-wide antialiased shadow-lg transition duration-100 ease-in transform hover:scale-105 hover:bg-sky-600'>
            Subscribe
          </button>
        </div>

        {/* ::Offer 2 */}
        <div className='col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-gray-100 text-gray-600 rounded-2xl shadow-xl'>
          {/* Offer name */}
          <h2 className='font-title mb-1 text-xl font-semibold uppercase tracking-wider'>
            Pro
          </h2>
          {/* Price */}
          <div className='p-4 flex items-baseline'>
            <h3 className='font-title text-5xl font-bold '>$119</h3>
            <span className='ml-2'>/ month</span>
          </div>
          {/* Divide line */}
          <span className='w-28 h-1.5 bg-sky-600 rounded-3xl' />
          {/* Features */}
          <ul className='my-12 flex flex-col'>
            <li className='mb-4 inline-flex'>
              <CheckIcon />
              Donec at tristique.
            </li>
            <li className='mb-4 inline-flex'>
              <CheckIcon />
              Nullam sed aliquam eros, ac.
            </li>
            <li className='mb-4 inline-flex'>
              <CheckIcon />
              Maecenas dignissim convallis sem vel.
            </li>
            <li className='mb-4 inline-flex'>
              <CheckIcon />
              In rhoncus.
            </li>
            <li className='mb-4 inline-flex'>
              <CheckIcon />
              Etiam vulputate eleifend.
            </li>
            <li className='mb-4 inline-flex line-through'>
              <XIcon />
              Lorem ipsum dolor.
            </li>
          </ul>
          {/* Subscribe */}
          <button className='py-2 px-10 rounded-3xl bg-sky-500 text-lg text-gray-100 font-medium tracking-wide antialiased shadow-lg transition duration-100 ease-in transform hover:scale-105 hover:bg-sky-600'>
            Subscribe
          </button>
        </div>

        {/* ::Offer 3 */}
        <div className='col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-gray-100 text-gray-600 rounded-2xl shadow-xl'>
          {/* Offer name */}
          <h2 className='font-title mb-1 text-xl font-semibold uppercase tracking-wider'>
            Enterprise
          </h2>
          {/* Price */}
          <div className='p-4 flex items-baseline'>
            <h3 className='font-title text-5xl font-bold '>$299</h3>
            <span className='ml-2'>/ month</span>
          </div>
          {/* Divide line */}
          <span className='w-28 h-1.5 bg-sky-600 rounded-3xl' />
          {/* Features */}
          <ul className='my-12 flex flex-col'>
            <li className='mb-4 inline-flex'>
              <CheckIcon />
              Donec at tristique.
            </li>
            <li className='mb-4 inline-flex'>
              <CheckIcon />
              Nullam sed aliquam eros, ac.
            </li>
            <li className='mb-4 inline-flex'>
              <CheckIcon />
              Maecenas dignissim convallis sem vel.
            </li>
            <li className='mb-4 inline-flex'>
              <CheckIcon />
              In rhoncus.
            </li>
            <li className='mb-4 inline-flex'>
              <CheckIcon />
              Etiam vulputate eleifend.
            </li>
            <li className='mb-4 inline-flex'>
              <CheckIcon />
              Lorem ipsum dolor.
            </li>
          </ul>
          {/* Subscribe */}
          <button className='py-2 px-10 rounded-3xl bg-sky-500 text-lg text-gray-100 font-medium tracking-wide antialiased shadow-lg transition duration-100 ease-in transform hover:scale-105 hover:bg-sky-600'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
