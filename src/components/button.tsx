type Props = {
  name: string
}

export function Button({ name } : Props){
  return <button>{ name }</button>
}