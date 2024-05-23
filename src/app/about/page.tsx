import Education from '@/components/sections/education'
import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <>
      <div className="flex flex-col mb-8 justify-center items-center min-h-screen">
          <h1 className="mb-8 text-2xl font-heading sm:text-4xl text-center">Coming Soon</h1>
          <img src="https://cataas.com/cat" alt="Random Cat" />
      </div>

    {/*
    <div className="font-base mx-auto w-[750px] max-w-full">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          Software Engineer with Cloud Experience and an academic background in Network/Telecom Systems. I like building, deploying and maintaining software!
        </p>
      </div>

      <Skills />

      <Experience />

      <Education />

    </div>
     */}
     </>
  )
}
