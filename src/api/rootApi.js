export const sendRequest = (method, url, postData) => {
  return fetch(url, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    referrerPolicy: "origin",
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch((error) => {
      return console.log(error);
    });
};
export default sendRequest;
