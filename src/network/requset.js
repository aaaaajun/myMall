import axios from 'axios'
// 终极解决方案2
export function request(config) {
  // 1.创建实例,axios返回的是一个promise
  const instance = axios.create({
    // baseURL: "http://123.207.32.32:8000",
    baseURL: "http://152.136.185.210:7878/api/hy66",
    timeout: 5000
  })
  // 2.配置拦截器
  instance.interceptors.request.use(
    (config) => {
      // console.log("这是config的信息", config);
      return config
    },
    (reason) => {
      console.log(reason);
    },
  )
  // 2.配置拦截器
  instance.interceptors.response.use(
    (response) => {
      // console.log("这是response的信息", response);
      return response.data
    },
    (reason) => {
      console.log(reason);
    },
  )
  // 把这里的instance看成axios构造函数加axios实例去理解
  // 3.发送网络请求
  return instance(config)
}
