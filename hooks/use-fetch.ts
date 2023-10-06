'use client';

import useSWR from 'swr';

const fetcher = async (url: string, token: string = '') => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error('Something went wrong');

  return res.json();
};

const useFetch = (endpoint: string, token: string = '') => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`,
    (uri) => fetcher(uri, token)
  );

  const isLoading = !data && !error;

  return { data, error, isLoading };
};

export default useFetch;
