import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3001/api/projects", {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch project data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);
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
