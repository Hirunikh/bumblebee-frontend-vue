<template>
    <div class="form">
        <h2 style="text-align: center;">Inventory</h2>
        <b-form>
            <b-form-group class="margins" id="input-group-1" label="Inventory ID:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.id" placeholder="Autogenerate ID"></b-form-input>
            </b-form-group>
            <!-- <b-form-group class="margins" id="input-group-2" label="Product ID:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.productid" placeholder="Enter Product Id" required></b-form-input>
            </b-form-group> -->
            <b-form-group class="margins" id="input-group-2" label="Product:" label-for="input-2">
                <b-form-select class="select" v-model="form.productid" :options="products">
                    <template #first>
                        <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                    </template>
                </b-form-select>
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
                <b-button class="padding" type="button" v-on:click="onCreate" variant="primary">Create</b-button>
                <b-button class="padding" type="button" v-on:click="onUpdate" variant="success">Update</b-button>
                <b-button class="padding" type="reset" v-on:click="$router.push('/inventory')" variant="secondary">Clear</b-button>
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
                    <span><b-btn variant="outline-danger" @click="deleteItem(item)">Delete</b-btn></span>
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
                productid: null,
                stocklocation: '',
                stockquantity: '',

            },
            products: [],
            items: [],
            fields: ["inventoryId", "productId", "stockLocation", "stockQuantity", "select", "delete"],
            striped: true,
            bordered: true,
            outlined: true
        }
    },
    mounted() {
        this.loadInventries();
        this.loadProduct();
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

        async loadProduct() {
            let response  = await axios.get("/bumblebee-apis/api/V1/Product")
            let allproducts = response.data;
            let allItems = [];
            allproducts.forEach(product => {
                allItems.push({
                    value: product.productID,
                    text: product.productName
                    // productDescription: product.productDescription,
                    // categoryId: product.categoryID,
                    // brandId: product.brandID,
                    // price: product.price,
                    // quantity: product.quantity
                })

            })
            this.products = allItems;
        },

        async deleteItem(item) {
            await axios.delete(`/bumblebee-apis/api/V1/Inventory/${item.inventoryId}`)
                .then(response => {
                    console.log(response);
                    this.loadInventries();
                });
        },
        selectItem(item) {
            this.form.id = item.inventoryId;
            this.form.productid = item.productId;
            this.form.stocklocation = item.stockLocation;
            this.form.stockquantity = item.stockQuantity;
        },
        async onCreate() {
            await axios.post('/bumblebee-apis/api/V1/Inventory', {
                productID: this.form.productid,
                stockLocation: this.form.stocklocation,
                stockQuantity: this.form.stockquantity
            })
                .then(response => {
                    console.log(response);
                    this.loadInventries();
                })
        },
        async onUpdate() {
            await axios.put(`/bumblebee-apis/api/V1/Inventory/${this.form.id}`, {}, {
                params: {
                productID: this.form.productid,
                stockLocation: this.form.stocklocation,
                stockQuantity: this.form.stockquantity
                }
            })
                .then((response) => {
                    console.log(response);
                    this.loadInventries();
                });
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
}

.select {
    width: 100%;
    padding: 0.4rem;
}
</style>