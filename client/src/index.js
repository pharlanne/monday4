var Bank = require("./bank/bank.js");
var sampleAccounts = require("./sample.json");
var Account = require("./bank/account.js");

window.onload = function(){
  console.log("webpack app started");
  var bank = new Bank();
  for(var accountData of sampleAccounts){
    bank.addAccount(new Account(accountData));
  }

  console.log("Our bank", bank);
  console.log("total cash", bank.totalCash());

  var totalDisplay = document.getElementById("total");
  totalDisplay.innerText = "Total: £" + bank.totalCash();

  var accounts = bank.accounts;
  var businessDisplay = document.getElementById("business-total");
  businessDisplay.innerText = "Business Account Total: £" + bank.totalCash("business");
  accounts.forEach(function(account){
  var list= document.getElementById("business-total");
  var li = document.createElement("li");
  li.innerText=account.owner + " £ " + account.amount;
  list.appendChild(li);
});


  var personalDisplay = document.getElementById("personal-total");
  personalDisplay.innerText = "Personal Account Total: £" + bank.totalCash("personal").toFixed(2);
    accounts.forEach(function(account){
    var list= document.getElementById("personal-total");
    var li = document.createElement("li");
    li.innerText= account.owner + " £ " + account.amount;
   list.appendChild(li);
  });

  
};
