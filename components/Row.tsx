import { ChevronRightIcon,ChevronLeftIcon } from "@heroicons/react/solid"
import { Movie } from "../typing"

interface Props{
  title:string
  movies:Movie[]
}

function Row({ title,movies}: Props){
  return (
  <div>
    <h2>{title}</h2>
    <div>
      <ChevronLeftIcon/>
      <ChevronRightIcon/>
    </div>
    </div>)
}

export default Row