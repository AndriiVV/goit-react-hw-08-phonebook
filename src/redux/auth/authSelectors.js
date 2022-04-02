export const getIsAuth = state => Boolean(state.auth.token);
// export const getIsAuth = false;
// export const getLocalid = state => state.auth.user.id;

export const getUsername = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
