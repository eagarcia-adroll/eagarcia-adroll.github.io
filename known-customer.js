class KnownCustomerOperation {
    async run() {
        const knownCustomer = await sharedStorage.get('known-customer');
        console.log(knownCustomer);
        console.log(document);
        console.log(navigator);

    }
}

register('known-customer', KnownCustomerOperation);
