<template>
		<div class="mainpage">
			<div class="sidenav">
			<img class="companypic" src="@/assets/companypic.png">
			<ion-item v-for="(comp, idx) in comps" :key="idx">
			<a class="companyname">{{comp.name}}</a>
			
			</ion-item>
			<router-link to="/profile"><li  class="active"> Company Profile</li>  </router-link>
			<router-link to="/employee"><li>Employees</li> </router-link>
			<router-link to="/time"><li > Time Records</li>  </router-link>
			<router-link to="/people">	<li>Overview Operations</li>  </router-link>
			<router-link to="/authD"><li >Authorized Devices</li>  </router-link>
			<img class="sky2" src="@/assets/sky2.png">
				</div>
			<div class="header">
			
					
			<table border="1" v-for="(comp, idx) in comps" :key="idx">
			<tr>
			<th rowspan="2"><img class="companypicprofile" src="@/assets/companypic.png"></th>
			<td>	
			<a class="companynameprofile">{{comp.name}}</a>
			</td>
			</tr>
			<tr>
	<td><a class="companyaddrprofile">{{comp.address}}</a></td>
				</tr>
					</table>
			</div>
		</div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
        comps: []
        
    };
  },
  computed: {
  },
  methods: {
    getCompany() {
     this.$crud("companies").find().then(res => {
            this.comps = res.data;
            // console.warn(res.data);
        });
    }
},

  mounted () {
    this.getCompany();
  }
};
</script>
<style type="text/css">
.companyaddrprofile{

}
.companypicprofile{
	text-align: left;
		height: 180px;
		width: 180px;
				margin-bottom: 20px;		
}
.header{
		color: white;
		margin: 20px 100px 0px 320px;
		padding: 20px 70px 0px;
		background-color: #fff;
		text-align: center;
		border-radius: 5px;
 text-align: center;
        background-color:#3AACDC;
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
	body{
			font-family: Montserrat;
			background-color: #F8F8F8;
		background: none !important ; 
	}
	.active{
		color: #4E4F50;
	}
	.companypic{
			height: 180px;
		width: 180px;
		margin-left: 25px;
	
	}
	.sky2{
		margin-top: 25px;
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
		text-align: center;
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