import {Link} from 'react-router-dom'
import { useFetch } from '../hook/useFetch';

import './Home.css'
function Home() {

    const url = 'http://localhost:3001/products'
    const {data: item, loading, error} = useFetch(url);

    return (
        <div>
            <h1>Produtos</h1>
            {error && <p>{error}</p>}
            <ul className='products'>
                {item && item.map(item => (
                    <li key={item.id}>
                        <p>{item.name}</p>
                        <p>R$: {item.price}</p>
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
            <p>Bem-vindo à página inicial!</p>
        </div>
    );
}
export default Home;