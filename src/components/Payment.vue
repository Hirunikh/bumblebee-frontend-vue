<template>
    <div class="form">
        <h2 style="text-align: center;">Payment</h2>
        <b-form @create="onCreate" @update="onUpdate">
            <b-form-group class="margins" id="input-group-1" label="Payment-Id:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.id" placeholder="Autogenerate ID" ></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-2" label="Loan-Id:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.loanid" placeholder="Enter Loan Id" required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-3" label="Payment-Amount:" label-for="input-3">
                <b-form-input id="input-3" v-model="form.paymentamount" placeholder="Enter Amount" required></b-form-input>
            </b-form-group>
            <label class="margins" for="example-datepicker">Payment Date</label>
            <b-form-datepicker id="datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            <b-form-group class="margins" id="input-group-4" label="Payment-Status:" label-for="input-4">
                <b-form-input id="input-4" v-model="form.paymentstatus" placeholder="Enter Status" required></b-form-input>
            </b-form-group>
            <div class="buttonsAtBottom">
                <b-button class="padding" type="create" variant="primary">Create</b-button>
                <b-button class="padding" type="update" variant="secondary">Update</b-button>
            </div>

        </b-form>
        <div>
            <h5 style="text-align: center;">Payment Details</h5>
            <b-table class="margins" hover :items="items" :striped="striped" :bordered="bordered"
                :outlined="outlined"></b-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "",
            form: {
                id: '',
                loanid: '',
                paymentamount: '',
                paymentstatus: ''
            },
            items: [
                { paymentId: '', loanId: '',paymentAmount: '', paymentDate: '',  paymentStatus: '' }
            ],
            striped: true,
            bordered: true,
            outlined: true
        }
    },
    methods: {
        onCreate() {

        },
        onUpdate() {

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