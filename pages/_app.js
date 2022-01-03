//conexion a base de datos
const mongoose = require('mongoose')
async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
