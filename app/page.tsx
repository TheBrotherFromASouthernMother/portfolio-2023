'use client';
import Image from 'next/image'
import AppBanner from 'app/components/AppBanner'
import ProjectsGrid from 'app/components/projects/Grid';
import AboutSection from 'app/components/AboutSection';
import MyWork from 'app/components/MyWork';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AppBanner />
      <AboutSection />
      <MyWork />
      <ProjectsGrid />
    </main>
  )
}
