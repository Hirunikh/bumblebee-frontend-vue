<template>
    <div class="form" style="background-color: white;">
        <div>
            <img src="/img/logo.png" style="padding:1rem; width: 100%;">
        </div>
 
        <b-form  @register="onRegister" @submit="onLogin">

            <div class="buttonsAtBottom">
                <b-button class="padding" type="submit" variant="danger">Register</b-button>
            </div>

            <div class="buttonsAtBottom">
                <b-button class="padding" type="submit" variant="success">Login</b-button>
            </div>

        </b-form>
    </div>
</template>

<script>
export default {

    data() {
        return {
            form: {
                // username: '',
                // password: '',
            },
        }
    },
    methods: {
        onRegister() {

        },
        onLogin() {

}
    }
}
</script>

<style lang="css" scoped>
.form {
    margin: auto;
    width: 30%;
    border: 2px solid grey;
    border-radius: 10px;
    padding: 10px;
    background-color:white
}

.buttonsAtBottom {
    display: flex;
    margin-top: 0px;
    margin-bottom: 0px;
    justify-content: center;

}

.margins {
    margin: 5px 0px 5px 0px;
}

.padding {
    margin: 1rem;
}

.btn {
    width: 60%;
}
</style>