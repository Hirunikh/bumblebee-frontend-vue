<template>
    <div class="form">
        <div>
            <img src="/img/logo.png" style="padding:1rem; width: 100%;">
        </div>
        <h2 style="text-align: center;">Register</h2>
        <b-form>
            <b-form-group class="margins" id="input-group-1" label="Name:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.name" placeholder="Enter Full Name" required></b-form-input>
            </b-form-group>

            <b-form-group class="margins" id="input-group-2" label="Email address:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.email" type="email" placeholder="Enter email"
                    required></b-form-input>
            </b-form-group>

            <label class="margins" for="example-datepicker">Date of Birth</label>
            <b-form-datepicker id="datepicker" v-model="value" class="mb-2"></b-form-datepicker>

            <b-form-group class="margins" id="input-group-4" label="Address:" label-for="input-4">
                <b-form-input id="input-4" v-model="form.address" placeholder="Enter Your Address" required></b-form-input>
            </b-form-group>

            <b-form-group class="margins" id="input-group-5" label="Telephone:" label-for="input-5">
                <b-form-input id="input-5" v-model="form.contactnumber" placeholder="Enter Your Contact Number"
                    required></b-form-input>
            </b-form-group>

            <b-form-group class="margins" id="input-group-6" label="Password:" label-for="input-6">
                <b-form-input id="input-6" type="password" v-model="form.password" placeholder="Enter Your Password"
                    required></b-form-input>
            </b-form-group>

            <b-form-group class="margins" id="input-group-7" label="Confirm Password:" label-for="input-7">
                <b-form-input id="input-7"  type="password" v-model="form.confirmpassword" placeholder="Confirm Your Password"
                    required></b-form-input>
            </b-form-group>

            <div class="buttonsAtBottom">
                <b-button class="padding" type="button" v-on:click="onRegister" variant="primary">Register</b-button>
                <b-button class="padding" type="button" v-on:click="$router.push('/')" variant="danger">Cancel</b-button>
            </div>

        </b-form>

        <b-modal ref="modal-msg" ok-only size="sm" id="modal-1" title="Message" @ok="handleOk">
            <p class="my-4">Successfully Registered!</p>
        </b-modal>

        <!-- <b-card class="mt-3" header="Customer Registration Form">
            <pre class="m-0">{{ form }}</pre>
        </b-card> -->

    </div>
</template>
<script>
import axios from 'axios'

export default {

    data() {
        return {
            value: "",
            form: {
                name: '',
                email: '',

                address: '',
                contactnumber: '',
                password: '',
                confirmpassword: ''
            },
        }
    },
    methods: {
        onCancel() {

        },
        // switchVisibility(){
        //     this.password = this.password === "password" ? "text" : "password" ;
        //        },

        async onRegister() {
            await axios.post('/bumblebee-apis/api/V1/Customers', {
                customerName: this.form.name,
                email: this.form.email,
                dob:this.value,
                address: this.form.address,
                contactNumber: this.form.contactnumber,
                password: this.form.password,
                confirmpassword: this.form.confirmpassword,
            })
                .then(response => {
                    console.log(response);
                    this.$refs['modal-msg'].show()
                })
        },
        handleOk() {
            this.$router.push("/");
        },
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