import axios from 'axios';
const baseUrl="http://localhost:9090/products"
class ProductService{
    constructor(){
        this.prodarr=[{pid:1,pname:'chair',qty:34,price:4444},
        {pid:2,pname:'Table',qty:50,price:6666},
        {pid:3,pname:'shelf',qty:30,price:2222}];
    }
    getAllProducts(){
        //return this.prodarr;
       return axios.get(baseUrl);
    //    return axios.get("http://localhost:8282/products")
    }
    insertProduct(product){
        console.log("in service add")
       //this.prodarr.push(product);
       //console.log(this.prodarr);
       return axios.post(baseUrl+"/product/"+product.pid,product)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    }

    deleteproduct(pid){
       // let pos=this.prodarr.findIndex(p=>p.pid==pid);
       // this.prodarr.splice(pos,1);
       return axios.delete(baseUrl+"/product/"+pid)
    }
    getById(id){
       // return this.prodarr.find(p=>p.pid==id);
       return axios.get(baseUrl+"/product/"+id)
    }
    updateproduct(prod){
        //let pos=this.prodarr.findIndex(p=>p.pid==prod.pid);
       // this.prodarr.splice(pos,1,{...prod});
       return axios.put(baseUrl+"/product/"+prod.pid,prod)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    }

}

export default new ProductService();