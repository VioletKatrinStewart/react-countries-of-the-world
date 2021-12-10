import { client, checkError } from './client';

export async function getCountries() {
  //LOOK UP CODE FROM BLOGS, IMPORT CLIENT AND GRAB FROM COUNTRIES TABLE
  const response = await client.from('countries').select();
  console.log(response);
  return checkError(response);
}
