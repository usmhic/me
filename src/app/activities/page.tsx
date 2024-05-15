import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ACTIVITIES } from '@/lib/data'

export default function Activities() {

  return (
    <div className="mx-auto w-[750px] max-w-full">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Activities</h1>
      {ACTIVITIES.map((activity, id) => {
        return (
          <div
            className="border-b-4 border-r-4 border-b-black border-r-black bg-white p-8 py-10 w600:px-[30px] w400:px-5"
            key={id}
          >
            <div className="mx-auto w-3/4 w800:w-full">
              <AspectRatio
                className="!-bottom-[2px] rounded-base border-2 border-black shadow-base"
                ratio={2 / 1}
              >
                <img
                  className="w-full rounded-base"
                  src={`${activity.previewImage}`}
                  alt={activity.name}
                />
              </AspectRatio>

              <div className="mt-6">
                <h2 className="text-3xl font-bold w700:text-2xl w450:text-xl">
                  {activity.name}
                </h2>

                <p className="mt-5 text-lg w450:text-base">
                  {activity.description}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-5 text-base w400:text-sm">
                  <a
                    className="cursor-pointer rounded-base border-2 border-black bg-main px-4 py-2 text-center uppercase shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                    href={activity.liveLink}
                    target="_blank"
                  >
                    Source
                  </a>
                  <a
                    className="cursor-pointer rounded-base border-2 border-black bg-main px-4 py-2 text-center uppercase shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                    href={activity.repoUrl}
                    target="_blank"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}