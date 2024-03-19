import type { Metadata } from "next"

export const metadata:Metadata = {
  title:'SEO Title',
  description:'SEO description',
  keywords:['Contact Page','GYP','Informacion','...']
}

export  default function ContactPage() {
  return (
    <main>
        <span>contact Page</span>
    </main>
  )
}