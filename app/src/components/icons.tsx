import { AtSign, ArrowRight, Skull, Command, Moon, Key, SunMedium, Terminal } from "lucide-react"

export type IconKeys = keyof typeof icons

type IconsType = {
  [key in IconKeys]: React.ElementType
}

const icons = {
  logo: Terminal,
  sun: SunMedium,
  moon: Moon,
  arrow: ArrowRight,
  at: AtSign,
  key: Key,
  alert: Skull,
}

export const Icons: IconsType = icons
