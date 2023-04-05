<template>
    <div class="form">
        <h2 style="text-align: center;">Loan Report</h2>
        <h6 style="text-align: center;">Loan Report - Filter by Date Period</h6>

        <b-form @submit="onSearch">
            <label class="margins" for="example-datepicker">From: </label>
            <b-form-datepicker id="datepicker-from" placeholder="Select Time Period" v-model="form.fromDate" class="mb-2" value-as-date></b-form-datepicker>

            <label class="margins" for="example-datepicker">To: </label>
            <b-form-datepicker id="datepicker-to" placeholder="Select Time Period" v-model="form.toDate" class="mb-2" :min="form.fromDate" value-as-date></b-form-datepicker>

            <!-- <b-form-group class="margins" id="input-group-5" label="Customer ID:" label-for="input-5">
                <b-form-input id="input-5" v-model="form.customerId" placeholder="Enter Customer Id" ></b-form-input>
            </b-form-group>

            <b-form-group class="margins" id="input-group-6" label="Product ID:" label-for="input-6">
                <b-form-input id="input-6" v-model="form.productId" placeholder="Enter Product Id"
                    ></b-form-input>
            </b-form-group> -->

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
                fromDate: new Date(),
                toDate: null
                // customerId: '',
                // productId: ''
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

            if (this.form.toDate != null) {
                let response = await axios.get('/bumblebee-apis/api/V1/Loan/report/due-within', {
                    params: {
                        fromDate: this.form.fromDate.toISOString(),
                        toDate: this.form.toDate.toISOString()
                    }
                });
                let reports = response.data.loanReports;
                let itemsArray = []
                reports.forEach(report => {
                    itemsArray.push({
                        loanId: report.loanInfo.loanID, 
                        installmentPlan: report.loanInfo.installmentPlan,
                        interestRate: report.loanInfo.interestRate,
                        loanAmount: report.loanInfo.loanAmount,
                        paymentDueDate: report.loanInfo.paymentDueDate,
                        customerName: report.customerInfo.customerName,
                        productName: report.product.productName
                    })
                })
                this.items = itemsArray;
                console.log(response)
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
    border-radius: 10px;
    padding: 10px;
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