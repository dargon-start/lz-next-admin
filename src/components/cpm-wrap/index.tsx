export default function CpmWrap({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="m-2.5 rounded border-2 border-solid p-2.5">{children}</div>
  )
}
