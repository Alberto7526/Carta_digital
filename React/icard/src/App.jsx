import {ToastContainer} from "react-toastify"
import './App.scss';
import {Navigation} from "./routes";
import {AuthProvider} from "./context"

function App() {

  return (
    <>
    <AuthProvider>
      {/* Debemos envolver nuestrra app en el contexto*/}
      <Navigation />
      <ToastContainer 
      //para configurar como se van a mostrar los errores 
        position = "top-center" // posicion donde va a aparecer
        autoclose = {5000} // tiempo en milisengundos quye demora abierto hasta que este se cierra 
        hideProgressBar // para que la barra de progreso sea invisible
        newestOnTop
        closeOnClick
        rtl = {false}
        pauseOnFocusLoss
        draggable
        pauseOnHover = {true}

      />
    </AuthProvider>
    </>
  )
}

export default App
