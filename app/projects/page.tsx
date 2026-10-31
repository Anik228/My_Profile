import type { Metadata } from "next";
import ProjectsView from "../component/ProjectsView";

export const metadata: Metadata = { title: "Projects | Anik Lal Dey" };

export default function ProjectsPage() {
  return <ProjectsView />;
}
