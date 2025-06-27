import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout() {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar tetap */}
            <Sidebar />

            {/* Main content area */}
            <div className="flex flex-col flex-1 min-h-0">
                <Header />

                <main className="flex-1 overflow-y-auto bg-gray-100">
                    <div className="p-6 min-h-full">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
