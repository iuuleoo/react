type Props = {
  name: string
  onClick?: () => void
}

export function Button({ name, onClick } : Props){
  return <button onClick={onClick}>{ name }</button>
}