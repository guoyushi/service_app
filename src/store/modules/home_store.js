export default{
	state:{
		title:"到位",
		position:{}
	},
	mutations:{
		setPosition(state,val){
			console.log(val)
			state.position = val
		}
	}
}