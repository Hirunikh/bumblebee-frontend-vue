<template>
    <div class="form">
        <h2 style="text-align: center;">Inventory</h2>
        <b-form @create="onCreate" @update="onUpdate" @delete="onDelete">
            <b-form-group class="margins" id="input-group-1" label="Inventory-Id:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.id" placeholder="Autogenerate ID" ></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-2" label="Product-Id:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.productid" placeholder="Enter Product Id" required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-3" label="Stock-Location:" label-for="input-3">
                <b-form-input id="input-3" v-model="form.stocklocation" placeholder="Enter Stock Location" required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-4" label="Stock-Quantity:" label-for="input-4">
                <b-form-input id="input-4" v-model="form.stockquantity" placeholder="Enter Stock Quantity" required></b-form-input>
            </b-form-group>
            <div class="buttonsAtBottom">
                <b-button class="padding" type="create" variant="primary">Create</b-button>
                <b-button class="padding" type="update" variant="secondary">Update</b-button>
                <b-button class="padding" type="delete" variant="danger">Delete</b-button>
            </div>

        </b-form>
        <div>
            <h5 style="text-align: center;">Inventory Details</h5>
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
                productid: '',
                stocklocation: '',
                stockquantity: '',

            },
            items: [
                { inventoryId: '', productId: '', stockLocation: '', stockQuantity: '' }
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

        },
        onDelete() {

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