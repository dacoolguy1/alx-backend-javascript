import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res;
  try {
    const photoRes = await uploadPhoto();
    const userRes = await createUser();
    res = { photo: photoRes, user: userRes };
  } catch (err) {
    res = { photo: null, user: null };
  }

  return res;
}
