<template>
    <div>
        <notification :errors="errors"></notification>
        <form action="" @submit.prevent="addUser()">
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
                    <th>Groups</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users">
                    <td>{{user.name}}</td>
                    <td>
                        <label class="checkbox m-l-20" v-for="group in groups">
                            <input type="checkbox" :checked="isCheck(user.groups, group.id)" @change="toggleGroup($event.target.checked, user.id, group.id)"> {{group.name}}
                        </label>
                    </td>
                    <td>
                        <button class="button is-danger is-small" @click="deleteUser(user.id)">Delete</button>
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
            users: [],
            groups: [],
            name: '',
            errors: null
        }
    },
    methods: {
        isCheck(groups, id) {
            return groups.some(g => id == g.id)
        },
        getGroups() {
            api.getGroups()
                .then(res => this.groups = res.data.groups)
                .catch(err => console.log(err))
        },
        getUsers() {
            api.getUsers()
                .then(res => this.users = res.data.users)
                .catch(err => console.log(err))
        },
        deleteUser(id) {
            api.deleteUser(id)
                .then(response => this.getUsers())
                .catch(err => this.errors = err.response.data.error)
        },
        toggleGroup(checked, userId, groupId) {
            let action = checked ? 'attachGroup' : 'dettachGroup'
            api[action](userId, groupId)
                .then(response => {})
                .catch(err => this.errors = err.response.data.error)
        },
        addUser() {
            api.addUser({ name: this.name })
                .then(() => {
                    this.name = ''
                    this.getUsers()
                })
                .catch(err => this.errors = err.response.data.error)
        }
    },
    created() {
        this.getUsers()
        this.getGroups()
    }
}
</script>

<style>
    .m-l-20 {
        margin-left: 20px;
    }
</style>