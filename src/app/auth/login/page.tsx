export default function Login() {
  return (
    <div
      style={{ backgroundImage:' url(/background.jpg)' }}
      className='flex h-screen items-center justify-center opacity-90  bg-cover bg-center bg-no-repeat text-white'
    >
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
           <form className='flex w-full flex-col space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'>
            <div className='flex flex-col items-center space-y-4'>
              <h1 className='text-3xl font-bold'>Login</h1>
              <p className='text-sm text-gray-400'>
                Novo por aqui? {''}
                  <a className='text-blue-500 hover:underline'>Crie uma conta</a>
              </p>
            </div>
           </form>
      </div>
    </div>
  );
}
