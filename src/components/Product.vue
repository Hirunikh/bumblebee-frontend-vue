<template>
    <div class="form">
        <h2 style="text-align: center;">Product</h2>
        <b-form>
            <b-form-group class="margins" id="input-group-1" label="Product ID:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.id" placeholder="Autogenerate ID" ></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-2" label="Product Name:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.productname" placeholder="Enter Product Name" required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-3" label="Product Description:" label-for="input-3">
                <b-form-input id="input-3" v-model="form.productdescription" placeholder="Enter Product Description" required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-4" label="Category ID:" label-for="input-4">
                <b-form-input id="input-4" v-model="form.categoryId" placeholder="Enter Category Id"  required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-5" label="Brand ID:" label-for="input-5">
                <b-form-input id="input-5" v-model="form.brandId"  placeholder="Enter Brand Id"  required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-6" label="Price:" label-for="input-6">
                <b-form-input id="input-6" v-model="form.price" placeholder="Enter Product Price" required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-7" label="Quantity:" label-for="input-7">
                <b-form-input id="input-7" v-model="form.quantity" placeholder="Enter Product Quantity" required></b-form-input>
            </b-form-group>
            <div class="buttonsAtBottom">
                <b-button class="padding" type="create" variant="primary">Create</b-button>
                <b-button class="padding" type="update" variant="secondary">Update</b-button>
            </div>

        </b-form>
        <div>
            <h5 style="text-align: center;">Product Details</h5>
            <b-table class="margins" hover :items="items" :fields="fields" :striped="striped" :bordered="bordered" :outlined="outlined">
                <template  v-slot:cell(select)="{ item }">
                    <span><b-btn  @click="selectItem(item)" variant="outline-primary" >Select</b-btn></span>
                </template>
                <template v-slot:cell(delete)="{ item }">
                    <span><b-btn variant="outline-success" @click="deleteItem(item)"  >Delete</b-btn></span>
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
                productname: '',
                productdescription: '',
                categoryId: '',
                brandId: '',
                price: '',
                quantity: ''
            },
            items: [],
            fields: ["productId", "productName", "productDescription", "categoryId", "brandId", "price", "quantity", "select", "delete"],    
        striped: true,
        bordered: true,
        outlined: true
        }
    },
    mounted() {
        this.loadProduct();
    },
    methods: {
        async loadProduct() {
            let response  = await axios.get("/bumblebee-apis/api/V1/Product")
            let allproducts = response.data;
            let allItems = [];
            allproducts.forEach(product => {
                allItems.push({
                    productID: brand.productID,
                    productName: brand.productName,
                    productDescription: brand.productDescription,
                    categoryID: brand.categoryID,
                    brandID: brand.brandID,
                    price: brand.price,
                    quantity: brand.quantity
                })

            })
            this.items = allItems;
        },
        async deleteItem(item) {
           await axios.delete("")
           this.loadBrands();
        },
        selectItem(item) {
            this.form.id = item.productID;
            this.form.productname = item.productName;
            this.form.productdescription = item.productDescription;
            this.form.categoryId = item.categoryID;
            this.form.brandId = item.brandID;
            this.form.price = item.price;
            this.form.quantity = item.quantity;
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