
import Image from "next/image"
import style from './fruits.module.css'
export default function Fruits({list}) {
  const fruitList = list.map(fruits =>  ( 
    <section key={fruits.id} className="{'pt-4 $ ">
      <Image src={fruits.image} alt={fruits.name} width={200} height={200}/>
      <h2> {fruits.name}</h2>
      <h2> {fruits.botanicalName}</h2>
      <h2>{fruits.season}</h2>
      
    </section>
  ))
  return (
    <div className="grid grid-cols-3 gap-2">
      {fruitList}

    </div>
  )
}
