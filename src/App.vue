<template>
    <div id="app" class="container m-t-20">
        <div class="tabs">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/users">User</router-link>
                </li>
                <li>
                    <router-link to="/groups">Group</router-link>
                </li>
            </ul>
        </div>
        <router-view />
    </div>
</template>
<style>
    .m-t-20 {
        margin-top: 20px;
    }
</style>