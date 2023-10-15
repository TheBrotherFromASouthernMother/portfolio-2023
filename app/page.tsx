'use client';
import Image from 'next/image'
import AppBanner from 'app/components/AppBanner'
import ProjectsGrid from 'app/components/projects/Grid';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AppBanner />
      <ProjectsGrid />
    </main>
  )
}
