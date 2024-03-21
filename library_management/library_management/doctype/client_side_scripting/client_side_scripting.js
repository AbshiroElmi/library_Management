// Copyright (c) 2024, abshiraAato and contributors
// For license information, please see license.txt
frappe.ui.form.on("client_side_scripting", {
// 	refresh(frm) {
// frappe.msgprint("hello")
// 	},


// you cant save and sumit

// validate: function(frm){
// frappe.throw("you got error")
// },


// age: function(frm){
//     frappe.msgprint("this is this your real age!")
// },



// before_submit: function(frm){
//     frappe.throw("you cant  submit")
// },

on_submit: function(frm){
    frappe.msgprint("thanks for submiting")
},


after_save: function(frm){
 frappe.msgprint(__("fullName is '{0}'",
 [frm.doc.first_name +" "+ frm.doc.middle_name +" "+ frm.doc.last_name]
 ))
},
refresh: function(frm){
 if(frm.is_new()){
    frm.set_intro("now  you can create new client side")
 }
},

enable: function(frm){
    frappe.msgprint("Hello ")


}





});
