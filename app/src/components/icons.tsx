import { Command, Moon, SunMedium, Terminal } from "lucide-react"

export type IconKeys = keyof typeof icons

type IconsType = {
  [key in IconKeys]: React.ElementType
}

const icons = {
  logo: Terminal,
  sun: SunMedium,
  moon: Moon,
}

export const Icons: IconsType = icons
