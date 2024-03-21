frappe.pages['library_management'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'library_management_page',
		single_column: true
	});







	$(frappe.render_template("library_management",{})).appendTo(page.body);
}