<template>
		<div class="mainpage">
			<div class="sidenav">
			<img class="companypic" src="@/assets/companypic.png">
			<a class="companyname">Company Name</a>
					<router-link to="/profile"><li  > Company Profile</li>  </router-link>

			<router-link to="/employee"><li class="active">Employees</li> </router-link>
						<router-link to="/time"><li > Time Records</li>  </router-link>
			<router-link to="/people">	<li>Overview Operations</li>  </router-link>
	
			<router-link to="/authD"><li  >Authorized Devices</li>  </router-link>
			<img class="sky2" src="@/assets/sky2.png">
				</div>
			<h1 class="date"> Employee List </h1>
		
			<div class="searchdiv">
				
			</div>
		
		</div>
</template>
<script type="text/javascript">

</script>
<style type="text/css">
	body{
			font-family: Montserrat;
			background-color: #F8F8F8;
		background: none !important ; 
	}
	.upperright{
	
		float: right;
	}
	.active{
		color: #4E4F50;
	}
	.companypic{
		height: 180px;
		width: 180px;
		margin-left: 25px;
		margin-bottom: 20px;
	}
	.sky2{
		margin-top: 25px;
		height: 214px;
		width: 300px;
	}
	.btnadd{

		padding: 15px 50px 15px;
		color: 		#fff;
		background-color: #3AACDC;
		border-style: none;
		border-radius: 5px;
		}
	.searchtxt{

		margin-right: 350px;
		float: right;
		padding: 10px 30px 10px;
		margin-top: 25px;
		border-style: none;
		background-color: #D8D8D8;
		color: 		#3AACDC;

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
	font-size: 15px;
	margin-left: 20px;
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