export function ReleaseCard({ release }: any) {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="font-semibold">{release.title}</h2>
      <p className="text-sm text-gray-500">{release.type}</p>
      <p className="mt-2">{release.description}</p>
    </div>
  );
}
