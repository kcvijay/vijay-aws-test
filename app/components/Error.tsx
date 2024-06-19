export default function ErrorComponent({ error }: { error: string }) {
  return (
    <div className='size-80 mx-auto flex justify-center items-center bg-red-50'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h2 className='text-2xl text-orange-500'>An error is ocurred.</h2>
        <p className='text-gray-500'>{error}</p>
      </div>
    </div>
  );
}
