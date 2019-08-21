<template>
	<div class="navbar">
		<img class="logo" src="@/assets/skyclock.png">
		<div class="mainmenu">
			<a class="menu" href="#">About</a>
			<a class="menu" href="#">Services</a>
			<a class="menu" href="#">Contact</a>
			<a class="menu" href="#">Login Now</a>
		</div>
		
	</div>
	
</template>
<script>

</script>
<style scoped > 
	
	.navbar{
		height: 64px;
	}
	.logo{
		position: absolute;
		height:150px;
		margin-left: 100px;
	}
	.mainmenu{
		float:right;
		margin-right: 100px;
		margin-top: 40px;
	}
	.menu{
		font-family: Montserrat;
		float:left;
		font-size: 12px;
		text-decoration: none;    
		color: #0D5665;
		padding: 10px;
		margin-right: 30px;
	}
	.menu:hover{
			color: #000
	}
</style>