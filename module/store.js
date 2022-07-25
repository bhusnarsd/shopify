const mongoose =require ("mongoose");
 const Schema = mongoose.Schema;


 const storeSchema = new Schema ({
    storeName: String,
    emailID:String,
    // :String
},
{
    timestamps:true
}

 ); 

  const Store = mongoose.model("store",storeSchema);

  module.exports = Store;