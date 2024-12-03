## Generate a new CA private key
```
openssl genrsa -out new_ca.key 4096
```
## Create a new Certificate
```
openssl req -new -x509 -days 3650 -key new_ca.key -out new_ca.crt
```
## Create a private key for a new user
```
openssl genrsa -out user.key 2048
```
## Create a Certificate Signing Request (CSR) for the new user:
```
openssl req -new -key user.key -out user.csr
```
## Sign the CSR with the new CA
```
openssl x509 -req -days 365 -in user.csr -CA new_ca.crt -CAkey new_ca.key -CAcreateserial -out user.crt
```
## Verify the signed certificate:
```
openssl x509 -in user.crt -noout -text
```
