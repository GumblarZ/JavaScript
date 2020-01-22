<template>
<div>
    
	
    <div id="main">
      
        <div class="container">
            <div class="row">
                <div class="col-md">
                  <AppItemList title="Prefixos" v-bind:items="prefixes" v-on:addItem="addPrefix" v-on:deleteItem="deletePrefix"></AppItemList>
                   
                </div>
                
                <div class="col-md">
                  <AppItemList title="Sufixos" v-bind:items="sufixes" v-on:addItem="addSufix" v-on:deleteItem="deleteSufix"></AppItemList>
                   
                </div>
            </div>
            <br>
            <div class="col-md">
                <div class="card">
                    <div class="card-body">
                        <h5>Dominios <span class="badge badge-info"> {{domains.length}}</span> </h5>
                        <ul class="list-group">
                            <li class="list-group-item" v-for="meupal in domains" v-bind:key="meupal.name">
								<div class="row">
								<div class="col-md">
								{{ meupal.name }} 
								</div>
								<div class="col-md text-right">
								<a class="btn btn-info" v-bind:href="meupal.checkout" target="_blank">
								<span class="fa fa-shopping-cart"></span>	
								</a>
								</div>	
								</div> 
							</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
 </div> 
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import AppItemList from "./AppItemList";


export default {
	name: 'app',
	components:{
		AppItemList	
	},
	data: function ( ){
		return{
			
			prefixes: ["peixe","ronaldo"],
			sufixes: ["paulo","pizza"],
			
		};
	},
	methods:{	
		addPrefix(prefix){
			this.prefixes.push(prefix);
			
			
		},
		deletePrefix(prefix){
			this.prefixes.splice(this.prefixes.indexOf(prefix),1);
			
		},
		addSufix(sufix) {
			this.sufixes.push(sufix);
			
			
		},
		deleteSufix(sufix){
			this.sufixes.splice(this.sufixes.indexOf(sufix),1);
			
		}
	},
	computed:{
		domains() {
			
			const domains = [];
			for (const prefix of this.prefixes){
				for (const sufix of this.sufixes){
					const name = prefix + sufix;
					const url = name.toLowerCase();
					const checkout = `https://checkout.hostgator.com.br/?a=add&sld=${url}&tld=.com.br`
					domains.push({name,checkout});
				}
			}
			return domains;
		},
		
	} 


	
	
};
</script>

<style>

</style>