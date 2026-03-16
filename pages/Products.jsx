import { useParams } from "react-router-dom";

const Products = () => {
    const { id } = useParams();
  return (
    <>
        <p>ID do produto: {id}</p>
    </>
  )
}

export default Products