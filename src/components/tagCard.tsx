export default function TagCard({ content }: { content: string }) {
  return (
    <div className="inline-block rounded-lg border border-[#3245ff] bg-white bg-opacity-40 px-3 py-1 text-sm dark:bg-gray-800">
      {content}
    </div>
  );
}
