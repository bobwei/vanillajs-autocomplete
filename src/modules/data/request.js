export default {
  get: path => (
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            const { responseText } = xhr;
            resolve(JSON.parse(responseText));
          } else {
            reject(xhr);
          }
        }
      };
      xhr.open('GET', path);
      xhr.send();
    })
  ),
};
