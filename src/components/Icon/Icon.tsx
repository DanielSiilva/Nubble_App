import { EyeOffIcon } from "../../assets/Icons/EyeOffIcon"
import { EyeOnIcon } from "../../assets/Icons/EyeOnIcon"

interface Props {
  name: IconName;

}

export function Icon({name}: Props){
  const SVGIcon = iconRegistry[name];
  return (
    <SVGIcon/>
  )
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOnIcon: EyeOffIcon
}

type IconType = typeof iconRegistry;

type IconName = keyof IconType;