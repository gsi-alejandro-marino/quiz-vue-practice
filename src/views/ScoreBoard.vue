<template>
  <div class="scpre-board-box centered">
    <h1>Score table</h1>
    <b-table
      hover
      :items="scores"
    ></b-table>
  </div>
</template>
<script>
export default {
  name: 'scores',
  data () {
    return {
      scores: []
    }
  },
  mounted: function () {

    fetch('https://sleepy-wildwood-42061.herokuapp.com/score', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      }).
      then((jsonData) => {
        this.scores = jsonData
      })
  }
}
</script>