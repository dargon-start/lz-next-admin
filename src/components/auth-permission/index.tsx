
type Props = {
  children: React.ReactNode;
  authCode: string;
};

export default function AuthPermission (props:Props) {

  const codeList = ['add','delete']

  const accessible  = codeList.includes(props.authCode)

  return (
    <div>
      {
        accessible ? props.children : null
      }
    </div>
  );
}