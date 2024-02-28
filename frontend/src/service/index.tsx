import axios from 'axios';

export default axios.create({
  baseURL: 'http://3.18.110.253/',
});

export const getAqi = async (city: any) => {
  return axios.get(
    `https://api.waqi.info/feed/${city}/?token=265f537e4985d6eb1113d115a5582a0ccc90960c`,
  );
};

export const getSkills = async (name: any) => {
  return axios.get(`http://3.18.110.253:8000/v1/skills/${name}`);
};
