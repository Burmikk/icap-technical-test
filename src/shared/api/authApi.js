import axios from "axios";

export const instance = axios.create({
    baseURL: "https://technical-task-api.icapgroupgmbh.com/api",
});

export const loginApi = async (value) => {
    return instance.post("/login/", value);
};
