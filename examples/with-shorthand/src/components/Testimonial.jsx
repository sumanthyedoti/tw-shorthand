const Testimonial = () => {
  return (
    <div>
      <div className='d-f min-h-screen ai-c jc-c bg-neutral-800'>
        <div className='d-g g-tc-1 gap-5 md:g-tc-2 lg:g-tc-3'>
          <div className='group p-r cu-pointer ai-c jc-c ov-h tr-sh h:s-xl h:shadow-black/30'>
            <div className='h-96 w-72'>
              <img
                className='h-fu w-fu ob-v tr-tf du-500 group-hover:rotate-3 group-hover:scale-125'
                src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                alt=''
              />
            </div>
            <div className='p-a inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
            <div className='p-a inset-0 d-f translate-y-[60%] f-c ai-c jc-c px-9 t-c tr-all du-500 group-hover:translate-y-0'>
              <h1 className='font-dmserif fz-3xl fw-b c-white'>Beauty</h1>
              <p className='mb-3 text-lg italic c-white o-0 tr-o du-300 group-hover:o-100'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button className='bor-fu bg-neutral-900 py-2 px-3.5 font-com fz-sm tt-cap c-white sh shadow-black/60'>
                See More
              </button>
            </div>
          </div>
          <div className='group p-r cu-pointer ai-c jc-c ov-h tr-sh h:sh-xl h:shadow-black/30'>
            <div className='h-96 w-72'>
              <img
                className='h-fu w-fu ob-v tr-tf du-500 group-hover:rotate-3 group-hover:scale-125'
                src='https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                alt=''
              />
            </div>
            <div className='p-a inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
            <div className='p-a inset-0 d-f translate-y-[60%] f-c ai-c jc-c px-9 t-c tr-all du-500 group-hover:translate-y-0'>
              <h1 className='font-dmserif fz-3xl fw-bold c-white'>
                Beyond Builder
              </h1>
              <p className='mb-3 fz-lg italic c-white o-0 tr-o du-300 group-hover:o-100'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button className='bor-fu bg-neutral-900 py-2 px-3.5 font-com fz-sm tt-cap c-white sh shadow-black/60'>
                See More
              </button>
            </div>
          </div>
          <div className='group p-r cu-pointer ai-c jc-c ov-h tr-sh h:sh-xl h:shadow-black/30'>
            <div className='h-96 w-72'>
              <img
                className='h-fu w-fu ob-v tr-tf du-500 group-hover:rotate-3 group-hover:scale-125'
                src='https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                alt=''
              />
            </div>
            <div className='p-a inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
            <div className='p-a inset-0 d-f translate-y-[60%] f-c ai-c jc-c px-9 t-c tr-all du-500 group-hover:translate-y-0'>
              <h1 className='font-dmserif fz-3xl fw-b c-white'>
                Shooting Star
              </h1>
              <p className='mb-3 fz-lg italic c-white o-0 tr-o du-300 group-hover:o-fu'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button className='bor-fu bg-neutral-900 py-2 px-3.5 font-com fz-sm tt-cap c-white sh shadow-black/60'>
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed bottom-16'>
        <p className='font-com text-sm font-semibold text-white'>
          All Images are from{' '}
          <a href='https://unsplash.com' className='text-blue-500'>
            Unsplash.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default Testimonial
