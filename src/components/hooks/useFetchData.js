import React from 'react';

const useFetchData = (
  url,
  options = {
    body: {},
    query: {},
    method: 'GET',
  }
) => {
  const [refetch, setRefetch] = React.useState(true);
  const [data, setData] = React.useState({
    response: null,
    error: false,
    loading: true,
  });

  React.useEffect(() => {
    if (refetch) {
      setRefetch(false);
      setData({ ...data, error: null, loading: true });
      fetch(url, {
        method: options.method,
        headers: options.headers || {
          'Content-Type': 'application/json',
        },
        body:
          options.method !== 'GET' ? JSON.stringify(options.body) : undefined,
      })
        .then((response) => response.json())
        .then((data) => {
          setData({
            response: data,
            error: false,
            loading: false,
          });
        })
        .catch((error) => {
          //fetch throws an error only on network failure or if anything prevented the request from completing
          setData({
            response: { status: 'network_failure', error },
            error: true,
            loading: false,
          });
        });
    }
  }, [
    data,
    options.body,
    options.headers,
    options.method,
    options.query,
    url,
    refetch,
  ]);

  return { ...data, refetch: () => setRefetch(true) };
};

export default useFetchData;
