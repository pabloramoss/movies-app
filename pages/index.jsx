import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'

export default function Home({properties}) {
  console.log(properties)
  const peliculas = properties.map((movie)=><li key={movie._id}>{movie.title}</li>)
  
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {peliculas}
      </ul>
        
    </div>
  )
}

export async function getServerSideProps(context){
  const {db} = await connectToDatabase()
  const data = await db.collection("movies").find({}).limit(1).toArray()
  const properties = JSON.parse(JSON.stringify(data))


  return {
    props: {properties: properties},
  }

}