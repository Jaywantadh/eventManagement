export default function AdminDashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-navy-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-navy-700 transition-colors">
                    <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">
                        Total Events
                    </h3>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">0</p>
                </div>

                <div className="bg-white dark:bg-navy-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-navy-700 transition-colors">
                    <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">
                        Upcoming Events
                    </h3>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">0</p>
                </div>

                <div className="bg-white dark:bg-navy-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-navy-700 transition-colors">
                    <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">
                        Past Events
                    </h3>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">0</p>
                </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white shadow-lg shadow-blue-600/20">
                <h2 className="text-2xl font-bold mb-2">Welcome to EventHub</h2>
                <p className="text-blue-100">
                    Manage your events efficiently with our comprehensive event management
                    system.
                </p>
            </div>
        </div>
    )
}
