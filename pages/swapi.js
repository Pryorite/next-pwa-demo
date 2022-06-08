import useSWR from 'swr'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json());

const GetData = (endpoint) => { 
    const { data, error } = useSWR(`https://swapi.dev/api/${endpoint}`, fetcher)
    return {data: data, error: error}
}

export default function StarWarsApi() {
    const { data: data2, error: error2 } = GetData("planets/1");
    const { data, error } = GetData("people/?page=1");
    
    return (
        <>
            <div className={styles.grid}>
                <Link href="/" className={styles.card}>
                    <h2>Goto Home Page &rarr;</h2>
                </Link>          
            </div>
            {error2 ? <p>Error Retrieving Tatooine Data.</p> :
                !data2 ? <p>Retrieving Tatooine Data...</p> :
                    <div>
                        <h1>{data2.name}</h1>
                        <h3>Rotation Period: {data2.rotation_period}</h3>
                        <h3>Orbital Period: {data2.orbital_period}</h3>
                        <h3>Diameter: {data2.diameter}</h3>
                        <h3>Climate: {data2.climate}</h3>
                        <h3>Gravity: {data2.gravity}</h3>
                        <h3>Terrain: {data2.terrain}</h3>
                        <h3>Surface Water: {data2.surface_water}</h3>
                        <h3>Population: {data2.population}</h3>
                    </div>
            }
            {error ? <p>Error Retrieving Page 1 Data.</p> :
            !data ? <p>Retrieving Page 1 Data...</p> :
                data.results.map((character) => (
                    <div key={character.url}>
                        <h1>{character.name}</h1>
                        <h3>Height: {character.height}</h3>
                        <h3>Mass: {character.mass}</h3>
                        <h3>Birthyear: {character.birth_year}</h3>
                        <h3>Gender: {character.gender}</h3>
                    </div>
            ))}            
        </>
      );
    }
    