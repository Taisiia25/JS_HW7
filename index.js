// Exercise 1
console.log('Exercise 1')

// Создать поиск кандидатов в массиве candidateArr по номеру телефона. 
// Номер телефона может быть указан не полностью и в любом формате.

const formatPhoneNumber = (phone) =>
  phone.replaceAll(' ', '').split('').filter((el) => !isNaN(Number(el))).join('')

const searchCandidatesByPhoneNumber = (phoneNumber) => {
  const formatedPhone = formatPhoneNumber(phoneNumber);
  
  return condidateArr.filter((item) => {
    const formatedObjPhone = formatPhoneNumber(item.phone);
    
    return formatedObjPhone.indexOf(formatedPhone) > -1
  });
};

console.log(searchCandidatesByPhoneNumber('+1(869) 40'));


// Exercise 2
console.log('Exercise 2')

// Создать функию которая найдет кандидата по  _id и вернет его из массива candidatesArr 
// c отформатированной датой регистрации (поле registred). 
// Дата должна иметь формат DD/MM/YY.

const getCandidateById = id => {
    const condidate = condidateArr.find((item) => {
      return item._id === id
    });
  
    const indexT = condidate.registered.indexOf('T')
    const date = condidate.registered.slice(0, indexT)
  
    const [year, month, day] = date.split("-");
    // const dateArray = date.split("-")
    // const year = dateArray[0]
    // const month = dateArray[1]
    // const day = dateArray[2]
  
    console.log(date, year, month, day);
  
    condidate.registered = `${day}/${month}/${year}`;
  
    return condidate;
};

console.log(getCandidateById('5e216bc9a6059760578aefa4'));

// Exercise 3
console.log('Exercise 3')

// Написать функцию которая будет сортировать массив canidatesArr по количеству денег лежащих на 
// балансе (смотрим свойство balance)   в том порядке, в котором ей укажут в аргементе sortBy. 
// Если параметр не был передан, то вернет массив в первоначальном состоянии.


const formatBalance = (balance) => {
    const balanceNumber = balance.replace('$', '').replace(',', '');
  
    return parseFloat(balanceNumber);
  };
  
  const sortCandidatesArr = sortBy => {
    if (!sortBy) {
      return condidateArr
    };
  
    return condidateArr.sort((itemA, itemB) => {
      const balanceA = formatBalance(itemA.balance)
      const balanceB = formatBalance(itemB.balance)
  
      if (sortBy === 'asc') {
        return balanceA - balanceB
      } else {
        return balanceB - balanceA
      }
  
    });
};

console.log(sortCandidatesArr('asc'));