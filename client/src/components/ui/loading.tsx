// components/Loading.tsx

export default function Loading() {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
        <p className="mt-4 text-lg">Loading...</p>
      </div>
    );
  }
  