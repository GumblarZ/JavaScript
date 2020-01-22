

<template>
<div>
    <div id="Slogan">
      <div class="text-center">
          <h1>namegator meu <span class="fa fa-check"></span> </h1>
          <br>
          <h6 class="text-secondary"> Gerador de nomes utilizando Vue.js,GraphQL e Node </h6>
      </div>
    </div>
	
    <div id="main">
		<DomainList></DomainList>
    </div>
 </div> 
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import DomainList from "./components/DomainList";


export default {
	name: 'app',
	components:{
		DomainList
	}	
};
</script>

<style>
#Slogan{
  margin-top: 30px;
  margin-bottom: 30px;
}

#main{
  background-color: #F1F1F1;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
