# MYPKI

### Resources

https://deliciousbrains.com/ssl-certificate-authority-for-local-https-development/

https://www.ibm.com/docs/en/license-metric-tool?topic=certificate-step-2-signing-certificates


```

echo 'generate private key to become a local CA'
openssl genrsa -des3 -out myCA.key 2048

echo 'generate root certificate'
openssl req -x509 -new -nodes -key myCA.key -sha256 -days 1825 -out myCA.pem

echo 'generate the private key to become a local CA'

mkdir -p /usr/local/share/ca-cerfiticates
sudo cp ~/myCA.pem /usr/local/share/ca-certificates/myCA.crt

sudo update-ca-certificates

awk -v cmd='openssl x509 -noout -subject' '/BEGIN/{close(cmd)};{print | cmd}' < /etc/ssl/certs/ca-certificates.crt | grep Fazus

openssl genrsa -out fazus.test.key 2048
openssl req -new -key fazus.test.key -out fazus.test.csr


# private and public key
openssl genrsa -out client_private_key.pem 2048
openssl rsa -pubout -in client_private_key.pem -out client_public_key.pem

# create a client certificate signing request
openssl req -new -key client_private_key.pem -out client.csr
# sign the client.csr to create the certificate.arm (arm)?
openssl x509 -req -days 90 -in client.csr -CA myCA.pem -CAkey myCA.key -out certificate.arm -set_serial 01 -sha256


```
