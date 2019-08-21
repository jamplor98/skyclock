<template>
	<div class="Homepage">
			<div class="navbar">
		<img class="logo" src="@/assets/skyclock.png">
		<div class="mainmenu">
			
		<router-link to="/signup"> <a class="menu" >Sign up</a> </router-link>
		<router-link to="/login">	<a class="menu" >Login</a> </router-link>
		</div>
		
	</div>
		<div class="item1">
			<ul class="list" >
				<li class="tag"> 
					<img class="phone" src="@/assets/phone.png">
				</li>
				<li class="tag">  
					<img class="manager" src="@/assets/manager.png">
				</li>
				<li class="tag text textclock" > CLOCK IN / OUT 
				</li>
				<li class="descright"> Facial ID, Biometrics, and Location Tracking
				</li>
			</ul>
				<router-link to="/signup">  <button class="button"> Get Started</button> </router-link>

		</div>
		<div class="item2">
			<ul class="list" >
				<li class="tag text textmanage" > MANAGE EMPLOYEES
				</li>
				<li class="desc"> Attendance, Performance Tracking, and HR Module 
				</li>
				<li class="tag"> 
					<img class="table" src="@/assets/tables-512.png">
				</li>
				<router-link to="/signup"> <button class="button1" > Try it now </button> </router-link>
				
			</ul>
		</div>
		<div class="item3">
			<ul class="list" >
				<li class="tag"> 
					<img class="group" src="@/assets/group2.png">
				</li>
				
				<li class="tag  text newtext textoverview" > OVERVIEW OPERATIONS
				</li>
				<li class="descrightbottom"> General Company Overview
				</li>	
			</ul>
				<router-link to="/signup">  <button class="button buttonsad"> Start Now </button> </router-link>

		</div>
	
	</div>

</template>
<script></script>
<style src="@/components/homepage.css" scoped  > 
	
</style>