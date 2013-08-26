module.exports = {
	db: 'mongodb://localhost:27017/test',
	leftbar:[
						{"group":"首页", "name":"用户管理", "link":"/users"},
						{"group":"首页", "name":"订单管理", "link":"/sales"},
						{"group":"首页", "name":"采购管理", "link":"/purches"},
						{"group":"首页", "name":"商品管理", "link":"/products"},
						{"group":"首页", "name":"钱流管理", "link":"/finaces"},

						{"group":"用户管理", "name":"创建用户", "link":"/users/new"},
						{"group":"用户管理", "name":"用户查询", "link":"/users"},
					]
};