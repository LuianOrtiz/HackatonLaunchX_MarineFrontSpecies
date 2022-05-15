<template>
  <div class="container">
    <div class="card float-left">
      <div class="row ">

        <div class="col-sm-7">
          <div class="card-block">
            <h4 class="card-title">{{titulo1}}</h4>
            <p>{{parrafo1}}</p>
            <p>{{parrafo2}}</p>
            <a href="#" class="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>

        <div class="col-sm-5">
          <img class="d-block w-100" src="https://picsum.photos/150?image=641" alt="">
        </div>
      </div>
    </div>

    <div class="card float-right">
      <div class="row">
        <div class="col-sm-5">
          <img class="d-block w-100" src="https://picsum.photos/150?image=641" alt="">
        </div>
        <div class="col-sm-7">
          <div class="card-block">
            <h4 class="card-title">{{titulo2}}</h4>
            <p>{{parrafo3}}</p>
            <p>{{parrafo4}}</p>
            <br>
            <a href="#" class="btn btn-primary btn-sm float-right">Read More</a>
          </div>
        </div>
 
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "App",
    props: {
    titulo1: String,
    titulo2: String,
    parrafo1: String,
    parrafo2: String,
    parrafo3: String,
    parrafo4: String
  }
}
</script>

<style scoped>
body {
  background-color:  #eee;
}
.title {
 
    margin-bottom: 50px;
    text-transform: uppercase;
}

.card-block {
    font-size: 1em;
    position: relative;
    margin: 0;
    padding: 1em;
    border: none;
    border-top: 1px solid rgba(34, 36, 38, .1);
    box-shadow: none;
     
}
.card {
    font-size: 1em;
    overflow: hidden;
    padding: 5;
    border: none;
    border-radius: .28571429rem;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    margin-top:20px;
}

.btn {
  margin-top: auto;
}
</style>