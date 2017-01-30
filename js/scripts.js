function Driver(name, number) {
    this.inputName = name;
    this.inputNumber = number;
}

Driver.prototype.driverDetails = function() {
    return this.inputName + "<br>" + this.inputNumber;
}

$(document).ready(function() {
    $("for#driver-contact").submit(function(event) {

        event.preventDefault();

        var inputtedName = $("input#inputName").val();
        var inputtedNumber = $("input#inputNumber").val();

        var newContact = new Contact(inputtedName, inputtedNumber);
        $("input#inputName").val();
        $("input#inputNumber").val();
    });


    console.log(newContact);
});
