export const subscribedUser = (user) => ({
  ...user,
  followers: user.followers + 1,
  status: true,
});
export const unSubscribeUser = (user) => ({
  ...user,
  followers: user.followers - 1,
  status: false,
});
