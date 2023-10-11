'use client';
import Image from 'next/image'
import AppBanner from 'app/components/AppBanner'
import AppFooter from 'app/components/AppFooter';
import ProjectsGrid from 'app/components/project_grid';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AppBanner />
      <ProjectsGrid />
      <AppFooter />
    </main>
  )
}
