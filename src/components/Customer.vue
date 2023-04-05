<template>
    <div class="form">
        <h4 style="text-align: center;">Customer Details</h4>
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
        fields: ["customerId", "customerName", "address", "DOB", "contactNumber", "email", "installment_plan", "used_amount", "credit_limit"],  
        striped: true,
        bordered: true,
        outlined: true
        }
    }, 
    mounted() {
        this.loadCustomers();
    }, 
    methods: {
        async loadCustomers() {
            let response  = await axios.get("/bumblebee-apis/api/V1/Customers")
            let allcustomers = response.data;
            let allItems = [];
            allcustomers.forEach(customer => {
                allItems.push({
                    customerID: customer.customerID,
                    customerName: customer.customerName,
                    address: customer.address,
                    dob: customer.dob,
                    contactNumber: customer.contactNumber,
                    email: customer.email,
                    installmentPlan: customer.installmentPlan,
                    usedAmount: customer.usedAmount,
                    creditLimit: customer.creditLimit 

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
    width: 70%;
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