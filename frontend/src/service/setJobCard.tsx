import API from '.';

export const setJobCard = async (url: string) => {
  const response = await API.post(url, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': 'http://3.141.105.181:8000',
    },
  });
  return response.data;
};
