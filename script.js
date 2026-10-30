
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
