class KnownCustomerOperation {
    async run(data) {
        const knownCustomer = await sharedStorage.get('known-customer');
        console.log(knownCustomer);
        console.log(data);
        console.log(data.joinAdInterestGroup);
    }
}

register('known-customer', KnownCustomerOperation);
