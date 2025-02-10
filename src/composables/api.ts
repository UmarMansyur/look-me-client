import useToken from "./token";

export default function useAPI() {
  const { getTokenAccess } = useToken();

  const getResponse = async (
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "GET",
    payload: any,
    isFormData: boolean = false,
    isAuth: boolean = false
  ) => {
    const headers: any = {};

    if (!isFormData) {
      headers["Content-Type"] = "application/json";
    }

    if (isAuth) {
      headers["Authorization"] = `Bearer ${getTokenAccess()}`;
    }
    try {
      const response = await fetch(url, {
        method,
        headers,
        body: isFormData ? payload : JSON.stringify(payload),
      });
      const data = await response.json();
      if(!response.ok) {
        throw new Error(data.message || 'Error')
      }
      return data;
    } catch (error) {
      console.log(error);
    }

  };

  const getResource = async (url: string, isAuth: boolean = false) => {
    return getResponse(url, 'GET', null, false, isAuth)
  }

  const postResource = async (url: string, payload: any, isFormData: boolean = false, isAuth: boolean = false) => {
    return getResponse(url, 'POST', payload, isFormData, isAuth)
  }

  const putResource = async (url: string, payload: any, isFormData: boolean = false, isAuth: boolean = false) => {
    return getResponse(url, 'PUT', payload, isFormData, isAuth)
  }

  const deleteResource = async (url: string, isAuth: boolean = false) => {
    return getResponse(url, 'DELETE', null, false, isAuth)
  }

  const patchResource = async (url: string, payload: any, isFormData: boolean = false, isAuth: boolean = false) => {
    return getResponse(url, 'PATCH', payload, isFormData, isAuth)
  }


  return {
    getResource,
    postResource,
    putResource,
    deleteResource,
    patchResource

  }
}

