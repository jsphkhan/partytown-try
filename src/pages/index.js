import { createRef, useEffect } from 'react';

// https://github.com/bendman/nextjs-worker-example/blob/master/pages/index.js

export default function Home() {
  // useEffect(() => {
  //   const workerRef = createRef();
  //   workerRef.current = new Worker(new URL('../worker', import.meta.url));
  //   workerRef.current.postMessage({ a: 1, b: window.location.href });
  //   workerRef.current.onmessage = (evt) => {
  //     console.log('message from worker: ', evt.data);
  //   };
  // }, []);
  const handleClick = () => {
    console.log('try button click');
    console.log('**** GTM Event Clicked ****');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'clickEvent',
      'gtm.start': new Date().getTime(),
      'custom': 'some data'
    });
  } 

  return (
    <>
      <main>
        <p id="output-script" suppressHydrationWarning />

        <button onClick={handleClick}>Click</button>
      </main>
    </>
  );
}
