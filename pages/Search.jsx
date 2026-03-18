import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hook/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams();
    const url = "http://localhost:3001/products?" + searchParams.toString();
    const {data:item, loading, error} = useFetch(url);
    console.log(item);
    console.log(url);
    console.log(searchParams.toString());

  return (
    <div>
        <ul className='products'>
            {item && item.map(item => (
                <li key={item.id}>
                    <p>{item.name}</p>
                    <p>R$: {item.price}</p>
                    <Link to={`/products/${item.id}`}>Detalhes</Link>
                </li>
            ))}
         </ul>
    </div>
  )
}

export default Search