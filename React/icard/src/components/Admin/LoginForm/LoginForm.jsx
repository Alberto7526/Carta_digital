import "./LoginForm.scss"
import {Button, Form} from "semantic-ui-react"
import {useFormik} from "formik" // Permite validar el formulario 
import * as Yup from "yup" //  Valdia cada valor del formilario y devuelve errores 
// importamos toast para mostrar errores en pantalla 
import {toast} from "react-toastify"
// importamos la funci+on para hacer la petición al backend del login
import {loginApi} from "../../../api/user"
// importamos el hook para manejar el contexto 
import {useAuth} from "../../../hooks"

export function LoginForm() {
  const {login} = useAuth()
  const formik = useFormik({
    initialValues:initialValues(),
    // validamos los datos introducidos 
    validationSchema: Yup.object(validationSchema()),
    // ahora tomamos la información del formulario 
    onSubmit: async (formValue) => {
      try{
        const response = await loginApi(formValue)
        const {access} = response
        // AHORA VAMOS A CAGAR EL VALOR DE AUTENTICACIPÓN EN EL CONTEXTO
        login (access);
      }catch (error){
        toast.error(error.message)
      }
    }
  })


  return (
    <Form className="login-form-admin" onSubmit={formik.handleSubmit}>
      <Form.Input 
      name = "email" 
      placeholder = "Correo electrónico"
      value = {formik.values.email}  // colcoa el valor inicial  de a cuardo a lo definido en la funcion initialvalues
      onChange={formik.handleChange} // permite cambiar el valor de la caja de texto 
      error={formik.errors.email} // muestra al usuario el error en este caso de existir
      />
      <Form.Input 
      name="password" 
      type = "password" 
      placeholder = "Contraseña"
      value = {formik.values.password} // colcoa el valor inicial 
      onChange={formik.handleChange} // permite cambiar el valor de la caja de texto 
      error = {formik.errors.password}
      />
      <Button type="submit" content = "Iniciar sesión" primary fluid />
    </Form>
  )
}

function initialValues () {
  // carga los valores iniciales de el formulario, el name en el formulario es la clave en este objeto
  return {
    email:"",
    password: ""
  }
}

function validationSchema () {
  /**
   * Permite validar los datos introducidos en el formulario antes de poder dar clic en submit 
   */
  return {
    email: Yup.string().email('Email invalido').required('Valor requerido'),
    password: Yup.string().required('Valor requerido')
  }
}
