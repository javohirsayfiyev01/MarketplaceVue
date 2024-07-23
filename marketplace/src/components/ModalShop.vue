<template>
  <div class="modal">
<div class="modal__container container">
  <div class="modal__box">
    <span class="close">&times;</span>
    <h2 class="modal__title">Added to cart!</h2>
  </div>
</div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
/* .modal{
  display: none;
  position: fixed;
  z-index: 1;
} */
.modal__box{
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  background-color: black;

}
.modal__title{
  font-weight: 500;
  font-size: 15px;
  padding: 15px;
  color: chartreuse;
}
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  text-decoration: none;
  cursor: pointer;
}
</style>