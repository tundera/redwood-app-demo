import Footer from 'src/components/Footer/Footer'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700">
      <div className="flex flex-col px-8 min-h-screen">
        <nav className="flex items-center justify-between w-full relative max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-200  dark:bg-gray-700 bg-opacity-60 dark:text-gray-100">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <div className="ml-[-0.60rem]"></div>
        </nav>
        <main id="skip" className="flex flex-col justify-center px-8 bg-gray-200 dark:bg-gray-700">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
