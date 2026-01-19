import Navbar from '@/components/Navbar';
import ProjectDetail from '@/components/ProjectDetail';
import { getProjectBySlug, projects } from '@/lib/projectsData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <ProjectDetail project={project} />
    </main>
  );
}