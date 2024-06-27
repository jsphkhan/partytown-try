/**
 * Web Worker file to do some heavy work
 */

onmessage = (evt) => {
  try {
    for(var i=1; i<=9; i++) {
      console.log('i: ', i, evt.data);
    }
    postMessage(i);
  } catch (err) {
    postMessage(err);
  }
};
