import Vue from 'vue'
import Router from 'uni-simple-router';
Vue.use(Router);
const router = new Router({
	routes: [{
			path: "/pages/tabbar/tabbar-1/tabbar-1",
			name: 'tabbar-1'
		},
		{
			path: "/pages/tabbar/tabbar-2/tabbar-2",
			name: 'tabbar-2'
		},
		{
			path: "/pages/tabbar/tabbar-3/tabbar-3",
			name: 'tabbar-3'
		},
		{
			path: "/pages/tabbar/tabbar-4/tabbar-4",
			name: 'tabbar-4',
			other: {
				H5Name: ''
			},
			beforeEnter: (to, from, next) => {
				to.other.H5Name = to.query.name
				next();
			}
		},
		{
			path: "/pages/tabbar/tabbar-5/tabbar-5",
			name: 'tabbar-5'
		},
		{
			path: "/pages/router/router1/router1",
			name: 'router1'
		}, {
			path: "/pages/router/router2/router2",
			name: 'router2',
			beforeEnter: (to, from, next) => {
				next({
					name: 'router3',
					params: {
						msg: '我是从router2路由拦截过来的'
					}
				});
			}
		}, {
			path: "/pages/router/router3/router3",
			name: 'router3'
		}, {
			path: "/pages/router/router4/router4",
			name: 'router4'
		},
		{
			path: "/pages/router/router5/router5",
			name: 'router5'
		},
		{
			path: "/pages/router/router6/router6",
			name: 'router6'
		}
	]
});

router.beforeEach((to, from, next) => {
	if (to.name == 'tabbar-5') {
		next({
			name: 'router4',
			params: {
				msg: '我拦截了tab5并重定向到了路由4页面上',
			},
			NAVTYPE: 'push'
		});
		//next();
	}
	// console.log(to);
	// console.log(from)
})
router.afterEach((to, from) => {
	// console.log(to);
	// console.log(from)
})
// console.log(router)

export default router
