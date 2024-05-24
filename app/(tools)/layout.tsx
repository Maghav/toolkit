// import Footer from './_components/Footer'
import Header from './_components/Header'

function ToolsLayout({children}: {children: React.ReactNode}) {
  return (
      <div>
        <Header />
        <main>
            {children}
        </main>
        {/* <Footer />   */}
      </div>

  )
}

export default ToolsLayout