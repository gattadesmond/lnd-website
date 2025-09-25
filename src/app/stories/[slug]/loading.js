export default function BlogLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-600"></div>
        <p className="text-sm text-neutral-500">Loading...</p>
      </div>
    </div>
  );
}
