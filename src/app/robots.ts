<<<<<<< HEAD
import { baseURL } from "@/resources";
=======
import { baseURL } from "@/app/resources";
>>>>>>> 6e093c82ca0ba41cdf77be171e75324cef2269cd

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
