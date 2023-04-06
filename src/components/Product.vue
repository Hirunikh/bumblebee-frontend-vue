<template>
    <div class="form" >
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
            
            <b-form-group class="margins" id="input-group-4" label="Category:" label-for="input-4">
                <b-form-select class="select" v-model="form.categoryId" :options="categories">
                    <template #first>
                        <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                    </template>
                </b-form-select>
            </b-form-group>
           
            <b-form-group class="margins" id="input-group-4" label="Brand:" label-for="input-4">
                <b-form-select class="select" v-model="form.brandId" :options="brands">
                    <template #first>
                        <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                    </template>
                </b-form-select>
            </b-form-group>
            <b-form-group class="margins" id="input-group-6" label="Price:" label-for="input-6">
                <b-form-input id="input-6" v-model="form.price" placeholder="Enter Product Price" required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-7" label="Quantity:" label-for="input-7">
                <b-form-input id="input-7" v-model="form.quantity" placeholder="Enter Product Quantity" required></b-form-input>
            </b-form-group>
            <div class="buttonsAtBottom">
                <b-button class="padding" type="button" v-on:click="onCreate" variant="primary">Create</b-button>
                <b-button class="padding" type="button" v-on:click="onUpdate" variant="secondary">Update</b-button>
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
                categoryId: null,
                brandId: null,
                price: '',
                quantity: '',
            },
            brands: [],
            categories: [],
            items: [],
            fields: ["productId", "productName", "productDescription", "categoryId", "brandId", "price", "quantity", "select", "delete"],    
        striped: true,
        bordered: true,
        outlined: true
        }
    },
    mounted() {
        this.loadProduct();
        this.loadCategories();
        this.loadBrands();
    },
    methods: {
        async loadProduct() {
            let response  = await axios.get("/bumblebee-apis/api/V1/Product")
            let allproducts = response.data;
            let allItems = [];
            allproducts.forEach(product => {
                allItems.push({
                    productId: product.productID,
                    productName: product.productName,
                    productDescription: product.productDescription,
                    categoryId: product.categoryID,
                    brandId: product.brandID,
                    price: product.price,
                    quantity: product.quantity
                })

            })
            this.items = allItems;
        },
        async deleteItem(item) {
            await axios.delete(`/bumblebee-apis/api/V1/Product/${item.productId}`) 
                .then(response => {
                    console.log(response);
                    this.loadProduct();
                });
        },
        selectItem(item) {
            this.form.id = item.productId;
            this.form.productname = item.productName;
            this.form.productdescription = item.productDescription;
            this.form.categoryId = item.categoryId;
            this.form.brandId = item.brandId;
            this.form.price = item.price;
            this.form.quantity = item.quantity;
        },
        async loadCategories() {
            let response = await axios.get("/bumblebee-apis/api/V1/Category")
            let allCategories = response.data;
            let allItems = [];
            allCategories.forEach(category => {
                allItems.push({
                    value: category.categoryID,
                    text: category.categoryName
                })
            })
            this.categories = allItems;
        },
        async loadBrands() {
            let response  = await axios.get("/bumblebee-apis/api/V1/Brand")
            let allbrands = response.data;
            let allItems = [];
            allbrands.forEach(brand => {
                allItems.push({
                    value: brand.brandID,
                    text: brand.brandName
                })
            })
            this.brands = allItems;
        },    

        // onCreate() {
        //     console.log(this.form)
        // },
        async onCreate() {
            await axios.post('/bumblebee-apis/api/V1/Product', {

                productName: this.form.productname,
                productDescription: this.form.productdescription,
                categoryID: this.form.categoryId,
                brandID: this.form.brandId,
                price: this.form.price,
                quantity: this.form.quantity

            })
                .then(response => {
                    console.log(response);
                    this.loadProduct();
                })
        },
        async onUpdate() {
            await axios.put(`/bumblebee-apis/api/V1/Product/${this.form.id}`, {
                productName: this.form.productname,
                productDescription: this.form.productdescription,
                categoryID: this.form.categoryId,
                brandID: this.form.brandId,
                price: this.form.price,
                quantity: this.form.quantity

            }, {
                // params: {
                //     productName: this.form.productname,
                //     productDescription: this.form.productdescription,
                // categoryID: this.form.categoryId,
                // brandID: this.form.brandId,
                // price: this.form.price,
                // quantity: this.form.quantity
                // }
                
            })
                .then((response) => {
                    console.log(response);
                    this.loadProduct();
                });
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

.select {
    width: 100%;
    padding: 0.4rem;
}

</style>