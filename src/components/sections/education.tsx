import { EDUCATION } from "@/lib/data"

export default function Education() {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Education</h2>

      {EDUCATION.map((school, id) => {
        return (
          <div className="mb-8" key={id}>
            <h3 className="text-lg font-heading sm:text-xl">
              {school.role} @ {school.company}
            </h3>

            <p className="mb-4 mt-0.5 text-sm">
              {school.startDate} - {school.endDate}
            </p>
            <p>{school.description}</p>
          </div>
        )
      })}
    </div>
  )
}
