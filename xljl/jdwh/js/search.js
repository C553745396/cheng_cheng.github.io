
/*搜索*/

function sear(){
	var sch;
		document.getElementById('search').onkeyup=function(){
			clearTimeout(sch)
			sch=setTimeout(function(){
				var Search = this.value;
				console.log(Search)
				var st=getData().filter(function(age){
					id=age.id,name=age.name;

					return id.indexOf(Search)!=-1 || name.indexOf(Search)!=-1
				})
				console.log(st)
			}.bind(this),1000)
			
		}
		var filrdata=getData().filter(function(age){
			console.log(typeof age.id)

				id=age.id

			})
}
	