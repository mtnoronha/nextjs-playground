const Page = ({ params }: { params: { id: string }}) => {
  return (
    <div>
      <h1>This page receives params!</h1>
      <p>Check it out `{ params.id }` </p>
    </div>
  );
}

export default Page;
