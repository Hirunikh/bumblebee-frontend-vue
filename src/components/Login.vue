<template>
    <div class="form" >
        <div>
            <img src="/img/logo.png" style="padding:1rem; width: 100%;">
        </div>
        <h4 style="text-align: center;">Welcome Back!</h4>
        <h6 style="text-align: center;">Login to Bumbel-Bee with your username and password.</h6>
        <b-form >
            <b-form-group class="margins" id="input-group-1" label="UserName:" label-for="input-1">
                <b-form-input id="input-1"  v-model="form.username" placeholder="Enter Your Username" required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-2" label="Password:" label-for="input-2">
                <b-form-input id="input-2" type="password" v-model="form.password" placeholder="Enter a Password" required></b-form-input>
            </b-form-group>
            <div class="buttonsAtBottom">
                <b-button class="padding" type="button" v-on:click="$router.push('/dashboard')" variant="primary">Login</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
export default {

    data() {
        return {
            value: "",
            form: {
                username: 'Admin',
                password: 'Admin@1234',
            },
        }
    },
    methods: {
        onLogin() {

        }
    }
}
</script>

<style lang="css" scoped>
.form {
    margin: auto;
    width: 50%;
    border: 2px solid grey;
    padding: 10px;
    border-radius: 30px;
    background-color: white;

}

.buttonsAtBottom {
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    justify-content: center;

}

.margins {
    margin: 5px 0px 5px 0px;
}

.padding {
    margin: 1rem;
}
</style>