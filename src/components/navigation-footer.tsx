import Menu from "./menu"

const NavigationFooter = () => {
  return (
    <nav>
      <div className="px-5 p-6 mx-auto flex justify-between">
        <div className="flex flex-shrink-0 text-white pl-2 justify-center">
          <a href="https://b58.finance" target="_blank" title="B58 Finance">
            <small>Developed <br />by</small><br />
            <img src="/images/logo_b58.svg" alt="B58 Finance Logo" className="w-8 md:w-16 pt-2" />
          </a>
        </div>
        <div className="flex flex-col lg:items-center lg:w-auto border-l ml-8 pl-8">
          <div className="flex flex-col font-bold">
            <Menu hover="text-blue-light lg:mb-4" onClick={() => false} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationFooter
