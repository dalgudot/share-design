import { createApi } from 'unsplash-js';

export default function initUnsplashApi() {
  const unsplashApi = createApi({
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY ?? '',
  });

  return unsplashApi;
}
