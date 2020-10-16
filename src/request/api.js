import { get, post, axiosDelete, put } from "./http";

export const encrypt = p => post("/user/user", p);
