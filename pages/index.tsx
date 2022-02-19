import type { NextPage } from 'next'
import AboutMe from '../components/AboutMe'
import ProjectsList from '../components/ProjectsList'
import ArticlesList from '../components/ArticlesList'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import { useEffect, useState } from 'react'
import ScrollButton from '../components/ScrollButton'

const Home: NextPage = () => {
  return (
    <div className='h-screen w-full text-center flex items-center'>
      Fai
    </div>
  );
  // return (
  //   <>
  //     <div className="w-full h-screen">
  //       {/* <div className="sticky cursor-pointer bg-yellow-200 hover:bg-yellow-300 py-2 text-sm text-center text-black font-medium">
  //         Sigueme en instagram como Jvargasmen
  //       </div> */}
  //       <Navigation />
  //       <Hero />
  //     </div>
  //     <section id='about-me' className='min-h-1/2'>
  //       <div className='container lg:w-3/5 mx-auto items-center'>
  //         <AboutMe />
  //       </div>
  //     </section>
  //     <section id='projects' className='min-h-1/2 bg-gray-900'>
  //       <div className='container lg:w-3/5 mx-auto items-center'>
  //         <ProjectsList />
  //       </div>
  //     </section>
  //     <section id='blog' >
  //       <div className='container lg:w-3/5 mx-auto items-center'>
  //         <ArticlesList />
  //       </div>
  //     </section>

  //     <ScrollButton />

  //     <footer className='bg-gray-900'>
  //       <div className='container lg:w-3/5 mx-auto items-center'>
  //         <Footer />
  //       </div>
  //     </footer>
  //   </>
  // )
}

export default Home
