import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const getTheme = (): "light" | "dark" => {
    if (typeof document === "undefined") return "light";
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">(getTheme);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setTheme(getTheme());

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem("theme")) {
                const newTheme = e.matches ? "dark" : "light";
                document.documentElement.classList.toggle("dark", e.matches);
                setTheme(newTheme);
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        
        document.documentElement.classList.toggle("dark", newTheme === "dark");
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