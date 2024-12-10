const params = new URLSearchParams('xver=2&lt=M&st=nebd&cl=3%2C15%2C16%2C17%2C1128%2C18&list=31&fun=reqclasses&Startdate=2024-03-15+20%3A50&EndDate=2028-03-15+20%3A50&uei=1&nsc=1&om=0&ail=0%2C0%2C0%2C0%2C19%2C0&type=json');

const decodedData = {};
for (const [key, value] of params) {
    decodedData[decodeURIComponent(key)] = decodeURIComponent(value);
}

console.log(decodedData);
