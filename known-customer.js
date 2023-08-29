class KnownCustomerOperation {
    async run() {
        const knownCustomer = await sharedStorage.get('known-customer');
        console.log(knownCustomer);
        console.log(navigator);  // ReferenceError
    }
}

register('known-customer', KnownCustomerOperation);
