
let store = {
	save(key,value){
		localStorage.setItem(key,JSON.stringify(value));
	},
	fetch(key){
		return JSON.parse(localStorage.getItem(key)) || [];
	}
};

var list = store.fetch('hehe');
//过滤的时候有三种情况 all finished unfinished
var filter = {
	all : function(list){
		return list
	},
	finished : function(list){
		return list.filter(function(item){
			return item.isChecked
		})
	},
	unfinished : function(list){
		return list.filter(function(item){
			return !item.isChecked
		})
	}
};

/*var list = [
	{
		title:"吃饭打豆豆",
		isChecked:false //状态为false，为不选中  任务未完成
	},
	{
		title:"妙味课堂",
		isChecked:true   //状态为true，为选中    任务完成
	}
];*/
var vm = new Vue({
	el : '.main',
	data : {
		list : list,
		todo : '',
		edtorTodos : '',
		haha : '哈哈你妹..',  // html里可以直接用{{haha}}，editing:item===edtorTodos,editing这个css样式加不加...
		beforeTitle : '',
		visibility : 'all'
	},
	watch : {
		/*list : function(){
			store.save('hehe',this.list);
		}*/
		list : {//监控list这个属性，当这个属性对应的值发生变化就会执行函数,选中还是没有选中对勾..
			handler : function(){
				store.save('hehe',this.list);
			},
			deep : true
		}
	},
	computed:{
		/*noCheckeLength:function(){
			return this.list.filter(function(item){
                return !item.isChecked
            }).length
		},*/
		hahanoCheckeLength : function(){
			return this.list.filter((item)=>!item.isChecked).length
		},
		filteredList : function(){
			return filter[this.visibility] ? filter[this.visibility](this.list) : this.list;
		}
	},
	methods : {
		addTodo(data,ev){
			this.list.push({
				title : this.todo,
				isChecked : false
			});
			this.todo = '';
		},
		deleteTodo(todo){
			var index = this.list.indexOf(todo);
			this.list.splice(index,1);
		},
		edtorTodo(todo){
			this.beforeTitle = todo.title;
			this.edtorTodos = todo;
		},
		edtorTodoend(todo){
			this.edtorTodos = '';
		},
		cancelTodo(todo){
			todo.title = this.beforeTitle;
			this.beforeTitle = '';
			this.edtorTodos = '';
		}
	},
	directives:{
		"foucs":{
			update(el,binding){
				if(binding.value){
					el.focus();
				}
			}
		}
	}
});

let watchHashChange = ()=>{
	var hash = window.location.hash.slice(1);
	vm.visibility = hash;
};
watchHashChange();
window.addEventListener('hashchange',watchHashChange);


/*vm.list.push({
	title : 'ja'
},{
	title : 'japp'
});*/










