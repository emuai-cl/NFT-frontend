import React, { FC } from "react"

import { CAR_PATH } from "../constants/car.path"

type CarSVGProps = React.SVGProps<SVGSVGElement>

export const CarSVG: FC<CarSVGProps> = props => {
  return (
    <svg viewBox="0 0 460 93" style={{ fill: "currentColor" }} {...props}>
      <path d={CAR_PATH} />
    </svg>
  )
}
