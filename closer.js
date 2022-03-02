const bank = owner =>{
    balance =0;
    return amount=>{
        balance=balance+amount;
        return balance;
    }
}


const MofijBank =bank ('mofij');
console.log(MofijBank(100)) ;
console.log(MofijBank(200)) ;
console.log(MofijBank(300)) ;
console.log(MofijBank(300)) ;
console.log(MofijBank.balance);
