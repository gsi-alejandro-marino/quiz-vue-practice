<template>
  <div class="scpre-board-box centered">
    <h1>Score table</h1>
    <b-table
      hover
      :items="scores"
    ></b-table>
    <b-row>
      <b-col
        sm="6"
        offset="3"
      >
        <router-link to="/">Try again</router-link>
      </b-col>
    </b-row>
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
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + 'https://sleepy-wildwood-42061.herokuapp.com/score', {
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