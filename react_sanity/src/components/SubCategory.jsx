import { useParams } from "react-router-dom"

export default function SubCategory (){

    const {subcategory} = useParams()

    return <h1>{subcategory}</h1>
}