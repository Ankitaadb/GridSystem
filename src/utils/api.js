export async function api({
    url
  }) {
    try {
      const response = await fetch(
        url,
        {
          method: 'GET'
        }
      );
      const responseJson = await response.json();
      if (!response.ok || response.status !== 200) {
        throw responseJson;
      }
      return responseJson;
    } catch (error) {
      return Promise.reject(error); //eslint-disable-line
    }
  }