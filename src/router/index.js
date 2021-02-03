import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import QuestionType from '../views/QuestionType.vue'
import ScoreBoard from '../views/ScoreBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: Quiz
  },
  {
    path: '/question-type',
    name: 'question-type',
    component: QuestionType
  },
  {
    path: '/scores',
    name: 'scores',
    component: ScoreBoard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
