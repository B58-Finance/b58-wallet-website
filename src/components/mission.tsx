import { defineMessages } from 'react-intl'
import f from "../lib/translate";

const messages = defineMessages({
  walletTitle: {
    id: 'mission.title',
    defaultMessage: 'Our B58 Mission'
  },
  walletBody: {
    id: 'wallet.body',
    defaultMessage: 'Our wallet is fully featured where <b>Cardano ADA</b> is our main currency but also allows you to transact native tokens available in the platform.' +
    '{br}'+
    'You\'re able to receive payments through our personalized <b>Card QR</b> that allows you to express yourself by the selection of themes available.' +
    '{br}'+
    'We also provide a Savings account ready and easy to use, where you earn rewards and can claim them every 5 days or build your retirement plan with it.'+
    '{br}'+
    'One more thing that you will enjoy is our <babbr>NTF</babbr> (Non-Fungible Tokens) manager available.'
  },
  walletAbbr: {
    id: 'wallet.abbr',
    defaultMessage: 'Non-Fungible Tokens'
  }
})

const Mission = () => {

  return (
    <section id="mission" className="pt-10 -mt-10 lg:pt-20 lg:-mt-20">
      <div className="lg:mt-6 grid grid-cols-1 md:grid-cols-2 md:col-gap-12 row-gap-0 md:row-gap-6 lg:mb-10">
        <div className="flex flex-wrap content-center lg:mr-6 p-6">
          <h1 className="mb-8 text-3xl lg:text-6xl font-medium leading-tight">
            {f(messages.walletTitle)}
          </h1>
          <p className="text-base text-justify lg:text-left lg:mr-8">
            {f(messages.walletBody, {
              b: (chunk) => <strong>{chunk}</strong>,
              babbr: (chunk) => <strong><abbr title={f(messages.walletAbbr)}>{chunk}</abbr></strong>,
              br: <><br/><br/></>  
            })}
          </p>
        </div>
        <div className='p-10'>
          <img src="/images/b58_app_send.png"
            alt="B58 Wallet App Home"
          />
        </div>
      </div>
    </section>
  )
}

export default Mission
