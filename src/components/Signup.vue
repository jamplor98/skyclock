<template>
	<div class="main">
	 <img class="logohere" src="@/assets/skyclock.png">
	 <h3 class="titletop"> Company Register	 </h3> <br>
	 	<div class="login">	 		
	 	    <table class="">
	 	    <tr>
		 	    <td class="lformname" >Company Logo</td>
		 	    <td>
		 	    <img v-bind:src="imagePreview" class="preview-image" v-on:click="openUpload">
		 	    </td>
		 	    <td>
		 	    <input type="file" @change="GetImage" name="image" id="file-field">
		 	    </td>
	 	    </tr>
	 	    <tr>
		 	    <td class="lformname" >Company Name</td> 
		 	    <td>
		 		<input class="lform" type="text" v-model="comp.name">
		 	    </td>
	 	    </tr>
	 	     <tr>
		 	    <td class="lformname" >Address</td> 
		 	    <td>
		 		<textarea rows="4" cols="50" class="lform" v-model="comp.address" ></textarea>
		 	    </td>
	 	    </tr>
	 	     <tr>
		 	    <td class="lformname" >Contact Person</td> 
		 	    <td>
		 		<input class="lform" type="text" v-model="hr.fname" >
		 	    </td>
	 	    </tr>
	 	     <tr>
		 	    <td class="lformname" >Position</td> 
		 	    <td>
		 		<input class="lform" type="text" v-model="hr.position"  >
		 	    </td>
	 	    </tr>
	 	    <tr>
		 	    <td class="lformname" >Email Address</td> 
		 	    <td>
		 		<input class="lform" type="text" v-model="hr.email"  >
		 	    </td>
	 	    </tr>
	 	    <tr>
		 	    <td class="lformname" >Contact No</td> 
		 	    <td>
		 		<input class="lform" type="text" v-model="hr.contactno" >
		 	    </td>
	 	    </tr>	 		
	 	    </table>
	 	    <div class="footerdiv">	 	
	 		<router-link to="/profile"> <button class="btnlogin" @click="addCompany">Signup</button> </router-link>
	 		<br>
	 		<router-link to="/login">  <a>Already have an account? Login here</a> <br> </router-link>
	 	    </div>
	 	</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				imagePreview: '@/assets/placeholder-cirlce.png',
				hr: {					
					fname:'',
					position:'',
					email:'',
					contactno: ''
				},
				comp: {
					name: '',
					address: ''
				}
			}
	},
		methods: {
			GetImage(e){			
				let image = e.target.files[0]
				let reader = new FileReader();
				reader.readAsDataUrl(image);
				reader.onload = e => {
					this.imagePreview = e.target.result
				}
	},
     addCompany() {
      this.$crud('companies')
      .save(this.comp)
       
      .catch( err => {
         console.error(err);
      });
       this.$crud('employees')
      .save(this.hr)
       .then(res=>{
         
         setTimeout(() => {
           this.$router.push('/profile');
         }, 800);
      })
      .catch( err => {
         console.error(err);
      });
    }
	}

	};
</script>
<style scoped>
	.lformname{
		vertical-align: middle;
		padding: 5px;
		text-align: left;
	    font-family: Montserrat;
	    font-size: 13px;
	}
	.preview-image{
		height: 100px;
		width: 100px;
	}
	.titletop{
		margin-left: 250px;
		margin-top: 50px;
	}
 	body{
 		background-color: #BBD8FF; 	
 	}
 	h3{
 		font-weight:normal; 
 		font-weight: bold;
 		font-family: Montserrat;
 	}
	.logohere{
		height:150px;
		margin-left: 100px;
	}	
	p{
		font-family: Montserrat;
	}
	a{
		font-size: 10px;
		font-family: Montserrat;

	}
	.lform{
		margin-top: 10px;
		width: 150%;
 		padding: 15px 20px;
 		margin-bottom: 10px;
 		border: none;
		border-radius: 20px;
		background-color:#D6EEF7;
	}
	
	.login{
		margin: 20px 200px 20px;
		padding: 70px 70px ;
		background-color: #fff;
		text-align: center;
		border-radius: 5px;
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
	}
	.btnlogin{
		margin-bottom: 15px;
		background-color: #DCA43A;
	    margin-top: 40px;
		padding: 15px 80px;
		text-decoration: none;
		border: none;
		border-radius: 20px;
		color: white;
	    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
	}
	.btnlogin:hover {
		background-color: #D08902; /* Green */
		color: white;
	}
	.footerdiv{
		text-align:  right;
	}
	
</style>