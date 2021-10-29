import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto border-gray-200 dark:border-gray-700 pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Redwood.js Demo
            </h1>
            <h2 className="text-xl text-gray-700 dark:text-gray-200 mb-12">
              Made with TailwindCSS
            </h2>
            <nav className="text-black dark:text-white space-x-4">
              <Link to={routes.teams()}>Teams</Link>
              <Link to={routes.players()}>Players</Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
