<template>
    <div class="form">
        <h2 style="text-align: center;">Loan Report</h2>
        <h6 style="text-align: center;">Loan Report - Existing Loans For a Customer </h6>

        <b-form @submit="onSearch">

            <b-form-group class="margins" id="input-group-5" label="Customer ID:" label-for="input-5">
                <b-form-input id="input-5" v-model="form.customerId" placeholder="Enter Customer Id" ></b-form-input>
            </b-form-group>

            <div class="buttonsAtBottom">
                <b-button class="padding" type="submit" variant="primary">Search</b-button>
            </div>

        </b-form>
        <div>
            <h5 style="text-align: center;">Loan Details</h5>
            <b-table class="margins" hover :items="items" :fields="fields" :striped="striped" :bordered="bordered"
                :outlined="outlined"  sticky-header>
                <template  v-slot:cell(payments)="{ item }">
                    <span><b-btn  @click="showPayments(item)" :disabled="item.paymentsList.length <= 0" :variant="item.paymentsList.length <= 0? '': 'outline-primary'" >View</b-btn></span>
                </template>
            </b-table>
        </div>
        <b-modal ref="modal-payments" ok-only size="lg" id="modal-1" title="Loan Payments">
            <b-table class="margins" hover :items="payments" :striped="striped" :bordered="bordered"
                :outlined="outlined"  sticky-header>
            </b-table>
        </b-modal>
    </div>
</template>
<script>
import axios from 'axios'

export default {

    data() {
        return {
            form: {
                 customerId: null
            },
            payments: [{
                paymentId: 'id',
                paymentAmount: 0.0,
                paymentDate: 'date'
            }],
            fields: ["loanId", "installmentPlan", "interestRate", "loanAmount", "paymentDueDate", "productName", "payments"],           
            items: [
                // {
                //     loanId: '', 
                //     installmentPlan: '',
                //     interestRate: '',
                //     loanAmount: '',
                //     paymentDueDate: '',
                //     customerName: '',
                //     productName: ''
                // }
            ],
            striped: true,
            bordered: true,
            outlined: true
        }
    },
    methods: {
        showPayments(event) {
            this.payments = event.paymentsList;
            this.$refs['modal-payments'].show()
        },
        async onSearch(event) {
            event.preventDefault()
            console.log("Search:", this.form)

            if (this.form.customerId != null) {
                let response = await axios.get(`/bumblebee-apis/api/V1/Customers/${this.form.customerId}/existing-loans`)
                let reports = response.data;
                let itemsArray = []
                reports.forEach(report => {
                    itemsArray.push({
                        loanId: report.loanInfo.loanID, 
                        installmentPlan: report.loanInfo.installmentPlan,
                        interestRate: report.loanInfo.interestRate,
                        loanAmount: report.loanInfo.loanAmount,
                        paymentDueDate: report.loanInfo.paymentDueDate,
                        productName: report.product.productName,
                        paymentsList: report.payments
                    })
                })
                this.items = itemsArray;
            }
        }
    }

}
</script>

<style lang="css" scoped>
.form {
    margin: auto;
    width: 70%;
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
    margin: 8px 0px 8px 0px;
}

.padding {
    margin: 1rem;
}
</style>