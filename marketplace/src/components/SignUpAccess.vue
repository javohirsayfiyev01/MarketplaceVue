<template>
  <section class="signup">
    <div class="signup__container container">
      <div class="signup-box">
          <h1 class="signup-box__title">Sign Up</h1>
      </div>

      <form class="input-group">
        <input class="input-group__input" type="text" v-model="name" id="name" required placeholder="Name">
        <input class="input-group__input" type="text" v-model="lastname" id="lastname" required placeholder="Last Name">
        <input class="input-group__input" type="email" v-model="email" id="email" required placeholder="Email Address">
        <input class="input-group__input" type="text" v-model="number" id="day" name="day" required placeholder="Number">

        <div class="signup-btn__box">
          <button class="input-group__input-btn button"  type="submit">submit</button>
      </div>
      </form>
      </div>
  </section>
</template>
<script>
export default {
  name: 'SignUpAccess',
  data(){
    return{
      name: '',
      lastname: '',
      email: '',
      number: '',
    }
  },
  methods:{
    handleSubmit() {
      this.$emit('user-registered',{
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        number: this.number,
      })
    },
  }
}
</script>
<style scoped>

.signup{
  margin-top: 80px;
  padding-bottom: 30px;
}
.signup-box{
  display: flex;
  justify-content: center;
}
.signup-box__title{
  width: 350px;
  height: 100px;
  margin: 0 0 16px;
  padding: 0;
  text-align: center;
  font-weight: 700;
  font-size: 64px;
  line-height: 100px;
  color: white;
}

.input-group{
  border-radius: 4px;
  width: 550px;
  height: 150px;
  margin: 0px auto 90px auto;
  padding: 0;
  gap: 10px 50px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
}
.input__container, h5{
  color: rgb(166, 166, 166);
  margin: 10px 0 0 0;
  margin-left: 26.5%;
  width: 140px;
}
.input__container, hr{
  width: 100%;
  height: auto;
  margin: 10px;
  border: 1px solid #302f2f;
}

.input-group__input{
  padding: 0 81px 3px 4px;
  border: none;
  width: 245px;
  height: 40px;
  border-bottom: 1px solid #979797;
  font-weight: 600;
  font-size: 15px;
  opacity: 60%;
  line-height: 25px;
  background-color: transparent;
  color: white;
}
.input-group__input::placeholder{
  color: #979797;
}
.input-group__input-mes{
  padding: 0 81px 59px 14px;
  height: 84px;
}
.input-group__input:not(:last-child){
  margin-right: 30px;
  margin-top: 25px;
}
.signup-btn__box{
  display: flex;
  justify-content: center;

  
  margin-top: 40px;
}
.input-group__input-btn{
  height: 48px;
  border: none;
  border-radius: 30px;
  padding: 9px 32px 11px 32px;
  text-align: center;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;

}
</style>