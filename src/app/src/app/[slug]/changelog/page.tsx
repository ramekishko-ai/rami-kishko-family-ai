import { prisma } from "@/lib/db";

export default async function ChangelogPage({ params }: any) {
  const project = await prisma.project.findUnique({
    where: { slug: params.slug },
    include: { releases: { orderBy: { createdAt: "desc" } } }
  });

  if (!project) return <div className="p-10">Project not found</div>;

  return (
    <main className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">{project.name} – Changelog</h1>

      <div className="space-y-4">
        {project.releases.map((r) => (
          <div key={r.id} className="border p-4 rounded-lg">
            <h2 className="font-semibold">{r.title}</h2>
            <p className="text-sm text-gray-500">{r.type}</p>
            <p className="mt-2">{r.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
