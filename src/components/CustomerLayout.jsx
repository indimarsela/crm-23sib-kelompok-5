import { Outlet } from "react-router-dom";

export default function CustomerLayout() {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col">
      {/* Main Content Fullscreen */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Optional Footer */}
      <footer className="w-full text-center py-4 text-sm text-gray-500 bg-white border-t">
        &copy; {new Date().getFullYear()} AA Catering. All rights reserved.
      </footer>
    </div>
  );
}
