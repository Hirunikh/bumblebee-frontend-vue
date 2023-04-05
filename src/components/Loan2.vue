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
            <b-table class="margins" hover :items="items" :striped="striped" :bordered="bordered"
                :outlined="outlined"  sticky-header></b-table>
        </div>
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
            items: [
                {
                    loanId: '', 
                    installmentPlan: '',
                    interestRate: '',
                    loanAmount: '',
                    paymentDueDate: '',
                    customerName: '',
                    productName: ''
                }
            ],
            striped: true,
            bordered: true,
            outlined: true
        }
    },
    methods: {
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
                        productName: report.product.productName
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
    width: 50%;
    border: 2px solid grey;
    padding: 10px;
    border-radius: 10px;
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