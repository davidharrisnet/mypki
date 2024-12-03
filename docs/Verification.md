
## These should match
```
openssl rsa --modulus --noout -in user_private.key | openssl md5
openssl x509 --modulus --noout -in user.crt | openssl md5
```

## Verfify the certificate chain
```
openssl verify --verbose -CAfile CA.pam user.crt
user.crt: OK
```
