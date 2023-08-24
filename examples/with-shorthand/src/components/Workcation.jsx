import beachHouseImg1 from '../assets/images/beach-house-1.jpg'
import beachHouseImg2 from '../assets/images/beach-house-2.jpg'
import beachHouseImg3 from '../assets/images/beach-house-3.jpg'

const Workcation = () => {
  return (
    <div className='py-6 px-4 sm:p-6 md:py-10 md:px-8'>
      <div className='max-w-4xl mx-au d-g g-tc-1 lg:max-w-5xl lg:gap-x-20 lg:g-tc-2'>
        <div className='p-r p-3 g-cs-1 g-rs-1 flex f-cr b-r-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-no sm:g-rs-2 sm:p-0 lg:g-rs-1'>
          <h1 className='mt-1 fz-lg fw-sb c-white sm:c-slate-900 md:fz-2xl dark:sm:c-white'>
            Beach House in Collingwood
          </h1>
          <p className='fz-sm lh-4 fw-md c-white sm:c-slate-500 dark:sm:c-slate-400'>
            Entire house
          </p>
        </div>
        <div className='d-g gap-4 g-cs-1 g-ce-3 g-rs-1 sm:mb-6 sm:g-tc-4 lg:gap-6 lg:g-cs-2 lg:g-re-6 lg:g-r-6/6 lg:mb-0'>
          <img
            src={beachHouseImg1}
            alt=''
            className='w-fu h-60 ob-v bor-lg sm:h-52 sm:g-c-2/2 lg:g-c-fu'
            loading='lazy'
          />
          <img
            src={beachHouseImg2}
            alt=''
            className='d-no w-fu h-52 ob-v bor-lg sm:d-b sm:g-c-2/2 md:g-c-1/1 lg:g-rs-2 lg:g-c-2/2 lg:h-32'
            loading='lazy'
          />
          <img
            src={beachHouseImg3}
            alt=''
            className='d-no w-fu h-52 ob-v bor-lg md:d-b lg:g-rs-2 lg:g-c-2/2 lg:h-32'
            loading='lazy'
          />
        </div>
        <dl className='mt-4 fz-xs fw-md d-f ai-c g-rs-2 sm:mt-1 sm:g-rs-3 md:mt-2.5 lg:g-rs-2'>
          <dt className='sr-only'>Reviews</dt>
          <dd className='c-indigo-600 flex ai-c dark:c-indigo-400'>
            <svg
              width='24'
              height='24'
              fill='none'
              aria-hidden='true'
              className='mr-1 stroke-current dark:stroke-indigo-500'
            >
              <path
                d='m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span>
              4.89 <span className='c-slate-400 fw-nl'>(128)</span>
            </span>
          </dd>
          <dt className='sr-only'>Location</dt>
          <dd className='d-f ai-c'>
            <svg
              width='2'
              height='2'
              aria-hidden='true'
              fill='currentColor'
              className='mx-3 text-slate-300'
            >
              <circle cx='1' cy='1' r='1' />
            </svg>
            <svg
              width='24'
              height='24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mr-1 c-slate-400 dark:c-slate-500'
              aria-hidden='true'
            >
              <path d='M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z' />
              <path d='M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
            </svg>
            Collingwood, Ontario
          </dd>
        </dl>
        <div className='mt-4 g-cs-1 g-rs-3 ai-c sm:mt-0 sm:g-cs-2 sm:g-rs-2 sm:g-r-2/2 lg:mt-6 lg:g-cs-1 lg:g-rs-3 lg:g-re-4'>
          <button
            type='button'
            className='bg-indigo-600 c-white fz-sm lh-6 fw-md py-2 px-3 bor-lg'
          >
            Check availability
          </button>
        </div>
        <p className='mt-4 fz-sm lh-6 g-cs-1 sm:g-c-2/2 lg:mt-6 lg:g-rs-4 lg:g-c-1/1 dark:c-slate-400'>
          This sunny and spacious room is for those traveling light and looking
          for a comfy and cosy place to lay their head for a night or two. This
          beach house sits in a vibrant neighborhood littered with cafes, pubs,
          restaurants and supermarkets and is close to all the major attractions
          such as Edinburgh Castle and Arthur's Seat.
        </p>
      </div>
    </div>
  )
}

export default Workcation
