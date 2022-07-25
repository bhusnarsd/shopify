const Store = require("./../module/store");


// store_index, store_details, store_create_get, store_create_post 

const store_index = (req,res) => {
    Store.find().sort({createdAt: -1})
    .then((result) => {
        res.render("store/index",{storeName:"all store", store :result})
    })
    .catch((err) => console.log(err))
}
const store_details = (req,res) => {
    const id = req.params.id;
   
    Store.findById(id)
    .then(result => {
       res.render("store/details", {store:result, storeName:"Store Details"});
    })
    .catch(err => {
        res.status(404).render("404", {storeName: "Store not found"});
    });
}

// const update_detail = (req,res) => {
//     const id = req.params.id;
   
//     Store.findById(id)
//     .then(result => {
//        res.render("store/details", {store:result, storeName:"Store Details"});
//     })
//     .catch(err => {
//         res.status(404).render("404", {storeName: "Store not found"});
//     });
// }
const store_update =(req, res) => {
    Store.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, (err, data) => {
        if(err){
            res.status(400).json(err);
        }else{
            res.status(200).json(data);
        }
    });
}

const store_create_get = (req,res) => {
    res.render("store/create", {storeName:"create a new store"});
}

const store_create_post = (req,res) => {
    const store = new Store (req.body);
    store.save()
    .then((result)=> {
        res.redirect("/store");
    })
    .catch((err)=> {
        console.log(err)
    })
}
module.exports = {
    store_index,
    store_details,
    store_create_get,
    store_create_post,
    store_update
}