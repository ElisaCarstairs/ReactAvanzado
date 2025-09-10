import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid e-mail format').required('E-mail is required'),
}).required();

export default function FormularioReactHookFormValidationYup() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });


  function activarErrorCustomizado() {
    setError('general', {type: 'manual', message: 'This is a custom error'})
  }

  function onSubmit(data) {
    console.log(data);
  }

  async function validateFn (value) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(`El nombre ${value} ya está en uso`);

    }, 2000);
    })
  }

  return (
    <>
      <h2>Formulario usando React Hook Form con YUP</h2>
      {errors.general && <p style={{ color: 'red' }}>{errors.general.message}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        Name: <input {...register('name', {validate: validateFn})} />
        <br />

        {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}
        Last name: <input {...register('lastName')} />
        <br />

        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        E-mail: <input {...register('email')} />
        <br />

        <input type="submit" value="Enviar" />

        <button onClick={activarErrorCustomizado}>Activar error</button>
      </form>
    </>
  )
}
