<template>
    <div class="form">
        <h4 style="text-align: center;">Customer Details</h4>
        <b-table class="margins" hover :items="items" :striped="striped" :bordered="bordered"
            :outlined="outlined"></b-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
          { customerId: '', customerName: '', address: '', DOB: '', contactNumber: '', email: '', installment_plan: '', used_amount: '', credit_limit:''}
        ],
        striped: true,
        bordered: true,
        outlined: true
        }
    }, 
    
}
</script>

<style lang="css" scoped>
.form {
    margin: auto;
    width: 70%;
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