import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_API
});

export default {
	addUser(payload){
      	return api.post('/users', payload)
	},
	getUsers(){
		return api.get('/users')
	},
	attachGroup(userId, groupId){
		return api.post(`/users/${userId}/groups/${groupId}`)
	},
	dettachGroup(userId, groupId){
		return api.delete(`/users/${userId}/groups/${groupId}`)
	},
	deleteUser(id){
		return api.delete('/users/' + id)
	},
	addGroup(payload){
      	return api.post('/groups', payload)
	},
	getGroups(){
		return api.get('/groups')
	},
	deleteGroup(id){
		return api.delete('/groups/' + id)
	}
}