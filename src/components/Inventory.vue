<template>
    <div class="form">
        <h2 style="text-align: center;">Inventory</h2>
        <b-form>
            <b-form-group class="margins" id="input-group-1" label="Inventory ID:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.id" placeholder="Autogenerate ID"></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-2" label="Product ID:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.productid" placeholder="Enter Product Id" required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-3" label="Stock Location:" label-for="input-3">
                <b-form-input id="input-3" v-model="form.stocklocation" placeholder="Enter Stock Location"
                    required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-4" label="Stock Quantity:" label-for="input-4">
                <b-form-input id="input-4" v-model="form.stockquantity" placeholder="Enter Stock Quantity"
                    required></b-form-input>
            </b-form-group>
            <div class="buttonsAtBottom">
                <b-button class="padding" type="create" variant="primary">Create</b-button>
                <b-button class="padding" type="update" variant="secondary">Update</b-button>
            </div>

        </b-form>
        <div>
            <h5 style="text-align: center;">Inventory Details</h5>
            <b-table class="margins" hover :items="items" :fields="fields" :striped="striped" :bordered="bordered"
                :outlined="outlined">
                <template v-slot:cell(select)="{ item }">
                    <span><b-btn @click="selectItem(item)" variant="outline-primary">Select</b-btn></span>
                </template>
                <template v-slot:cell(delete)="{ item }">
                    <span><b-btn variant="outline-success" @click="deleteItem(item)">Delete</b-btn></span>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            form: {
                id: '',
                productid: '',
                stocklocation: '',
                stockquantity: '',

            },
            items: [],
            fields: ["inventoryId", "productId", "stockLocation", "stockQuantity", "select", "delete"],
            striped: true,
            bordered: true,
            outlined: true
        }
    },
    mounted() {
        this.loadInventries();
    },

    methods: {
        async loadInventries() {
            let response  = await axios.get("/bumblebee-apis/api/V1/Inventory")
            let alllInventries = response.data;
            let allItems = [];
            alllInventries.forEach(inventory => {
                allItems.push({
                    inventoryId: inventory.inventoryID,
                    productId: inventory.productID,
                    stockLocation: inventory.stockLocation,
                    stockQuantity: inventory.stockQuantity
                })
            })
            this.items = allItems;
        },
        async deleteItem(item) {
            await axios.delete(`/bumblebee-apis/api/V1/Category/${item.categoryId}`)
                .then(response => {
                    console.log(response);
                    this.loadCategories();
                });
        },
        selectItem(item) {
            this.form.id = item.inventoryId;
            this.form.productid = item.productId;
            this.form.stocklocation = item.stockLocation;
            this.form.stockquantity = item.stockQuantity;
        },
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
}</style>