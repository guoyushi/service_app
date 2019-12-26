export default {
	state: {
		title: "到位",
		position: {},
		recruitScrollY: 0
	},
	getters: {
		recruitScrollY: state => state.recruitScrollY
	},
	mutations: {
		setPosition(state, val) {
			console.log(val)
			state.position = val
		},
		changeRecruitScrollY(state, recruitScrollY) {
            state.recruitScrollY = recruitScrollY;
        }
	}
}