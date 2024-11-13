
export default function CpmWrap({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <div className='m-2.5 border-solid border-2 rounded p-2.5'>
      { children }
    </div>
  );
}