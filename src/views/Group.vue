<template>
	<div>
		<notification :errors="errors"></notification>	
	 	<form action="" @submit.prevent="addGroup()">
	 		<div class="field">
			  <label class="label">Name</label>
			  <div class="control">
			    <input class="input" type="text" placeholder="Text input" v-model="name" required="">
			  </div>
			</div>
			<div class="field">
			  <div class="control">
			    <button type="submit" class="button is-success">Add</button>
			  </div>
			</div>
	 	</form>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="group in groups">
                    <td>{{group.name}}</td>
                    <td>
                        <button class="button is-danger is-small" @click="deleteGroup(group.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
 	</div>
</template>

<script>
import api from '@/api/app'

export default {
	data() {
		return {
			groups: [],
			name: '',
			errors: null
		}
	},
	methods: {
		getGroups(){
 			api.getGroups()
 				.then(res => this.groups = res.data.groups)
				.catch(err => console.log(err))
		},
		deleteGroup(id){
			api.deleteGroup(id)
				.then(response => this.getGroups())
				.catch(err => this.errors = err.response.data.error);
		},
		addGroup() {
			api.addGroup({name: this.name})
				.then(() => {
					this.name = ''
					this.getGroups()
				})
				.catch(err => this.errors = err.response.data.error)
		}
	},
    created() {
       this.getGroups()
    }
}
</script>
