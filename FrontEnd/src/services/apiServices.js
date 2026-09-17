import axiosService from "../API/axiosService";

export const addresumeAPI = async (resumeDetails)=>{
    return await axiosService('POST','/resume',resumeDetails)
}

export const viewResumeAPI = async(id) => {
    return await axiosService('GET',`/resume/${id}`,{})
}

export const viewAllResume = async() => {
    return await axiosService('GET',`/resume`,{})
}

// del
export const delResumeAPI = async(id)=>{
    return await axiosService('DELETE',`/resume/${id}`,{})
}