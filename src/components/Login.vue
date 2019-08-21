<template>
	<div class="main">
	 <img class="logohere" src="@/assets/skyclock.png">
	 	<div class="login">
	 		<h1> L O G I N </h1> <br>
	 		<input class="lform" type="text" name="email" placeholder="Email"> <br>
	 		<input class="lform"type="password" name="password" placeholder="Password"> <br>
	 		<p>Forgot Password?</p>
	 		<router-link to="/profile"> <button class="btnlogin">Login</button> </router-link>
	 		<br>
	 		<router-link to="/signup"> <a>New here? Sign up now</a> <br> </router-link>
	 	</div>
	</div>
</template>
<script type="text/javascript"></script>
<style scoped>
 	body{
 		background-color: #BBD8FF;
 	
 	}
 	h1{
 		font-weight:normal; 
 		letter-spacing: 5px;
 		margin-top: -20px;
 		margin-bottom: 10px;
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
		font-family: Montserrat;

	}
	.lform{
		margin-top: 10px;
		 width: 80%;
 		 padding: 15px 20px;
 		 margin-bottom: 10px;
 		 border: none;
		border-radius: 20px;
		background-color:#D6EEF7;
	}
	
	.login{

		  margin: 20px 450px 20px;
		padding: 70px 70px ;
		background-color: #fff;
		 text-align: center;
		 border-radius: 5px;
		   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
	}
	.btnlogin{
		margin-bottom: 50px;
		background-color: #DCA43A;
	
		padding: 15px 50px;
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
	
</style>