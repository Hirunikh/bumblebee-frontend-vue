<template>
<div class="form">
        <h4 style="text-align: center;">Payment Details</h4>
        <b-table class="margins" hover :items="items" :striped="striped" :bordered="bordered"
            :outlined="outlined"></b-table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
        items: [],
        fields: ["paymentId", "loanId", "paymentAmount", "paymentDate", "paymentStatus"],       
        striped: true,
        bordered: true,
        outlined: true
        }
    }, 
    mounted() {
        this.loadPayments();
    }, 
    methods: {
        async loadPayments() {
            let response  = await axios.get("/bumblebee-apis/api/V1/Payment")
            let allpayments = response.data;
            let allItems = [];
            allpayments.forEach(payment => {
                allItems.push({
                    paymentID: payment.paymentID,
                    loanID: payment.loanID,
                    paymentAmount: payment.paymentAmount,
                    paymentDate: payment.paymentDate,
                    paymentStatus: payment.paymentStatus

                })
            })
            this.items = allItems;
        }  
    }
}
</script>

<style lang="css" scoped>
.form {
    margin: auto;
    width: 80%;
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
    margin: 5px 0px 5px 0px;
}

.padding {
    margin: 1rem;
}
</style>