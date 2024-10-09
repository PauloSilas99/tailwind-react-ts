import { useState } from 'react'
import Vector from './assets/Vector (19).svg'
import { EyeSlash } from '@phosphor-icons/react' 
import { Eye } from '@phosphor-icons/react'

type PasswordType = 'password' | 'text'

const App = () => {
  const [inputPassword,setInputPassword] = useState<PasswordType>('password')

const handleTogglePasswordType = (type:PasswordType) =>{
  switch (type) {
    case 'password':
      setInputPassword('text')
      return
    case 'text':
      setInputPassword('password')
      return  
  }
}  
  return (
  <div className="grid grid-cols-2 h-screen bg-gray-50">
    <div>
      <div className='py-10 px-28'>
        <img src={Vector} alt="Vector" />
        <main className='flex flex-col gap-10 w-full max-w-[370px]'>
          <header className='flex flex-col gap-4 w-full max-w-[350px]'>
            <h1 className='font-sans text-4xl mt-8 font-bold text-gray-800'>Acesse a Plataforma</h1>
            <small className='font-sans font-normal text-base text-gray-500'>Faça o Login ou Registre-se para começar a construir seus projetos ainda hoje.</small>
          </header>
          <form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label 
                className='font-sans font-semibold text-sm text-gray-800' 
                htmlFor="email">
                  Email
              </label>
              <input 
                type="email" 
                id='email' 
                placeholder='Digite seu email...' 
                className='px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded focus:border-gray-200 outline-none'/>
            </div>
            <div className='flex flex-col gap-2 relative'>
              <label 
                className='flex justify-between font-sans font-semibold text-sm text-gray-800' 
                htmlFor="password" 
                id='password'>
                  Senha 
                <a href="#" className='text-purple-500 hover:text-purple-400 hover:underline'>Esqueceu a senha?</a>
              </label>
              <input 
                type={inputPassword} 
                placeholder='Digite sua senha...' 
                className='px-4 py-3 bg-white text-sm text-gray-800 leading-5 border border-gray-200 rounded focus:border-gray-200 outline-none'/>
              <button 
                className='absolute right-4 top-11 text-gray-400' type='button' 
                onClick={()=> handleTogglePasswordType(inputPassword)}>
                  {inputPassword == 'password'? <EyeSlash /> : <Eye />}
              </button>
            </div>
            <footer className='flex flex-col gap-8'>
              <button className='bg-purple-500 text-white font-bold py-4 rounded outline-none hover:bg-purple-400 hover:ring-1 hover:ring-purple-500 focus:ring-2'>Entrar</button>
              <span className='text-gray-500'>Ainda não tem uma conta? <a href="#" className='text-purple-500 hover:text-purple-400 hover:underline'>Inscreva-se</a></span>
            </footer>
          </form>
        </main>
      </div>
    </div>
    <div className="bg-img-purple bg-cover bg-no-repeat"></div>   
  </div>  
  )
}

export default App;