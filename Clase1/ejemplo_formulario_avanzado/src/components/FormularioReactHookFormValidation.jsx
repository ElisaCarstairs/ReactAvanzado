import { useForm } from 'react-hook-form'
export default function FormularioReactHookFormValidation() {
    //const [name, setName] = useState('')
    //const [lastname, setLastname] = useState('')
    const { register, handleSubmit, formState: {errors} } = useForm()


    function onSubmit(data) {
    console.log(data)
    }

   
    return (
        <>
            
            <h2>Formulario usando React Hook Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.name && <p style={{color: 'red'}}>{errors.name.message}</p>}
                Name: <input {...register('name', {required: 'Name is required'})} />
                <br />
                Last name: <input {...register('lastName')} />
                <br />
                <input type="submit" value="Enviar" />
            </form>
            </>

    )
}