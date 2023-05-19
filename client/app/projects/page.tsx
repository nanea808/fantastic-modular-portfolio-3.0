import internal from "stream";

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
        This is where all my projects are displayed. There will be a custom api
        linked to a mondgodb cluster that will be used to populate this page.
      </p>
      <div>
        {data.map(({ _id, title, repo, description, deployment }: any) => {
          return (
            <div key={_id} className="flex flex-row max-w-[460px]">
              <div className="pe-4 mb-4">
                <a href={repo} className="font-serif font-bold text-lg">{title}</a>
                <p>{description}</p>
              </div>
              {deployment ? (
                <a href={deployment} className="self-center">Deployment</a>
              ) : (
                <a href={repo} className="self-center">Repo</a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
