import "./global.css"
import { useState, useEffect } from "react"

import { Button } from "./components/button"
import { useMessage } from "./hooks/useMessages"

import styles from "./app.module.css"

export function App(){
  const [count, setCount] = useState(0)

  const message = useMessage({ age: 19, name: "Leonardo" })

 function handleAdd(){
   setCount(count + 1)
 }

 function handleRemove(){
   setCount(count - 1)
 }

 useEffect(() => {
  console.log("Bem vindo")
 }, [])


  return (
  <div className={styles.container}> 
  <Button name="Adicionar" onClick={ handleAdd } /> 
  <span>{count}</span>
  <Button name="Remover" onClick={ handleRemove } />
</div>
  )
}
