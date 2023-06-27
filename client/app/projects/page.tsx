import Link from "next/link";

// async function getData() {
//   const res = await fetch("http://localhost:3001/api/projects", {
//     method: "GET",
//     cache: "no-cache",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch project data");
//   }

//   return res.json();
// }

const data = [
  {
      "title": "01-project-dosequis-api",
      "repo": "https://github.com/nanea808/01-project-dosequis-api",
      "description": "Weather for Ticketmaster events",
      "deployment": "https://nanea808.github.io/01-project-dosequis-api/"
  },
  {
      "title": "Present Pear",
      "repo": "https://github.com/nanea808/2nd-project-team-4",
      "description": "A gift registry app for parties and events",
      "deployment": "https://present-pear.herokuapp.com/"
  },
  {
      "title": "Task-A-Saurus",
      "repo": "https://github.com/nanea808/3rd-project-boot-campers",
      "description": "A listing website for crowdfunding tasks",
      "deployment": "https://taskasaurus-app.herokuapp.com/"
  },
  {
      "title": "Skii Bawler 3000",
      "repo": "https://github.com/nanea808/skii-bawler-3000",
      "description": "A 3D Skee-Ball Game in Unity"
  },
  {
      "title": "React Portfolio 2022",
      "repo": "https://github.com/nanea808/20-react-portfolio-refactor",
      "description": "My 2nd 2022 portfolio refactored using react",
      "deployment": "https://nanea808.github.io/20-react-portfolio-refactor/"
  },
  {
      "title": "Original 2022 Portfolio",
      "repo": "https://github.com/nanea808/portfolio-ethan-willers",
      "description": "My first portfolio showcasing basic HTML, CSS, and Javascript skills",
      "deployment": "https://nanea808.github.io/portfolio-ethan-willers/"
  },
  {
      "title": "Weather Dashboard",
      "repo": "https://github.com/nanea808/06-weather-challenge",
      "description": "A simple weather dashboard that gives a five day forecast",
      "deployment": "https://nanea808.github.io/06-weather-challenge/"
  },
  {
      "title": "Tech Blog",
      "repo": "https://github.com/nanea808/14-tech-blog-challenge",
      "description": "This is a simple tech blog"
  }
]

export default async function Home() {
  // const data = await getData();

  return (
    <div>
      <h1 className="font-bold text-3xl font-serif">Projects</h1>
      <p className="my-5 max-w-[460px] font-sans">
        Welcome to my projects page. Checkout my recent work and see my
        currently deployed apps.
      </p>
      <div>
        {data.map(({ _id, title, repo, description, deployment }: any) => {
          return (
            <div
              key={_id}
              className="flex flex-row justify-between max-w-[460px]"
            >
              <div className="pe-4 mb-4">
                <a href={repo} className="font-serif font-bold text-lg">
                  {title}
                </a>
                <p>{description}</p>
              </div>
              <div className="border-2 border-blue-300 rounded-full px-2 hover:bg-slate-500 self-center">
                {deployment ? (
                  <Link href={deployment}>
                    <span>Active</span>
                  </Link>
                ) : (
                  <Link href={repo}>
                    <span>Repo</span>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
