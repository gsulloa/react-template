const realPath = path => `${process.env.REACT_APP_PATH_PREFIX || ""}${path}`
export default {
  homePath: realPath("/"),
  loginPath: realPath("/login"),
  customPath: path => realPath(path),
}
