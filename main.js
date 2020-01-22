

var app = new Vue({
    //parameters: 
    el: "#app", //use the div with id=app here
    data:{
        product: "Lazeez",
        image: "./manyplates.jpg",
        drinkImage: "",
        link: "https://lazeezshawarma.com/",
        i: 11,
        onSale: false,
        menuItems: ["On the rocks", "On the sticks", "On the grass"],
        meats:[
            {
                meatID: 2234,
                meatType: "chicken",
            },
            {
                meatID: 2235,
                meatType: "beef",
            }
        ],
        sizes: [
            {   
                sizeName: "Nafis Size",
                sizeImage: "./small_box.jpeg"
            },
            {
                sizeName: "Umar Size",
                sizeImage: "./medium_box.jpeg"
            },
            {
                sizeName: "Ephraim Size",
                sizeImage: "./large_box.jpeg"
            }
        ],
        drinks: [
            {   
                drinkName: "Fanta Orange",
                drinkImage: "./fanta_orange.jpeg",
                drinkColor: "orange"
            },
            {
                drinkName: "Fanta Lemon",
                drinkImage: "./fanta_lemon.jpeg",
                drinkColor: "yellow"
            },
        ],
        cart: 0,
        linesofHeat: 0
    },
    methods:{
        addToCart: function(){
            this.cart+=1
            this.linesofHeat = 0;
            this.image = "./manyplates.jpg";
            this.drinkImage = ""
        },
        clearCart: function(){
            this.cart = 0
        },
        addLine: function(){
            this.linesofHeat+=1;
        },
        removeLine(){
            if (this.linesofHeat>0){
                this.linesofHeat-=1;
            }else{
                alert="cant be neg";
            }
        },
        updateProduct(sizeImage){
            this.image = sizeImage;
        },
        ogImage(){
            this.image = "./manyplates.jpg";
        },
        updateDrinkImage(drinkI){
            this.drinkImage = drinkI;
        }
    }
})