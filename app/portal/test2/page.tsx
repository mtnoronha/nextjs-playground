
import React, { Suspense } from 'react';
import Loading from '@/components/LoadingSkeleton';

type Test = {
  id: string;
  name: string;
};

async function TestList() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test`);
  const tests = await response.json();

  return (
    <ul>
      {
        tests.map((test: Test) => (
          <li key={test.id}>{test.name}</li>
        ))
      }
    </ul>
  );
}

export default function Page() {
  return (
    <>
      <h1>This is Sequential</h1>
      <h2>List of test objects: </h2>

      <Suspense fallback={<Loading />}>
        <TestList></TestList>
      </Suspense>
    </>
  );
}
