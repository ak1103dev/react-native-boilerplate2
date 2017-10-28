export default (name, type) => ({
  o: `${name}/${type}`,
  loading: `${name}/${type}_LOADING`,
  success: `${name}/${type}_SUCCESS`,
  error: `${name}/${type}_ERROR`,
});
