'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Loading from './loading';

export default function Layout({ children }) {
  const [isContentReady, setContentReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentReady(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <header>I have a header</header>

      <Suspense fallback={<Loading />}>
        {isContentReady ? children : <Loading />}
      </Suspense>

      <footer>And a footer</footer>
    </main>
  );
}
