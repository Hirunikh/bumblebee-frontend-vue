<template>
    <div class="form-group form">

        <div>
            <img src="/img/logo.png" style="padding:1rem; width: 100%;">
        </div>

        <div class="btn-group-verticle btn-group-justified">

            <div class="buttonsAtBottom">
                <b-button class="padding" type="button" variant="secondary" v-on:click="$router.push('/customers')">Customer Details</b-button>
            </div>

            <div class="buttonsAtBottom">
                <b-button class="padding" type="button" variant="secondary" v-on:click="$router.push('/products')">Products</b-button>
            </div>

            <div class="buttonsAtBottom">
                <b-button class="padding" type="button" variant="secondary" v-on:click="$router.push('/brands')">Brands</b-button>
            </div>

            <div class="buttonsAtBottom">
                <b-button class="padding" type="button" variant="secondary" v-on:click="$router.push('/categories')">Categories</b-button>
            </div>

            <div class="buttonsAtBottom">
                <b-button class="padding" type="button" variant="secondary" v-on:click="$router.push('/inventory')">Inventory</b-button>
            </div>

            <div class="buttonsAtBottom">
                <b-button class="padding" type="button" variant="secondary" v-on:click="$router.push('/payments')">Payments</b-button>
            </div>

            <div class="buttonsAtBottom">
                <b-button class="padding" type="button" variant="secondary" v-on:click="$router.push('/loans')">Loan Report - By Date Period</b-button>
            </div>

            <div class="buttonsAtBottom">
                <b-button class="padding" type="button" variant="secondary" v-on:click="$router.push('/loans-existing')">Loan Report - By Customer ID</b-button>
            </div>

        </div>
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
        onCustomer() {

        },
        onProduct() {

        },
        onBrand() {

        },
        onCategory() {

        },
        onInventory() {

        },
        onPayments() {

        },
        onLoan() {

        },
        onLoan2() {

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
    background-color:white;
    border-radius: 10px;
    background-color: white;
}

.buttonsAtBottom {
    display: flex;
    margin-top: 0px;
    margin-bottom: 0px;
    justify-content: center;
    width: 100%;
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