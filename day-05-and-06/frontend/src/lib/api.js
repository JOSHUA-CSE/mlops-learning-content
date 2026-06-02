import axios from 'axios'

const api = axios.create({
  baseURL: '/api', // replace the /api to actual api. If you're using ECS, then paste your BE api URL here, e.g. http://your-ecs-endpoint/api 
})

export default api