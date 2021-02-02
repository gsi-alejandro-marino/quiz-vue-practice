<template>
  <div class="select-question-box">
    <b-container class="bv-example-row centered">

      <b-row>

        <b-col
          sm="6"
          offset="3"
        >

          <h1>Select a question type</h1>

          <b-form @submit.prevent="handleSubmitForm">
            <b-form-group
              id="select-question-type-options-2"
              label-for="select-question-type-options"
            >
              <b-form-select
                id="select-question-type-options"
                v-model="selected"
                :options="options"
                class="mb-3"
                value-field="id"
                text-field="name"
              ></b-form-select>
            </b-form-group>
            <b-button
              type="submit"
              variant="primary"
              class="mb-3"
            >Start quiz</b-button>
          </b-form>

        </b-col>
      </b-row>
      <b-row>
        <b-col
          sm="6"
          offset="3"
        >
          <b-alert
            v-model="showDismissibleAlert"
            variant="danger"
            dismissible
          >
            Select an option
          </b-alert>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import router from '@/router'
export default {
  data () {
    return {
      selected: null,
      options: [{ id: null, name: 'Please select an option' }],
      showDismissibleAlert: false
    }
  },
  computed: {
    isValid () {
      return this.selected !== null
    }
  },
  methods: {
    ...mapActions([
      'selectedCategoryId'
    ]),
    handleSubmitForm () {
      if (this.selected === null) {
        this.showAlert()
        return
      }
      const payload = {
        id: this.selected
      }
      this.selectedCategoryId(payload)

      router.push({ name: 'quiz' })
    },
    showAlert () {
      this.showDismissibleAlert = true
    }
  },
  mounted: function () {
    fetch('https://opentdb.com/api_category.php', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      }).
      then((jsonData) => {
        this.options = [...this.options, ...jsonData.trivia_categories]
      })
  }
}
</script>
