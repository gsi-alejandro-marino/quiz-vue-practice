<template>
  <div tabs>
    <b-nav>
      <b-nav-item disabled><b>Fancy Quiz App</b></b-nav-item>
      <b-nav-item disabled>Counter: {{ numCorrect }}/{{ numTotal}}</b-nav-item>
      <b-nav-item disabled>Participant: {{ name }}</b-nav-item>
      <b-nav-item disabled>Your time: {{ timerClock }}</b-nav-item>
    </b-nav>
  </div>
</template>


<script>
export default {
  props: {
    numCorrect: Number,
    numTotal: Number,
    name: String,
    timerClock: String
  }
}
</script>