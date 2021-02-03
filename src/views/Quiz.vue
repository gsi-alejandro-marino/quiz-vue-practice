<template>
  <div class="question-box">
    <Header
      :numCorrect="numCorrect"
      :numTotal="numTotal"
      :name="nameAlias"
      :timerClock="formattedElapsedTime"
    />
    <b-container class="bv-example-row">
      <b-row>
        <b-col
          sm="6"
          offset="3"
        >
          <div v-if="showBox">
            <QuestionBox
              v-if="questions.length"
              :currentQuestion="questions[index]"
              :next="next"
              :increment="increment"
              :isLastQuestion="index + 1 === 4"
            />
          </div>
          <div v-else>
            <ResultBox
              :totalTime="formattedElapsedTime"
              :correctAnswers="numCorrect"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header.vue'
import QuestionBox from '@/components/QuestionBox.vue'
import ResultBox from '@/components/ResultBox.vue'

export default {
  components: {
    Header,
    QuestionBox,
    ResultBox
  },
  data () {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      elapsedTime: 0,
      timer: undefined,
      started: false,
      showBox: true
    }
  },
  methods: {
    next: function () {
      this.index++
      if (this.index === 4) {
        this.showBox = false
        this.stop()
        this.sendScore()
      }
    },
    increment (isCorrect) {
      if (isCorrect) {
        this.numCorrect++
      }
      this.numTotal++
    },
    zeroPrefix (num, digit) {
      var zero = '';
      for (var i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    },
    start () {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
      }, 1000);
    },
    stop () {
      clearInterval(this.timer);
    },
    reset () {
      this.elapsedTime = 0;
    },
    sendScore () {
      const data = {
        "username": this.nameAlias,
        "score": this.numCorrect,
        "time": this.timer
      }
      fetch('https://sleepy-wildwood-42061.herokuapp.com/score', {
        method: 'post',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
      })
        .then((response) => {
          return response.json()
        })
    }
  },
  computed: {
    ...mapState({
      nameAlias: 'name',
      categoryId: 'categoryId'
    }),
    formattedElapsedTime () {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    }
  },
  mounted: function () {
    if (this.categoryId !== 0) {
      fetch('https://opentdb.com/api.php?amount=20&category=' + this.categoryId, {
        method: 'get'
      })
        .then((response) => {
          return response.json()
        }).
        then((jsonData) => {
          this.questions = jsonData.results
          this.start()
        })
    }
  }

}
</script>
