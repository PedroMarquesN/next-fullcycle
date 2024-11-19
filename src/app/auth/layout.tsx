export default function Layout({ children } : { children: React.ReactNode }) {
  return (
    <div
      style={{ backgroundImage:' url(/background.jpg)' }}
      className='flex h-screen items-center justify-center opacity-90  bg-cover bg-center bg-no-repeat text-white'
    >
      <div className='flex  min-h-screen w-96 flex-col items-center justify-center py-2'>
        {children}
      </div>
    </div>
  );
}