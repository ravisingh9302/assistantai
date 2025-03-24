import axiosInstance from "@/lib/axiosInstance";


interface responseDataTypes {
    data: JSON | null,
    success: boolean,
    message: string,
}

export const afterfieldRes = async (formData: FormData): Promise<responseDataTypes> => {
    for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
    }
    const response = await axiosInstance.post("/analyze-resume", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
};


