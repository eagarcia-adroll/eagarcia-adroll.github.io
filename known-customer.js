class KnownCustomerOperation {
    async run() {
        const knownCustomer = await sharedStorage.get('known-customer');
        console.log(knownCustomer);
        console.log(privateAggregation);
        console.log(navigator);
    }
}

register('known-customer', KnownCustomerOperation);
