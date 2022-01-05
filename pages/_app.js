//conexion a base de datos
const mongoose = require('mongoose')

const user = "";
const password = "";
const uri = "";
async function main() {
  await mongoose.connect(uri).then(()=> console.log("base de datos conectada"))
  .catch(e => console.log(e));
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp