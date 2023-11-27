type Test = {
  id: string;
  name: string;
}

export async function GET() {
  const data = [
    { id: '1', name: 'Test 1' },
    { id: '2', name: 'Test 2' },
    { id: '3', name: 'Test 3' }
  ];

  return Response.json(data);
}
