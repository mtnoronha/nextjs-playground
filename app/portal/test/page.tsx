'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Loading from '@/components/LoadingSkeleton';

type Test = {
  id: string;
  name: string;
};

export default function Profile() {
  const [data, setData] = useState<Test[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/v1/test');
      const testData = await response.json();
      setData(testData);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>We&apos;re inside neo - Test</h1>
      <h2>List of test objects: </h2>

      <Suspense fallback={<Loading />}>
        { !isLoading ?
            <ul>
            {
              data.map(test => (
                <li key={test.id}>{test.name}</li>
              ))
            }
            </ul>
          :
            <Loading />
        }
      </Suspense>
    </>
  );
}
