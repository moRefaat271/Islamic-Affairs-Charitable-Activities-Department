// function printDiv(divID) {
//     //Get the HTML of div
//     var divElements = document.getElementById(divID).innerHTML;
//     //Get the HTML of whole page
//     var oldPage = document.body.innerHTML;

//     //Reset the page's HTML with div's HTML only
//     document.body.innerHTML =
//         "<html><head><title></title></head><body>" + divElements + "</body>";

//     //window.print();
//     //document.body.innerHTML = oldPage;

//     //Print Page
//     setTimeout(function () {
//         print_page();
//     }, 2000);

//     function print_page() {
//         window.print();
//     }

//     //Restore orignal HTML
//     setTimeout(function () {
//         restore_page();
//     }, 3000);

//     function restore_page() {
//         document.body.innerHTML = oldPage;
//     }
// }