import React, { FC, useEffect, useRef } from "react"
import ReactTooltip from "react-tooltip"

const elements = [
  { label: "Yellow", x: 112, y: 23, w: 112, h: 89 },
  { label: "Pink", x: 27, y: 119, w: 110, h: 195 },
  { label: "Brown", x: 198, y: 124, w: 112, h: 90 },
]

const getImageMapResize = (window: Window) => {
  if (!window["imageMapResize"]) return
  return window["imageMapResize"] as () => void
}

const onLoad = (img: HTMLImageElement, container: HTMLDivElement) => {
  const map = document.createElement("map")

  map.name = "my-map"
  img.setAttribute("usemap", "#" + map.name)

  elements.forEach(element => {
    const area = document.createElement("area")
    area.onclick = function (event) {
      console.log(event, element)
    }
    area.onmouseover = () => console.log(element)
    area.title = element.label
    area.coords = [
      element.x,
      element.y,
      element.x + element.w,
      element.y + element.h,
    ].join(",")
    area.setAttribute("data-tip", "custom show and hide")
    area.setAttribute("data-event", "click hover")
    area.setAttribute("style", "cursor: pointer")

    map.appendChild(area)
  })
  container.appendChild(map)
  const imageMapResize = getImageMapResize(window)
  if (!imageMapResize) return
  imageMapResize()
  ReactTooltip.rebuild()
}

const Car: FC = () => {
  const imgRef = useRef<HTMLImageElement>()
  const containerRef = useRef<HTMLDivElement>()

  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/image-map-resizer/1.0.10/js/imageMapResizer.min.js"
    if (script) {
      script.addEventListener("load", () => {
        onLoad(imgRef.current, containerRef.current)
      })
    }
    containerRef.current.appendChild(script)
  }, [])

  return (
    <div ref={containerRef}>
      <img
        src="https://image.shutterstock.com/image-photo/three-macaroons-sweet-desserts-isolated-260nw-351030134.jpg"
        ref={imgRef}
      />
      <ReactTooltip
        globalEventOff="click"
        backgroundColor={"red"}
        getContent={dataTip => (
          <div>
            <h3>This little buddy is {dataTip}</h3>
            <p>Put mouse here</p>
          </div>
        )}
      />
    </div>
  )
}

export default Car
