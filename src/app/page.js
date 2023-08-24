'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react'
import Intro from '../components/Intro'
import Description from '../components/Description'
import Projects from '../components/Projects'

export default function Home() {


  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main className={styles.main} data-scroll-container>
      <Intro />
      <Description />
      <Projects />
    </main>
  )
}
