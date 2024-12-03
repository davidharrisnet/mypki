## To create a trusted user with a private key, public key, and user certificate using a certificate chain file, you can follow these steps:

1. **Generate a Private Key for the User:**
   ```bash
   openssl genrsa -out user.key 2048
   ```

2. **Create a Certificate Signing Request (CSR) for the User:**
   ```bash
   openssl req -new -key user.key -out user.csr
   ```

3. **Sign the User’s CSR with the CA Certificate from the Chain:**
   Assuming you have a certificate chain file named `chain.pem` that includes the CA certificate:
   ```bash
   openssl x509 -req -in user.csr -CA chain.pem -CAkey ca.key -CAcreateserial -out user.crt -days 500 -sha256
   ```

4. **Extract the Public Key from the User’s Certificate:**
   ```bash
   openssl x509 -in user.crt -pubkey -noout -out user_pub.key
   ```

After executing these commands, you will have the following files:
- `user.key`: User's private key
- `user.crt`: User's certificate
- `user_pub.key`: User's public key

