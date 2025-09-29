import "./global.css"

import { Button } from "./components/button"
import { useMessage } from "./hooks/useMessages"

import styles from "./app.module.css"

export function App(){
  const { show } = useMessage({ age: 19, name: "Leonardo" })
  return (
  <div className={styles.container}> 
  <Button name="Adicionar" onClick={() => show("Mensagem personalizada do meu hook!")} />
  <span>0</span>
  <Button name="Remover" /> 
</div>
  )
}
