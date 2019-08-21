<template>
		<div class="mainpage">
			<div class="sidenav">
			<img class="companypic" src="@/assets/companypic.png">
			<a class="companyname">Company Name</a>
			<li class="active"> Time Records</li>
			<li>Employees</li>
			<li>Overview Operations</li>
			<li> Company Profile</li>
			<img class="sky2" src="@/assets/sky2.png">
				</div>
		
		</div>
</template>
<script type="text/javascript"></script>
<style scoped >
	body{
			font-family: Montserrat;
			background-color: #F8F8F8;
		background: none !important ; 
	}
	.active{
		color: #4E4F50;
	}
	.companypic{
		height: 214px;
		width: 214px;
		margin-left: 23px;
		margin-bottom: 20px;
	}
	.sky2{
		height: 214px;
		width: 300px;
	}
	.date{
		margin-left: 300px;
		float: left;
		text-align: center;
		font-weight: bold;
		color: 		#3AACDC;
	}
.companyname{
	text-transform: uppercase;
		font-size: 10px;
		margin: 5px;
		margin-bottom: 30px;
}
li{
	color: #fff;
	list-style-type: none;
	margin: 10px;
	margin-left: 50px;
	margin-bottom: 20px;
}
li:active{
	background-color: #4E4F50;
}
.sidenav {
  height: 100%;
  width: 260px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color:#3AACDC;
  overflow-x: hidden;
  padding-top: 20px;

}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #fff;
  display: block;
}

.sidenav a:hover {
  color: #fff;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

</style>