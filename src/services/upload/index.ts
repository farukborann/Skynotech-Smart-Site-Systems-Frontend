import { postReq } from "..";
import { UploadPP } from "src/services/upload/models";

export async function uploadPP(image: File) {
  const formData = new FormData();
  formData.append("image", image);

  const data = await postReq<UploadPP>("/upload/pp", formData);

  return data;
}
