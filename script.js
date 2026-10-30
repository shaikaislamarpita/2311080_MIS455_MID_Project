
var calculatedTotal = -1;

function calculateTotal() {

    var notebook = Number(document.getElementById("notebookBox").value);
    var pen = Number(document.getElementById("penBox").value);
    var planner = Number(document.getElementById("plannerBox").value);

    var total;

    if (document.getElementById("notebookBox").value == "" ||
        document.getElementById("penBox").value == "" ||
        document.getElementById("plannerBox").value == "" ||
        notebook < 0 || pen < 0 || planner < 0 ||
        !Number.isInteger(notebook) ||
        !Number.isInteger(pen) ||
        !Number.isInteger(planner)) {

        alert("Please enter valid quantities.");

    }
    else if (notebook == 0 && pen == 0 && planner == 0) {

        alert("Please select at least one product.");

    }
    else {

        total = (notebook * 250) + (pen * 180) + (planner * 350);

        calculatedTotal = total;

        document.getElementById("totalBox").value = total;
        document.getElementById("discountBox").value = "";
        document.getElementById("payableBox").value = "";

        document.getElementById("resultMessage").innerHTML =
            "Your total price is Tk " + total;

    }

}


function checkDiscount() {

    var notebook = Number(document.getElementById("notebookBox").value);
    var pen = Number(document.getElementById("penBox").value);
    var planner = Number(document.getElementById("plannerBox").value);

    var currentTotal = (notebook * 250) + (pen * 180) + (planner * 350);

    var discount;
    var payable;

    if (calculatedTotal == -1 ||
        calculatedTotal != currentTotal ||
        !Number.isInteger(notebook) ||
        !Number.isInteger(pen) ||
        !Number.isInteger(planner) ||
        notebook < 0 || pen < 0 || planner < 0) {

        alert("Please calculate the total first.");

    }
    else {

        if (calculatedTotal >= 1000) {
            discount = 100;
        }
        else {
            discount = 0;
        }

        payable = calculatedTotal - discount;

        document.getElementById("discountBox").value = discount;
        document.getElementById("payableBox").value = payable;

        document.getElementById("resultMessage").innerHTML =
            "Your final payable amount is Tk " + payable;

    }

}

/* Products Page Shopping Cart */

var cartNames = [];
var cartPrices = [];
var cartQuantities = [];


function addToCart(name, price) {

    var found = false;

    for (var i = 0; i < cartNames.length; i++) {

        if (cartNames[i] == name) {

            cartQuantities[i] = cartQuantities[i] + 1;

            found = true;
            break;

        }

    }

    if (found == false) {

        cartNames.push(name);
        cartPrices.push(price);
        cartQuantities.push(1);

    }

    var count = 0;

    for (var i = 0; i < cartQuantities.length; i++) {
        count = count + cartQuantities[i];
    }

    document.getElementById("cartCount").innerHTML = count;

    showCartPopup(name);

    showCart();

}


function showCart() {

    var details = "";
    var total = 0;

    if (cartNames.length == 0) {

        details = "<p>Your cart is empty.</p>";

    }
    else {

        details = "<h3>Your Selected Products</h3>";

        for (var i = 0; i < cartNames.length; i++) {

            var subtotal = cartPrices[i] * cartQuantities[i];

            total = total + subtotal;

            details = details +
                "<p>" + cartNames[i] +
                " - Tk " + cartPrices[i] +
                " x " + cartQuantities[i] +
                " = Tk " + subtotal + "</p>";

        }

        var discount;

        if (total >= 1000) {
            discount = 100;
        }
        else {
            discount = 0;
        }

        var payable = total - discount;

        details = details + "<hr><br>";

        details = details + "<p>Total Price: Tk " + total + "</p>";

        details = details + "<p>Discount: Tk " + discount + "</p>";

        details = details +
            "<h3>Final Payable Amount: Tk " + payable + "</h3>";

    }

    document.getElementById("cartDetails").innerHTML = details;

}


function clearCart() {

    cartNames = [];
    cartPrices = [];
    cartQuantities = [];

    document.getElementById("cartCount").innerHTML = 0;

    document.getElementById("cartDetails").innerHTML =
        "<p>Your shopping cart has been cleared.</p>";

    alert("Cart cleared successfully!");

}

/* Contact Page Functions */

function sendMessage() {

    var name = document.getElementById("nameBox").value.trim();
    var email = document.getElementById("emailBox").value.trim();
    var subject = document.getElementById("subjectBox").value.trim();
    var message = document.getElementById("messageBox").value.trim();

    if (name == "" || email == "" || subject == "" || message == "") {

        alert("Please fill in all fields.");

    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        alert("Please enter a valid email address.");

    }
    else {

        document.getElementById("contactResult").textContent =
            "Thank you, " + name + "! Your message was validated successfully. This is a demo form.";

        alert("Message form validated successfully!");

    }

}


function clearForm() {

    document.getElementById("nameBox").value = "";
    document.getElementById("emailBox").value = "";
    document.getElementById("subjectBox").value = "";
    document.getElementById("messageBox").value = "";

    document.getElementById("contactResult").textContent = "";

}

var popupTimer;

function showCartPopup(name) {

    document.getElementById("popupMessage").innerHTML =
        name + " added successfully! ♡";

    document.getElementById("cartPopup").style.display = "block";

    clearTimeout(popupTimer);

    popupTimer = setTimeout(function() {

        document.getElementById("cartPopup").style.display = "none";

    }, 2500);

}

