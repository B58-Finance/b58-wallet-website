import { defineMessages } from 'react-intl'
import f from "../lib/translate";

const messages = defineMessages({
  homeTitle: {
    id: 'home.title',
    defaultMessage: 'The Web3, DeFi crypto wallet built for you'
  },
  homeBody: {
    id: 'home.body',
    defaultMessage: 'With B58 you can collect, earn, send, and participate in our growing digital world.' +
    '{br}'+
    'Where you can be part of a decentralized financial world. In place where you\'re welcome on B58 Wallet, and have control of your finances.'+
    '{br}'+
    'Get access to global payments where transactions are borderless and low fees using it with friends and family or your business.'
  },
  homeBtnDownload: {
    id: 'home.btn.download',
    defaultMessage: 'Available Soon'
  },
  homeBtnWhitePaper: {
    id: 'home.btn.whitepaper',
    defaultMessage: 'Whitepaper'
  },
})

const Home = () => {

  return (
    <div id="home" className={"pt-16 -mt-16 lg:pt-32 lg:-mt-32"}>
      <section className="container mx-auto lg:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-0 md:row-gap-32">
          <div className="p-6">
            <h1 className="lg:mt-16 mb-8 lg:mr-10 text-3xl lg:text-6xl font-medium leading-tight">
              {f(messages.homeTitle)}
            </h1>
            <p className="text-base lg:mr-8 text-justify lg:text-left">
              {f(messages.homeBody, 
                {
                  br: <><br /><br /></>
                })
              }
            </p>
            <div className="lg:mt-10 lg:mb-10 flex flex-col lg:flex-row">
              <a href="#" role="button" className="w-full mb-4 text-center border-2 border-blue-medium bg-blue-medium hover:border-blue-light hover:shadow-lg hover:bg-blue-light hover:text-white text-sm text-white uppercase font-bold py-4 px-6 rounded-md mr-10">
                {f(messages.homeBtnDownload)}
              </a>
              <a href="/assets/docs/whitepaper_v1_062021.pdf" target="_blank" role="button" className="w-full mb-4 text-center border-2 border-blue-medium hover:border-blue-light hover:text-blue-light text-sm text-blue-medium uppercase font-bold py-4 px-6 rounded-md">
                {f(messages.homeBtnWhitePaper)}
              </a>
            </div>
          </div>
          <div>
            <img src="/images/b58_app_home.png"
              className='img-light'
              alt="B58 Wallet App Home"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
