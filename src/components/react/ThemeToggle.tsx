import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "dark" : "light");
    }, []);

    const toggleTheme = () => {
        const element = document.documentElement;
        const newTheme = theme === "light" ? "dark" : "light";
        
        element.classList.toggle("dark");
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    if (!mounted) {
        return <div className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-0 mt-2" />; 
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="
                text-gray-800 dark:text-gray-200 
                hover:text-rose-600 dark:hover:text-rose-200 
                transition-colors 
                ml-2 sm:ml-0 mt-2
            "
        >
            {theme === "dark" ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
        </button>
    );
}