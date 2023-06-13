import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key:'AIzaSyDFXUUKf81bK5m6hpz4IJMIt_brqqbknX0',
    cx:'06e7fe21bdd864b4f'
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
