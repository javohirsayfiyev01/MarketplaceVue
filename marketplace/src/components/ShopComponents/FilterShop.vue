<template>
  <section class="filter-shop">
    <div class="filter-shop__container container">
      <div class="filter-shop__wraper">
        <h3 class="filter-shop__title">Filtrlash:</h3>

          <div class="filter-shop__dropdown">

            <select class="filter-shop__item">
              <option value="">Bo'lim</option>
              <option value="women">Ayollar atiri</option>
              <option value="male">Erkaklar atiri</option>
              <option value="everyone">Bolalar atiri</option>
             </select>

             <select class="filter-shop__item">
              <option value="">Davlat</option>
              <option value="luxurious">USA</option>
              <option value="golden">Turkiya</option>
              <option value="aurum">Xitoy</option>
              <option value="aurum">Yevropa</option>
             </select>

             <select class="filter-shop__item">
              <option value="">Narxi</option>
              <option value="gilded">Eng qimmat</option>
              <option value="glamourous">Eng arzon</option>
             </select>

        </div>
        <div class="search-bar">
          <input type="text" placeholder="Search...">
            <a type="submit">
               <img src="@/img/icon/search-icon.svg" alt="404">
            </a>
        </div>
    </div>
    </div>
  </section>
</template>
<script>
export default {

}
</script>
<style scoped>
.filter-shop{
  margin-top: 30px;
}
.filter-shop__title{
  font-weight: 500;
  font-size: 20px;
  margin: 0;
  padding: 0;
  margin-right: 80px;
  color: rgb(255, 255, 255);
}
.filter-shop__wraper{
  display: flex;
  align-items: center;
}

.filter-shop__dropdown{
  position: relative;
  display: flex;
  cursor: pointer;
  gap: 50px;
}

.filter-shop__item{
  background-color: black;
  color: white;
  border: none;
}
.filter-shop__content option{
  border: none;
  box-shadow: 0px 2px 15px #AB572D;
  font-weight: 200;
  font-size: 15px;
  cursor: pointer;
}
select>option {
    color: #AB572D;
}
.filter-shop__content:hover{
  color: #AB572D;
}


.search-bar {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.search-bar input {
  padding: 5px;
  font-size: 1.2em;
  border: none;
  color: white;
  background-color: black;
  border-radius: 10px;
  outline: none;
}
.search-bar input:hover{
  box-shadow: 0px 8px 16px #AB572D;
  background-color: rgb(26, 25, 25);
  opacity: 0.8;
}
</style>