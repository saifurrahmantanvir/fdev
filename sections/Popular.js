import React from 'react'
import { motion } from 'framer-motion'
import PostCard from 'widgets/PostCard';

const Popular = () => {
   const [width, setWidth] = React.useState(0);
   const carousel = React.useRef();

   React.useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

   }, [])

   return (
      <section className='section'>
         <div className='wrapper'>
            <h2 className='heading'>Popular blogs</h2>
         </div>

         <motion.div
            className='wrapper overflow-hidden p-4 cursor-grab'
            ref={carousel}
            whileTap={{ cursor: 'grabbing' }}
         >
            <motion.div
               className='flex gap-11 md:gap-14 w-max select-none'
               drag="x"
               dragConstraints={{ right: 0, left: -width }}
            >
               {[1, 2, 3, 4]?.map((n, i) => (<PostCard key={i} />))}
            </motion.div>

         </motion.div>
      </section>
   )
}

export default Popular