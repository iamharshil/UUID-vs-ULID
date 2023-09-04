# Conclusion

 - Here in test ulid might take more time to generate linear output but when it comes to IO of Database if the database does insert and write based on ULID (incrementally). it does help database to stop to goto to back n fourth in page to sort ids.
 - Therefore it looks slow on generation but it will be more performance efficient on long term. 