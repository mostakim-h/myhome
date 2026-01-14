"use client"

import {Moon, Sun} from 'lucide-react'
import {useTheme} from './theme-provider'
import {Button} from './ui/button'

export function ThemeToggle() {
  const {theme, toggleTheme} = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative hover:bg-primary/10 hover:text-primary overflow-hidden transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      <Sun
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0"/>
      <Moon
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100"/>
    </Button>
  )
}
