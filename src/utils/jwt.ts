import { jwtDecode, type JwtPayload } from 'jwt-decode'

const decodeToken = async (token: string) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/me`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json()
  return data;
}

const expiredToken = (token: string) => {
  const decoded: JwtPayload = jwtDecode(token, { header: true });

  if(!decoded || !decoded.exp) {
    return false
  }

  return new Date(decoded.exp * 1000) < new Date();
}



export {
  decodeToken,
  expiredToken
}

