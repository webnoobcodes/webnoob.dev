<template>
  <div id="newsletter">
    <h3>Get notified</h3>
    <p>New tutorials, courses, and articles straight into your inbox. Your email address will never be shared.</p>
    <form @submit.prevent>
      <input class="email-signup" type="email" v-model="email" placeholder="Enter Email" @keyup.enter="signup">
      <div class="button" @click="signup">GO!</div>
    </form>
    <div class="statustext">{{ statustext }}</div>   
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        email: '',
        subscribed: false,
        statustext: '',
      }
    },
    methods: {
      signup() {
        this.statustext = '';

        let formData = {
          email: this.email
        }

        if(this.emailIsValid(this.email)) {
          this.$http.post('/api/subscribe', JSON.stringify(formData))
          .then(response => {
            return response.json();
          }, error => {
            if(error.status === 400) {
              this.email = '';
            }
          })
          .then((result) => {
            if(result.msg) {
              this.subscribed = true;
              this.statustext = result.msg;
              this.email = '';
            }            
          });
        }
        else {
          this.statustext = 'Please enter a valid email address';
        }        
      },
      emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      }
    }
  }
</script>