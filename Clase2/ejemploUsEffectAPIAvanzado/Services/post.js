
export default async function fetchPosts() { //El archivo .js solo contiene esta función, no afecta en la app como si fuera un archivo .jsx

      //Paso 2: Cargar datos usando fetch o axios
      const json_data = await fetch("https://jsonplaceholder.typicode.com/posts") //OBTENER EL JSON
      const data = await json_data.json() //EXTRAER EL JSON DE data y parsearlo como objeto
      console.log(data) //IMPRIMIR EL JSON EN CONSOLA

      //Paso 5: ya que se declaro el estado (state), se guardan ahí los datos
      return data
    }