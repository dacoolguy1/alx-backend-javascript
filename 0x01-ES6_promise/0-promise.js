export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
    setTimeout(() => {
      const response = { message: 'API response' };
      resolve(response);
    }, 1000);
  });
}
