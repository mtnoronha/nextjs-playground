'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Logoff() {
  const navigation = useRouter();

  useEffect(() => {
    document.cookie = 'isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    navigation.push('/');
  }, [navigation]);

  return <div>Logging off...</div>;
}
