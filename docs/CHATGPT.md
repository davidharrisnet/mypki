## To create a Certificate Authority (CA) and then a trusted user private key and certificate using OpenSSL, you can follow these steps:

1. **Create the CA Key and Certificate:**
   ```bash
   # Generate the CA private key
   openssl genrsa -out ca.key 2048

   # Create the CA certificate
   openssl req -x509 -new -nodes -key ca.key -sha256 -days 1024 -out ca.crt
   ```

2. **Create a Private Key for the User:**
   ```bash
   # Generate a private key for the user
   openssl genrsa -out user.key 2048
   ```

3. **Create a Certificate Signing Request (CSR) for the User:**
   ```bash
   # Generate a CSR using the user private key
   openssl req -new -key user.key -out user.csr
   ```

4. **Sign the User’s CSR with the CA:**
   ```bash
   # Sign the user's CSR with the CA to create the user certificate
   openssl x509 -req -in user.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out user.crt -days 500 -sha256
   ```

After executing these commands, you will have a CA certificate (`ca.crt`), a CA private key (`ca.key`), a user private key (`user.key`), a user CSR (`user.csr`), and a user certificate (`user.crt`).

To extract the public key from a user's private key or certificate, you can use the following OpenSSL command:

1. **Extract the Public Key from the User's Private Key:**
   ```bash
   openssl rsa -in user.key -pubout -out user_pub.key
   ```

2. **Alternatively, Extract the Public Key from the User's Certificate:**
   ```bash
   openssl x509 -in user.crt -pubkey -noout -out user_pub.key
   ```

### After executing either of these commands, the public key will be saved in the file `user_pub.key`.


