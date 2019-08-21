import Homepage from './components/Homepage.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Time from './components/Time.vue'
import Sidebar from './components/Sidebar.vue'
import People from './components/People.vue'
import Profile from './components/Profile.vue'
import Employee from './components/Employee.vue'
import AuthorizedD from './components/AuthorizedD.vue'

export default[
	{path: '/', component:Homepage},
	{path: '/login', component:Login},
	{path: '/signup', component:Signup},
	{path: '/time', component:Time},
	{path: '/people', component:People},
	{path: '/profile', component:Profile},
	{path: '/employee', component:Employee},
	{path: '/authd', component:AuthorizedD}
]