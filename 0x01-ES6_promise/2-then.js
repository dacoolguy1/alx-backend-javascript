export default function handleResponseFromAPI(promise) {
  // return new Promise((resolve, reject) => {
  promise.then((response) => { // eslint-disable-line no-unused-vars
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  }).catch(() => new Error());
  return promise;
}
