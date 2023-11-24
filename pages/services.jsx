import fs from 'fs/promises'
import path from 'path'

import RootLayout from "@/layouts/root-layout"

/**
 * Home page component
 * @param {array} slides images to render in the hero section
 * @return {jsx}
 */
export default function Home({slides}) {
  return (
    <RootLayout>
      <h1>Servicios</h1>
    </RootLayout>
  )
}

export async function getStaticProps() {

  // Get images from slides directory
  const slidesDirectory = path.join(process.cwd(), 'public', 'slides')
  const slides = await fs.readdir(slidesDirectory)

  // Add full path to each image
  slides.forEach((slide, index) => {
    slides[index] = `/slides/${slide}`
  })

  return {
    props: {
      slides
    },
  }
}