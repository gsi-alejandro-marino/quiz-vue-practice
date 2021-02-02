<template>
  <div class="result-box">
    <b-row align-v="center">
      <b-col
        sm="6"
        offset="3"
      >
        <h2>You finished!!!</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6">
        <h2>Correct answers: {{correctAnswers}} </h2>
      </b-col>
      <b-col sm="6">
        <h2>Your time: {{ totalTime }} min</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        sm="6"
        offset="3"
      >
        <router-link to="/">Try again</router-link> |
        <router-link to="/">Score board</router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    totalTime: String,
    correctAnswers: Number,
  }
}
</script>