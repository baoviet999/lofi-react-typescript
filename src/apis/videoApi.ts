import { Params } from "model/common";
import axiosClient from "./axiosClient";



const youtubeApi = {
    getAll(params: Params): Promise<any> {
        return axiosClient.get("/search", { params });
    },
};
export default youtubeApi;
