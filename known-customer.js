class KnownCustomerOperation {
    async run(data) {
        const knownCustomer = await sharedStorage.get('known-customer');
        console.log(knownCustomer);
        console.log(data);
        console.log(data.navigator);
    }
}

register('known-customer', KnownCustomerOperation);
