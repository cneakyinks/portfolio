import { redirect } from "next/navigation"
import { projects } from "../../data/projects"

export default function RandomProject() {
  const randomProject = projects[Math.floor(Math.random() * projects.length)]
  redirect(`/projects/${randomProject.id}`)
}
