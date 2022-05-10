import Image from 'next/image'
import { useState } from 'react'

export const AppDoenload = () => {
  const [android, setAndroid] = useState(true)
  return (
    <div className="bg-blue-500 pt-24  text-center font-monster text-white sm:text-left">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1>Download the app today</h1>
            <div className="grid grid-cols-2 space-x-20 px-4">
              <Image
                style={{ marginRight: '10px' }}
                src="/images/letsdo/appStoreBadge.svg"
                width={80}
                height={100}
              />
              <Image
                src="/images/letsdo/googlePlayBadge.svg"
                width={80}
                height={100}
              />
            </div>
          </div>
          <div>
            <Image
              src="/images/letsdo/app-screenshot-en.png"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// import Image from 'next/image'
// import React from 'react'

// export const AppDoenload = () => {
//   return (
//     <div className="mt-16 mb-16 bg-blue-500  font-monster sm:p-0">
//       <div className="container mx-auto pt-10">
//         <h2 className="mb-10 text-center text-xl font-bold uppercase text-white md:text-3xl lg:text-4xl">
//           Let’s do it together
//         </h2>
//         <div className="grid grid-cols-1 text-white sm:pt-10 md:grid-cols-3">
//           <div>
//             <Image
//               src="/images/letsdo/app-screenshot-en.png"
//               width={800}
//               height={800}
//             />
//           </div>
//           <div>
//             <h1>Download the app today</h1>
//             <div className="grid grid-cols-2 space-x-20">
//               <Image
//                 src="/images/letsdo/appStoreBadge.svg"
//                 width={80}
//                 height={100}
//               />
//               <Image
//                 src="/images/letsdo/appStoreBadge.svg"
//                 width={80}
//                 height={100}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
