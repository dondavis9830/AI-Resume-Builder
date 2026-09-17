import axiosService from "../API/axiosService";

export const addresumeAPI = async (resumeDetails)=>{
    return await axiosService('POST','/resume',resumeDetails)
}