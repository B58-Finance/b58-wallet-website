import { defineMessages } from 'react-intl'
import f from "../lib/translate";

const messages = defineMessages({
  featuresTitle: {
    id: 'features.title',
    defaultMessage: 'Never has DeFi been so easy'
  },
  featuresAccessibleTitle: {
    id: 'features.accessible.title',
    defaultMessage: 'Accessible'
  },
  featuresInnovativeTitle: {
    id: 'features.innovative.title',
    defaultMessage: 'Innovative'
  },
  featuresSecureTitle: {
    id: 'features.secure.title',
    defaultMessage: 'Secure'
  },
  featuresAccessible: {
    id: 'features.accessible',
    defaultMessage: 'B58 Wallet is built for everyone, whether you\'re an expert or a beginner'
  },
  featuresInnovative: {
    id: 'features.innovative',
    defaultMessage: 'Features included in B58 Wallet are innovative and intuitive'
  },
  featuresSecure: {
    id: 'features.secure',
    defaultMessage: 'B58 Wallet is built for everyone, whether you\'re an expert or a beginner'
  },
})

const Features = () => {

  return (
    <section id="features" className="pt-10 -mt-10 lg:pt-20 lg:-mt-20">
      <div className="lg:mt-6">
        <div className="flex flex-wrap justify-center content-center p-6">
          <h1 className="text-3xl lg:text-6xl font-medium leading-tight">
            {f(messages.featuresTitle)}
          </h1>
        </div>
      </div>
      <div className="p-6 lg:mt-6 flex flex-wrap justify-center">
        <div className='p-6 m-6 text-center dark:bg-blue-over light:bg-gray-400 rounded-2xl w-56 h-56'>
          <svg className='inline-block h-10 mb-2' viewBox="0 0 41 46" fill="none" stroke='currentcolor' xmlns="http://www.w3.org/2000/svg">
            <path d="M20.4999 23.1804C26.3487 23.1804 31.0901 18.439 31.0901 12.5902C31.0901 6.74139 26.3487 2 20.4999 2C14.6511 2 9.90967 6.74139 9.90967 12.5902C9.90967 18.439 14.6511 23.1804 20.4999 23.1804Z" strokeWidth="3"/>
            <path d="M31.0901 27.4165H31.8356C33.3841 27.4169 34.8791 27.9828 36.0398 29.0077C37.2004 30.0327 37.9469 31.4462 38.1389 32.9827L38.9671 39.5995C39.0415 40.1955 38.9884 40.8006 38.8112 41.3746C38.6339 41.9486 38.3366 42.4783 37.939 42.9286C37.5414 43.3789 37.0526 43.7395 36.505 43.9864C35.9573 44.2333 35.3635 44.3609 34.7628 44.3608H6.237C5.63629 44.3609 5.04241 44.2333 4.4948 43.9864C3.94718 43.7395 3.45835 43.3789 3.06074 42.9286C2.66313 42.4783 2.36583 41.9486 2.18859 41.3746C2.01135 40.8006 1.9582 40.1955 2.03269 39.5995L2.85873 32.9827C3.05083 31.4455 3.7979 30.0314 4.95947 29.0063C6.12103 27.9813 7.61707 27.4159 9.16625 27.4165H9.90968" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h2 className='font-bold'>{f(messages.featuresAccessibleTitle)}</h2>
          <p>{f(messages.featuresAccessible)}</p>
        </div>
        <div className='p-6 m-6 text-center dark:bg-blue-over light:bg-gray-400 rounded-2xl w-56 h-56'>
          <svg className='inline-block h-10 mb-2' viewBox="0 0 45 45" fill="none" stroke='currentcolor' xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 41.25H26.25H18.75ZM9.375 16.875C9.375 13.394 10.7578 10.0556 13.2192 7.59422C15.6806 5.13281 19.019 3.75 22.5 3.75C25.981 3.75 29.3194 5.13281 31.7808 7.59422C34.2422 10.0556 35.625 13.394 35.625 16.875C35.6262 18.9883 35.1151 21.0703 34.1355 22.9428C33.1558 24.8153 31.7368 26.4223 30 27.6263L28.9838 32.4375C28.8492 33.3243 28.4013 34.1335 27.7211 34.7184C27.041 35.3032 26.1738 35.6248 25.2769 35.625H19.7231C18.8262 35.6248 17.959 35.3032 17.2789 34.7184C16.5988 34.1335 16.1508 33.3243 16.0163 32.4375L15 27.6469C13.2626 26.4387 11.8436 24.8279 10.864 22.952C9.8845 21.0762 9.37361 18.9912 9.375 16.875V16.875Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 28.125H30" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <h2 className='font-bold'>{f(messages.featuresInnovativeTitle)}</h2>
          <p>{f(messages.featuresInnovative)}</p>
        </div>
        <div className='p-6 m-6 text-center dark:bg-blue-over light:bg-gray-400 rounded-2xl w-56 h-56'>
          <svg className='inline-block h-10 mb-2' viewBox="0 0 37 37" fill="none" stroke='currentcolor' xmlns="http://www.w3.org/2000/svg">
            <path d="M29.2917 15.4166H7.70833C6.00546 15.4166 4.625 16.7971 4.625 18.5V30.8333C4.625 32.5362 6.00546 33.9166 7.70833 33.9166H29.2917C30.9945 33.9166 32.375 32.5362 32.375 30.8333V18.5C32.375 16.7971 30.9945 15.4166 29.2917 15.4166Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.25 15.4166V7.70831C9.25 6.48169 9.73728 5.3053 10.6046 4.43794C11.472 3.57059 12.6484 3.08331 13.875 3.08331H23.125C24.3516 3.08331 25.528 3.57059 26.3954 4.43794C27.2627 5.3053 27.75 6.48169 27.75 7.70831V9.24998" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <h2 className='font-bold'>{f(messages.featuresSecureTitle)}</h2>
          <p>{f(messages.featuresSecure)}</p>
        </div>
      </div>
    </section>
  )
}

export default Features
