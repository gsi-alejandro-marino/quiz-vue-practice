<template>
  <div class="home-view-container">
    <b-container class="bv-example-row centered">
      <b-row>
        <b-col
          sm="6"
          offset="3"
        >
          <h1>Welcome to app quiz app</h1>
          <b-form @submit.prevent="handleSubmitForm">
            <b-form-group
              id="input-group-2"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                type="text"
                v-model="formData.name"
                placeholder="Enter name"
                required
              ></b-form-input>
            </b-form-group>
            <b-button
              type="submit"
              variant="primary"
            >Start</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import router from '@/router'
export default {

  name: 'home',
  data () {
    return {
      formData: {
        name: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addName'
    ]),
    handleSubmitForm () {
      const { name } = this.formData
      const payload = {
        name
      }
      this.addName(payload)
      // reset the form
      this.formData = {
        name: '',
      }
      router.push({ name: 'question-type' })
    },
  }
}
</script>