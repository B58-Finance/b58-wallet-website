import { MouseEventHandler } from "react"
import { defineMessages } from 'react-intl'
import f, { setLanguage } from "../lib/translate";


const messages = defineMessages({
  features: {
    id: 'menu.features',
    defaultMessage: 'Features'
  },
  team: {
    id: 'menu.team',
    defaultMessage: 'Team'
  },
  support: {
    id: 'menu.support',
    defaultMessage: 'Support'
  },
  whitepaper: {
    id: 'menu.whitepaper',
    defaultMessage: 'Whitepaper'
  }
})

type Props = {
  hover: string
  onClick: MouseEventHandler 
}

const Menu = ( {hover, onClick}: Props ) => {
  return (
    <>
    <a href="#features" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 dark:text-white mr-4 hover:"+hover}>
      {f(messages.features)}
    </a>
    <a href="#team" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 dark:text-white mr-4 hover:"+hover}>
      {f(messages.team)}
    </a>
    <a href="https://discord.gg/AaqPTSdrhu" target="_blank" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 dark:text-white mr-4 hover:"+hover}>
      {f(messages.support)}
    </a>
    <a href="/assets/docs/whitepaper_v1_062021.pdf" target="_blank" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 dark:text-white mr-4 hover:"+hover}>
      {f(messages.whitepaper)}
    </a>
    </>
  )
}

export default Menu