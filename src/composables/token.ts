import { decodeToken, expiredToken } from "../utils/jwt";

export default function useToken() {
  const getTokenAccess = (): string => {
    return sessionStorage.getItem("token_access") || "";
  };

  const getTokenRefresh = (): string => {
    return sessionStorage.getItem("token_refresh") || "";
  };


  const setToken = (token: string, type: "access" | "refresh") => {
    sessionStorage.setItem(`token_${type}`, token);
  };

  const removeToken = (type: "access" | "refresh") => {
    sessionStorage.removeItem(`token_${type}`);
  };

  const getPayloadToken = async (token: string) => {
    return await decodeToken(token);
  };

  const refreshToken = async () => {
    try {

      if(expiredToken(getTokenRefresh())) {
        removeToken('refresh')
        return;
      }

      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/auth/refresh`,
        {
          method: "POST",
          body: JSON.stringify({
            refreshToken: getTokenRefresh(),
          }),
        }
      );
      const data = await response.json();
      if(!response.ok) {
        throw new Error(data.message || 'Error')
      }
      return data;
    } catch (error) {
      console.log(error);
    }

  };

  return {
    getTokenAccess,
    getTokenRefresh,
    setToken,
    removeToken,
    getPayloadToken,
    refreshToken
  };
}
