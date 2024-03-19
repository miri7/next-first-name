import type { Metadata } from "next"

export const metadata:Metadata = {
  title:'SEO Title',
  description:'SEO description',
  keywords:['About Page','GYP','Informacion','...']
}

export  default function AboutPage() {
  return (
    <main>
        <span>About Page</span>
    </main>
  )
}
