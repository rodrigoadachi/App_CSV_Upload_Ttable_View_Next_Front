import { api } from "./api";

export const UploadService = {
  csv: async (file: FormData): Promise<any> => {
    console.log({file})
    try {
      const { data } = await api.POST("/contract/upload", {
        body: file,
      });
      return data;
    } catch (error) {
      console.error("ERROR :: UploadService csv", error);
      throw error;
    }
  },
};
