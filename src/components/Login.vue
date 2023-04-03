<template>
    <div class="form">
        <h2 style="text-align: center;">Bumble-Bee</h2>
        <h4 style="text-align: center;">Welcome Back!</h4>
        <h6 style="text-align: center;">Login to Bumbel-Bee with your username and password.</h6>
        <b-form @login="onLogin">
            <b-form-group class="margins" id="input-group-1" label="UserName:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.username" placeholder="Enter Your Username" required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-2" label="Password:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.password" placeholder="Enter a Password" required></b-form-input>
            </b-form-group>
            <div class="buttonsAtBottom">
                <b-button class="padding" type="login" variant="primary">Login</b-button>
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
                username: '',
                password: '',
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